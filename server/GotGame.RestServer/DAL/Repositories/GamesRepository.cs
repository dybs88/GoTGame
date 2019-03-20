using GotGame.RestServer.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace GotGame.RestServer.DAL.Repositories
{
  public interface IGamesRepository
  {
    Task<Game> GetGame(int id);
    Task<IEnumerable<Game>> GetGames();

    Task<Game> SaveGame(Game game);
  }

  public class GamesRepository : IGamesRepository
  {
    private IGoTGameContextDb context;
    public GamesRepository(IGoTGameContextDb context)
    {
      this.context = context;
    }

    public async Task<Game> GetGame(int id)
    {
      var games = await context.Games
          .Include(g => g.Players).ToListAsync();

      return games
          .FirstOrDefault(g => g.Id == id);
    }

    public async Task<IEnumerable<Game>> GetGames()
    {
      return await context.Games
          .Include(g => g.Players).ToListAsync();
    }

    public async Task<Game> SaveGame(Game game)
    {
      if (game.Id == 0)
      {
        context.Games.Add(game);
      }
      else
      {
        Game dbEntry = await GetGame(game.Id);
        if (dbEntry != null)
        {
          dbEntry.Name = game.Name;
          dbEntry.MaxPlayers = game.MaxPlayers;
          dbEntry.Players = game.Players;

        }
      }

      context.Players.AddRange(game.Players.Where(p => p.Id == 0));
      await context.SaveChangesAsync(true);

      return game;
    }

    private void Refresh()
    {
      foreach (var entity in context.ChangeTracker.Entries())
      {
        entity.Reload();
      }
    }
  }
}
