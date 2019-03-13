using GotGame.RestServer.DAL;
using GotGame.RestServer.DAL.Repositories;
using GotGame.RestServer.Infrastructure.Consts;
using GotGame.RestServer.Infrastructure.Models;
using GotGame.RestServer.Infrastructure.Policies;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System.Linq;

namespace GotGame.RestServer.Infrastructure.Extensions
{
  public static class ServiceCollectionExtensions
  {
    public static IServiceCollection AddGoTCors(this IServiceCollection services, AppSettings settings, ILogger logger)
    {
      logger.LogInformation("AddGoTCors");
      SecurityPolicies.AddSecurityPolicies(services, settings);
      return services;
    }

    public static IServiceCollection AddGoTDatabase(this IServiceCollection services, IConfiguration config, IHostingEnvironment environment, ILogger logger)
    {
      logger.LogInformation("AddGoTDatabase");
      EnvironmentData[] environments = config.GetEnvironmentCollection();
      switch (environment.EnvironmentName)
      {
        case Environments.Development:
          {
            var env = environments.First(e => e.Name == Environments.Development);
            logger.LogInformation($"Environments data: {env.Name}, {env.ConnectionString}");
            services.AddDbContext<GoTGameContextDb>(options =>
            {
              options.UseSqlServer(env.ConnectionString);
            });
            break;
          }
        case Environments.Release:
          {
            var env = environments.First(e => e.Name == Environments.Release);
            logger.LogInformation($"Environments data: {env.Name}, {env.ConnectionString}");
            services.AddDbContext<GoTGameContextDb>(options =>
            {
              options.UseSqlServer(env.ConnectionString);
            });
            break;
          }
        case Environments.Production:
          {
            var env = environments.First(e => e.Name == Environments.Production);
            logger.LogInformation($"Environments data: {env.Name}, {env.ConnectionString}");
            services.AddDbContext<GoTGameContextDb>(options =>
            {
              options.UseSqlServer(env.ConnectionString);
            });
            break;
          }
      }


      services.AddSingleton<IGoTGameContextDb, GoTGameContextDb>();
      services.AddTransient<IGamesRepository, GamesRepository>();

      return services;

    }
  }
}
