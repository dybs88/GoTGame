using GotGame.RestServer.DAL;
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
    public static IApplicationBuilder MigrateDatabase(this IApplicationBuilder app, ILogger logger)
    {
      logger.LogInformation("MigrateDatabase");
      GoTGameContextDb context = app.ApplicationServices.GetRequiredService<GoTGameContextDb>();
      context.Database.Migrate();

      return app;
    }

    public static IApplicationBuilder PopulateDatabase(this IApplicationBuilder app, ILogger logger)
    {
      logger.LogInformation("PopulateDatabase");
      GameSeedData.Populate(app);
      return app;
    }
  }
}
