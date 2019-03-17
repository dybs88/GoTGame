using GotGame.RestServer.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace GotGame.RestServer.DAL.Repositories
{
  public interface IGamesRepository
  {
    Game GetGame(int id);
    IQueryable<Game> GetGames();

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
      Refresh();
      return context.Games
          .Include(g => g.Players)
          .FirstOrDefault(g => g.Id == id);
    }

    public IQueryable<Game> GetGames()
    {
      Refresh();
      return context.Games
          .Include(g => g.Players);
    }

    public Game SaveGame(Game game)
    {
      Refresh();
      if (game.Id == 0)
      {
        context.Games.Add(game);
      }
      else
      {
        Game dbEntry = GetGame(game.Id);
        if (dbEntry != null)
        {
          dbEntry.Name = game.Name;
          dbEntry.MaxPlayers = game.MaxPlayers;
          dbEntry.Players = game.Players;

        }
      }

      context.Players.AddRange(game.Players.Where(p => p.Id == 0));
      context.SaveChanges();

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
