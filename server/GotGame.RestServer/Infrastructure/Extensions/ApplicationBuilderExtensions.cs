using GotGame.RestServer.DAL;
using GotGame.RestServer.DAL.Repositories;
using GotGame.RestServer.Infrastructure.Logging;
using GotGame.RestServer.Infrastructure.SeedDatas;
using GotGame.RestServer.Infrastructure.Storage;
using GotGame.RestServer.Models;
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

    public static IApplicationBuilder UseGoTStorage(this IApplicationBuilder app)
    {
      IGoTStorage storage = app.ApplicationServices.GetRequiredService<IGoTStorage>();
      GoTGameContextDb context = app.ApplicationServices.GetRequiredService<GoTGameContextDb>();

      var games = context.Games.ToList();

      foreach(Game game in games)
      {
        var playerIds = context.Players.Where(p => p.GameId == game.Id).Select(p => p.Id).ToArray();
        storage.CreateGameStorage(game.Id, playerIds);
      }

      return app;
    }
  }
}
