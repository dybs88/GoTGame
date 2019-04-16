using GotGame.RestServer.DAL;
using GotGame.RestServer.Infrastructure.Logging;
using GotGame.RestServer.Infrastructure.SeedDatas;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Infrastructure.Extensions
{
  public static class ApplicationBuilderExtensions
  {
    public static IApplicationBuilder MigrateDatabase(this IApplicationBuilder app)
    {
      GoTGameContextDb context = app.ApplicationServices.GetRequiredService<GoTGameContextDb>();
      context.Database.Migrate();
      IdentityContextDb identityContext = app.ApplicationServices.GetRequiredService<IdentityContextDb>();
      identityContext.Database.Migrate();

      return app;
    }

    public static IApplicationBuilder PopulateDatabase(this IApplicationBuilder app)
    {
      GameSeedData.PopulateGame(app);
      UserSeedData.PopulateUser(app);
      return app;
    }

    public static IApplicationBuilder UseLoggingMiddlewares(this IApplicationBuilder app)
    {
      app.UseMiddleware<ExceptionHandlerMiddleware>();

      return app;
    }
  }
}
