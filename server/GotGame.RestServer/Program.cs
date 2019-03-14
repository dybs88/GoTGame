using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Configuration;

namespace GotGame.RestServer
{
  public class Program
  {
    public static void Main(string[] args)
    {
      var webHost = CreateWebHostBuilder(args).Build();

      var logger = webHost.Services.GetRequiredService<ILogger<Program>>();
      logger.LogInformation("Run host");

      webHost.Run();
    }

    public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
        WebHost.CreateDefaultBuilder(args)
            .UseStartup<Startup>()
            .UseDefaultServiceProvider(options => options.ValidateScopes = false)
            .UseIISIntegration()
            .ConfigureLogging((hostingContext, logging) =>
            {
              logging.AddConfiguration(hostingContext.Configuration.GetSection("Logging"));
              logging.AddConsole();
              logging.AddDebug();
              logging.AddEventSourceLogger();
            });
  }
}
