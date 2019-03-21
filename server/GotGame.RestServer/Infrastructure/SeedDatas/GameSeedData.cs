using GotGame.RestServer.DAL;
using GotGame.RestServer.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Infrastructure.SeedDatas
{
  public class GameSeedData
  {
    public static void PopulateGame(IApplicationBuilder app)
    {
      GoTGameContextDb context = app.ApplicationServices.GetRequiredService<GoTGameContextDb>();

      bool saveNeeded = false;
      if(!context.Games.Any())
      {
        context.Games.AddRange(new[]
        {
          new Game { Name = "Temporary game", MaxPlayers = 3 }
        });

        saveNeeded = true;
      }

      if (saveNeeded)
        context.SaveChanges();
    }
  }
}
