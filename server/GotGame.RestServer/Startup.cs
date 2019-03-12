using GotGame.RestServer.Infrastructure.Consts;
using GotGame.RestServer.Infrastructure.Extensions;
using GotGame.RestServer.Infrastructure.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace GotGame.RestServer
{
  public class Startup
  {
    private IConfiguration configuration;
    private AppSettings appSettings;

    public Startup(IConfiguration config)
    {
      configuration = config;
      appSettings = config.GetAppSettings();
    }

    public void ConfigureServices(IServiceCollection services)
    {
      services
        .AddGoTCors(appSettings)
        .AddGoTDatabase(configuration)
        .AddMvc();

    }

    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      app.UseCors(GotConsts.CorsPolicy)
      .PopulateDatabase()
      .UseDeveloperExceptionPage()
      .UseStatusCodePages()
      .UseStaticFiles()
      .UseMvc();
    }
  }
}
