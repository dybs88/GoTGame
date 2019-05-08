using GotGame.RestServer.Infrastructure.Consts;
using GotGame.RestServer.Infrastructure.Models;
using Microsoft.Extensions.DependencyInjection;

namespace GotGame.RestServer.Infrastructure.Policies
{
  public class SecurityPolicies
  {
    public static void AddSecurityPolicies(IServiceCollection services, AppSettings settings)
    {
      services.AddCors(o =>
      {
        o.AddPolicy(GotConsts.CorsPolicy, policy =>
        {
          policy.WithOrigins(settings.WebClientAddress)
              .WithMethods("GET", "POST", "PUT", "DELETE")
              .AllowAnyHeader()
              .AllowCredentials();
        });
      });
    }
  }
}
