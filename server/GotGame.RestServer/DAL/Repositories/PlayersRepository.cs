using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GotGame.RestServer.DAL.Repositories.Base;
using GotGame.RestServer.Infrastructure.Consts;
using GotGame.RestServer.Infrastructure.Storage;
using GotGame.RestServer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace GotGame.RestServer.DAL.Repositories
{
  public interface IPlayersRepository
  {
    Task<int> DeletePlayerAsync(int playerId);
    Task<Player> GetPlayerAsync(int playerId);
    Task<IList<Player>> GetGamePlayersAsync(int gameId);
    Task<Player> SavePlayerAsync(Player player);
    Task<IEnumerable<Player>> SavePlayersAsync(IEnumerable<Player> players);
  }

  public class PlayersRepository : BaseRepository, IPlayersRepository
  {
    private IGamesRepository gamesRepository;

    public PlayersRepository(GoTGameContextDb context, IGoTStorage storage, IGamesRepository gamesRepo)
      :base (context, storage)
    {
      gamesRepository = gamesRepo;
    }

    public async Task<int> DeletePlayerAsync(int playerId)
    {
      Player player = await GetPlayerAsync(playerId);
      if(player != null)
      {
        if (player.IsGameCreator)
        {
          await ChangeGameCreatorAsync(player.GameId);
        }

        context.Players.Remove(player);
        await context.SaveChangesAsync(true);

        var playersLeftInGame = await GetGamePlayersAsync(player.GameId);
        if(playersLeftInGame.All(p => p.Id == playerId))
          await gamesRepository.DeleteGameAsync(player.GameId);
      }

      return 1;
    }

    public async Task<Player> GetPlayerAsync(int playerId)
    {
      return await context.Players.FirstOrDefaultAsync(p => p.Id == playerId);
    }

    public async Task<IList<Player>> GetGamePlayersAsync(int gameId)
    {
      return await context.Players.Where(p => p.GameId == gameId).ToListAsync();
    }

    public async Task<Player> SavePlayerAsync(Player player)
    {
      if (player.Id == 0)
      {
        await context.Players.AddAsync(player);
      }
      else
      {
        Player dbEntry = await GetPlayerAsync(player.Id);
        if (player.IsGameCreator && !dbEntry.IsGameCreator)
          storage.SetItem(player.GameId, SessionKeys.NewGameCreator, bool.TrueString);

        dbEntry.GameId = player.GameId;
        dbEntry.House = player.House;
        dbEntry.IpAddress = player.IpAddress;
        dbEntry.Name = player.Name;
        dbEntry.Status = player.Status;
        dbEntry.IsGameCreator = player.IsGameCreator;
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

    private async Task<int> ChangeGameCreatorAsync(int gameId)
    {
      var currentGameCreator = await context.Players.FirstOrDefaultAsync(p => p.GameId == gameId && p.IsGameCreator);
      if(currentGameCreator != null)
      {
        Player newCreator = await context.Players.FirstOrDefaultAsync(p => p.GameId == gameId && p.Id != currentGameCreator.Id);
        if(newCreator != null)
        {
          newCreator.IsGameCreator = true;
          storage.SetItem(gameId, SessionKeys.NewGameCreator, bool.TrueString);
          return 1;
        }

        storage.SetItem(gameId, SessionKeys.NewGameCreator, bool.FalseString);
        return 0;
      }

      storage.SetItem(gameId, SessionKeys.NewGameCreator, bool.FalseString);
      return 0;
    }
  }
}
