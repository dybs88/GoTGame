using GotGame.RestServer.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.DAL.Repositories
{
  public interface IGameRulesRepository
  {
    Task<GameRules> GetGameRulesAsync(int gameRulesId);
    void SaveGameRules(GameRules gameRules);
  }
  public class GameRulesRepository : IGameRulesRepository
  {
    private IGoTGameContextDb context;

    public GameRulesRepository(IGoTGameContextDb context)
    {
      this.context = context;
    }

    public async Task<GameRules> GetGameRulesAsync(int gameRulesId)
    {
      var gameRules = await context.GameRules.ToListAsync();
      return gameRules.FirstOrDefault(gr => gr.Id == gameRulesId);
    }

    public async void SaveGameRules(GameRules gameRules)
    {
      if (gameRules.Id == 0)
        await context.GameRules.AddAsync(gameRules);
      else
      {
        GameRules dbEntry = await GetGameRulesAsync(gameRules.Id);
        dbEntry.GameId = gameRules.GameId;
        dbEntry.MaxPlayers = gameRules.MaxPlayers;
        dbEntry.AllHouses = gameRules.AllHouses;
        dbEntry.RandomHouses = gameRules.RandomHouses;
        dbEntry.WinCondition = gameRules.WinCondition;
        dbEntry.WinCastlesCount = gameRules.WinCastlesCount;
        dbEntry.WinPointsCount = gameRules.WinPointsCount;
        dbEntry.RoundsCount = gameRules.RoundsCount;
        dbEntry.CanLookPlayerCard = gameRules.CanLookPlayerCard;
        dbEntry.LargeCastleDefence = gameRules.LargeCastleDefence;
        dbEntry.SmallCastleDefence = gameRules.SmallCastleDefence;
      }

       await context.SaveChangesAsync(true);
    }
  }
}
