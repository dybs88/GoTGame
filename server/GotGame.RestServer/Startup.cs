using GotGame.RestServer.Infrastructure.Consts;
using GotGame.RestServer.Infrastructure.Extensions;
using GotGame.RestServer.Infrastructure.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace GotGame.RestServer
{
  public class Startup
  {
    private IConfiguration configuration;
    private IHostingEnvironment hostingEnvironment;
    private ILogger logger;
    private AppSettings appSettings;

    public Startup(IConfiguration config, IHostingEnvironment env, ILogger<Startup> logger)
    {
      configuration = config;
      hostingEnvironment = env;
      this.logger = logger;
      appSettings = config.GetAppSettings();
    }

    public void ConfigureServices(IServiceCollection services)
    {
      services
        .AddGoTCors(appSettings, logger)
        .AddGoTDatabase(configuration, hostingEnvironment, logger)
        .Configure<IISOptions>(options =>
        {
          options.AutomaticAuthentication = false;
        })
        .AddMvc();
    }

    public void Configure(IApplicationBuilder app)
    {
      app.UseCors(GotConsts.CorsPolicy)
        .MigrateDatabase(logger)
        .PopulateDatabase(logger)
        .UseDeveloperExceptionPage()
        .UseStatusCodePages()
        .UseStaticFiles()
        .UseMvc(options =>
        {
          options.MapRoute("default", "{controller}/{action}", new { controller = "Home", action = "Index" });
        });
    }
  }
}
