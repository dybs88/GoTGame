using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GotGame.RestServer.Models;
using Microsoft.EntityFrameworkCore;

namespace GotGame.RestServer.DAL.Repositories
{
  public interface IPlayersRepository
  {
    void DeletePlayerAsync(int playerId);
    Task<Player> GetPlayerAsync(int playerId);
    Task<Player> SavePlayerAsync(Player player);
    Task<IEnumerable<Player>> SavePlayersAsync(IEnumerable<Player> players);
  }

  public class PlayersRepository : IPlayersRepository
  {
    private IGoTGameContextDb context;

    public PlayersRepository(IGoTGameContextDb context)
    {
      this.context = context;
    }

    public async void DeletePlayerAsync(int playerId)
    {
      Player player = await GetPlayerAsync(playerId);
      context.Players.Remove(player);
      await context.SaveChangesAsync(true);
    }

    public async Task<Player> GetPlayerAsync(int playerId)
    {
      var players = await context.Players.ToListAsync();
      return players.FirstOrDefault(p => p.Id == playerId);
    }

    public async Task<Player> SavePlayerAsync(Player player)
    {
      if (player.Id == 0)
      {
        context.Players.Add(player);
      }
      else
      {
        Player dbEntry = await GetPlayerAsync(player.Id);
        dbEntry.GameId = player.GameId;
        dbEntry.House = player.House;
        dbEntry.IpAddress = player.IpAddress;
        dbEntry.Name = player.Name;
        dbEntry.Status = player.Status;
      }

      await context.SaveChangesAsync(true);
      return player;
    }

    public async Task<IEnumerable<Player>> SavePlayersAsync(IEnumerable<Player> players)
    {
      if (players != null && players.Any())
      {
        context.Players.AddRange(players.Where(p => p.Id == 0));
        foreach (var player in players.Where(p => p.Id != 0))
        {
          Player dbEntry = await GetPlayerAsync(player.Id);
          dbEntry.GameId = player.GameId;
          dbEntry.House = player.House;
          dbEntry.IpAddress = player.IpAddress;
          dbEntry.Name = player.Name;
        }

        await context.SaveChangesAsync(true);
      }

      return players;
    }
  }
}
