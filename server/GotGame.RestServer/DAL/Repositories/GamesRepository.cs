using GotGame.RestServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.DAL.Repositories
{
  public interface IGamesRepository
  {
    Game GetGame(int id);
    IEnumerable<Game> GetGames();

    Game SaveGame(Game game);
  }

  public class GamesRepository : IGamesRepository
  {
    private IGoTGameContextDb context;

    public GamesRepository(IGoTGameContextDb context)
    {
      this.context = context;
    }

    public Game GetGame(int id)
    {
      return context.Games.FirstOrDefault(g => g.Id == id);
    }

    public IEnumerable<Game> GetGames()
    {
      return context.Games;
    }

    public Game SaveGame(Game game)
    {
      if (game.Id == 0)
        context.Games.Add(game);
      else
      {
        Game dbEntry = GetGame(game.Id);
        if(dbEntry != null)
        {
          dbEntry.Name = game.Name;
          dbEntry.PlayerCount = game.PlayerCount;
          dbEntry.MaxPlayers = game.MaxPlayers;
        }
      }

      context.SaveChanges();

      return game;
    }
  }
}
