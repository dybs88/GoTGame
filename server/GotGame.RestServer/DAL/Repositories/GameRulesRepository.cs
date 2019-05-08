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
    Task<GameRules> GetGameRulesByGameIdAsync(int gameId);
    Task<int> SaveGameRules(GameRules gameRules);
  }
  public class GameRulesRepository : IGameRulesRepository
  {
    private GoTGameContextDb context;

    public GameRulesRepository(GoTGameContextDb context)
    {
      this.context = context;
    }

    public async Task<GameRules> GetGameRulesAsync(int gameRulesId)
    {
      return await context.GameRules.FirstOrDefaultAsync(gr => gr.Id == gameRulesId);
    }

    public async Task<GameRules> GetGameRulesByGameIdAsync(int gameId)
    {
      return await context.GameRules.FirstOrDefaultAsync(gr => gr.GameId == gameId);
    }

    public async Task<int> SaveGameRules(GameRules gameRules)
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
        dbEntry.MercenaryAvaible = gameRules.MercenaryAvaible;
      }

       await context.SaveChangesAsync(true);

      return 1;
    }
  }
}
