using GotGame.RestServer.Infrastructure.Consts;
using GotGame.RestServer.Infrastructure.Extensions;
using GotGame.RestServer.Infrastructure.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace GotGame.RestServer
{
  public class Startup
  {
    private IConfiguration configuration;
    private IHostingEnvironment hostingEnvironment;
    private AppSettings appSettings;
    private ILoggerFactory loggerFactory;
    private ILogger<Startup> logger;

    public Startup(IConfiguration config, IHostingEnvironment env, ILoggerFactory loggerFactory)
    {
      configuration = config;
      hostingEnvironment = env;
      appSettings = config.GetAppSettings();
      this.loggerFactory = loggerFactory;
    }

    public void ConfigureServices(IServiceCollection services)
    {
      services
        .AddGoTCors(appSettings)
        .AddGoTDatabase(configuration, hostingEnvironment)
        .AddGoTStorage()
        .AddIdentity(configuration, hostingEnvironment)
        .AddAppSettings(configuration)
        .Configure<IISOptions>(options =>
        {
          options.AutomaticAuthentication = false;
        })
        .AddJwtHandler(configuration);

      services
      .AddMvc().AddJsonOptions(options =>
        {
          options.SerializerSettings.Converters.Add(new Newtonsoft.Json.Converters.StringEnumConverter());
          options.SerializerSettings.NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore;
        });

      loggerFactory.AddFile("Logs/log-{Date}.txt");
    }

    public void Configure(IApplicationBuilder app)
    {
      app.UseCors(GotConsts.CorsPolicy)
        .MigrateDatabase()
        .PopulateDatabase()
        .UseLoggingMiddlewares()
        .UseGoTStorage()
        .UseDeveloperExceptionPage()
        .UseStatusCodePages()
        .UseStaticFiles()
        .UseAuthentication()
        .UseMvc(options =>
        {
          options.MapRoute("default", "{controller}/{action}", new { controller = "Home", action = "Index" });
        });
    }
  }
}
