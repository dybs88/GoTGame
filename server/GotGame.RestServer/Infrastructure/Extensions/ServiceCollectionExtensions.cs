using GotGame.RestServer.DAL;
using GotGame.RestServer.DAL.Repositories;
using GotGame.RestServer.Infrastructure.Models;
using GotGame.RestServer.Infrastructure.Policies;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Infrastructure.Extensions
{
  public static class ServiceCollectionExtensions
  {
    public static IServiceCollection AddGoTCors(this IServiceCollection services, AppSettings settings)
    {
      SecurityPolicies.AddSecurityPolicies(services, settings);
      return services;
    }

    public static IServiceCollection AddGoTDatabase(this IServiceCollection services, IConfiguration config)
    {
      services.AddDbContext<GoTGameContextDb>(options =>
      {
        options.UseSqlServer(config["debugEnvironment:ConnectionStrings:GoTGameDB:connectionString"]);
      });

      services.AddSingleton<IGoTGameContextDb, GoTGameContextDb>();

      services.AddTransient<IGamesRepository, GamesRepository>();

      return services;

    }
  }
}
