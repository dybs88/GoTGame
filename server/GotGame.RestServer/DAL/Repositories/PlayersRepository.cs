using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GotGame.RestServer.Models;

namespace GotGame.RestServer.DAL.Repositories
{
  public interface IPlayersRepository
  {
    Player GetPlayer(int playerId);
    Player SavePlayer(Player player);
    IEnumerable<Player> SavePlayers(IEnumerable<Player> players);
  }

  public class PlayersRepository : IPlayersRepository
  {
    private IGoTGameContextDb context;

    public PlayersRepository(IGoTGameContextDb context)
    {
      this.context = context;
    }

    public Player GetPlayer(int playerId)
    {
      return context.Players.FirstOrDefault(p => p.Id == playerId);
    }

    public Player SavePlayer(Player player)
    {
      if (player.Id == 0)
      {
        context.Players.Add(player);
      }
      else
      {
        Player dbEntry = GetPlayer(player.Id);
        dbEntry.GameId = player.GameId;
        dbEntry.House = player.House;
        dbEntry.IpAddress = player.IpAddress;
        dbEntry.Name = player.Name;
      }

      context.SaveChanges();
      return player;
    }

    public IEnumerable<Player> SavePlayers(IEnumerable<Player> players)
    {
      if (players != null && players.Any())
      {
        context.Players.AddRange(players.Where(p => p.Id == 0));
        foreach (var player in players.Where(p => p.Id != 0))
        {
          Player dbEntry = GetPlayer(player.Id);
          dbEntry.GameId = player.GameId;
          dbEntry.House = player.House;
          dbEntry.IpAddress = player.IpAddress;
          dbEntry.Name = player.Name;
        }

        context.SaveChanges();
      }

      return players;
    }
  }
}
