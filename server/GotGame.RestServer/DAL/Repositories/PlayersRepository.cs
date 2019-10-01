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
    Task<Player> GetPlayerByIpAsync(string ipAddress);
    Task<IList<Player>> GetGamePlayersAsync(int gameId);
    Task<Player> SavePlayerAsync(Player player);
  }

  public class PlayersRepository : BaseRepository, IPlayersRepository
  {
    private IGameListRepository gamesRepository;

    public PlayersRepository(GoTGameContextDb context, IGoTStorage storage, IGameListRepository gamesRepo)
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

    public async Task<Player> GetPlayerByIpAsync(string ipAddress)
    {
      return await context.Players.FirstOrDefaultAsync(p => p.IpAddress == ipAddress);
    }

    public async Task<IList<Player>> GetGamePlayersAsync(int gameId)
    {
      return await context.Players.Where(p => p.GameId == gameId).ToListAsync();
    }

    public async Task<Player> SavePlayerAsync(Player player)
    {
      if (player.Id == 0 && !CheckIfPlayerWithIpAddressExist(player.IpAddress))
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
        dbEntry.Locale = player.Locale;
      }

      await context.SaveChangesAsync(true);
      return player;
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

    private bool CheckIfPlayerWithIpAddressExist(string ipAddress)
    {
      return context.Players.Any(p => p.IpAddress == ipAddress);
    }
  }
}
