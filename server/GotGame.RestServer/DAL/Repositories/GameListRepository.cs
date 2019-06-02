using GotGame.RestServer.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace GotGame.RestServer.DAL.Repositories
{
  public interface IGameListRepository
  {
    Task<int> DeleteGameAsync(int gameId);
    Task<Game> GetGameAsync(int id);
    Task<IEnumerable<Game>> GetGamesAsync();
    Task<Game> SaveGameAsync(Game game, string password = "");

    Task<bool> VerifyPassword(int gameId, string password);
  }

  public class GameListRepository : IGameListRepository
  {
    private GoTGameContextDb context;
    IPasswordHasher<Game> passwordHasher;

    public GameListRepository(GoTGameContextDb context, IPasswordHasher<Game> passwordHasher)
    {
      this.context = context;
      this.passwordHasher = passwordHasher;
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
      return await context.Games
        .Include(g => g.Players)
        .Include(g => g.GameRules)
        .FirstOrDefaultAsync(g => g.Id == id);
    }

    public async Task<IEnumerable<Game>> GetGamesAsync()
    {
      return await context.Games
          .Include(g => g.Players)
          .Include(g => g.GameRules).ToListAsync();
    }

    public async Task<Game> SaveGameAsync(Game game, string password = "")
    {
      if (game.Id == 0)
      {
        game.PasswordHash = passwordHasher.HashPassword(game, password);
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
          dbEntry.IsPrivate = game.IsPrivate;
          dbEntry.PasswordHash = game.PasswordHash;
        }
      }

      context.Players.AddRange(game.Players.Where(p => p.Id == 0));
      await context.SaveChangesAsync(true);

      return game;
    }

    public async Task<bool> VerifyPassword(int gameId, string password)
    {
      Game game = await GetGameAsync(gameId);
      if (game == null)
        return false;
      var result = passwordHasher.VerifyHashedPassword(game, game.PasswordHash, password);
      if (result == PasswordVerificationResult.Success)
        return true;
      else
        return false;
    }
  }
}
