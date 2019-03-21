using GotGame.RestServer.DAL;
using GotGame.RestServer.DAL.Repositories;
using GotGame.RestServer.Infrastructure.Consts;
using GotGame.RestServer.Infrastructure.Models;
using GotGame.RestServer.Infrastructure.Policies;
using GotGame.RestServer.Infrastructure.Services;
using GotGame.RestServer.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
      services.AddTransient<IPlayersRepository, PlayersRepository>();

      services.AddTransient<IUserRepository, UserRepository>();
      services.AddTransient<ISignInService, SignInService>();

      return services;

    }

    public static IServiceCollection AddIdentity(this IServiceCollection services, IConfiguration config, IHostingEnvironment environment)
    {
      EnvironmentData[] environments = config.GetEnvironmentCollection();
      switch (environment.EnvironmentName)
      {
        case Environments.Development:
          {
            var env = environments.First(e => e.Name == Environments.Development);
            services.AddDbContext<IdentityContextDb>(options =>
            {
              options.UseSqlServer(env.ConnectionString);
            });
            break;
          }
        case Environments.Release:
          {
            var env = environments.First(e => e.Name == Environments.Release);
            services.AddDbContext<IdentityContextDb>(options =>
            {
              options.UseSqlServer(env.ConnectionString);
            });
            break;
          }
        case Environments.Production:
          {
            var env = environments.First(e => e.Name == Environments.Production);
            services.AddDbContext<IdentityContextDb>(options =>
            {
              options.UseSqlServer(env.ConnectionString);
            });
            break;
          }
      }

      services
        .AddIdentity<User, IdentityRole>()
        .AddEntityFrameworkStores<IdentityContextDb>()
        .AddDefaultTokenProviders();

      return services;

    }

    public static IServiceCollection AddJwtHandler(this IServiceCollection services, IConfiguration config)
    {
      var settings = config.GetAppSettings();
      var key = Encoding.ASCII.GetBytes(settings.Secret);

      services.AddAuthentication(x =>
      {
        x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
      })
      .AddJwtBearer(x =>
      {
        x.Events = new JwtBearerEvents
        {
          OnTokenValidated = context =>
          {
            var userManager = context.HttpContext.RequestServices.GetRequiredService<IUserRepository>();
            var user = userManager.FindByIdAsync(context.Principal.Identity.Name);

            if (user == null)
            {
              context.Fail("Brak autoryzacji");
            }
            return Task.CompletedTask;
          }
        };
        x.RequireHttpsMetadata = false;
        x.SaveToken = true;
        x.TokenValidationParameters = new TokenValidationParameters
        {
          ValidateIssuerSigningKey = true,
          IssuerSigningKey = new SymmetricSecurityKey(key),
          ValidateIssuer = false,
          ValidateAudience = false
        };
      });

      return services;
    }

    public static IServiceCollection AddAppSettings(this IServiceCollection services, IConfiguration config)
    {
      var appSettingsSection = config.GetSection("appSettings");
      services.Configure<AppSettings>(appSettingsSection);

      return services;
    }
  }
}
