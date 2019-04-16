using GotGame.RestServer.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace GotGame.RestServer.DAL.Repositories
{
  public interface IGamesRepository
  {
    Task<int> DeleteGameAsync(int gameId);
    Task<Game> GetGameAsync(int id);
    Task<IEnumerable<Game>> GetGamesAsync();
    Task<Game> SaveGameAsync(Game game);
  }

  public class GamesRepository : IGamesRepository
  {
    private IGoTGameContextDb context;
    public GamesRepository(IGoTGameContextDb context)
    {
      this.context = context;
    }

    public async Task<int> DeleteGameAsync(int gameId)
    {
      Game game = await GetGameAsync(gameId);
      context.Games.Remove(game);

      await context.SaveChangesAsync(true);
      return 1;
    }

    public async Task<Game> GetGameAsync(int id)
    {
      return await context.Games.FirstOrDefaultAsync(g => g.Id == id);
    }

    public async Task<IEnumerable<Game>> GetGamesAsync()
    {
      return await context.Games
          .Include(g => g.Players)
          .Include(g => g.GameRules).ToListAsync();
    }

    public async Task<Game> SaveGameAsync(Game game)
    {
      if (game.Id == 0)
      {
        await context.Games.AddAsync(game);
      }
      else
      {
        Game dbEntry = await GetGameAsync(game.Id);
        if (dbEntry != null)
        {
          dbEntry.Name = game.Name;
          dbEntry.GameRules = game.GameRules;
          dbEntry.Players = game.Players;

        }
      }

      context.Players.AddRange(game.Players.Where(p => p.Id == 0));
      await context.SaveChangesAsync(true);

      return game;
    }
  }
}
