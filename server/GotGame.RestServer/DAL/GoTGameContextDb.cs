using GotGame.RestServer.Models;
using Microsoft.EntityFrameworkCore;
using System;
using GotGame.RestServer.Infrastructure.Consts;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Threading.Tasks;
using System.Threading;
using Microsoft.AspNetCore.Identity;
using GotGame.RestServer.DAL.Repositories;

namespace GotGame.RestServer.DAL
{
  public interface IGoTGameContextDb
  {
    DbSet<Game> Games { get; }
    DbSet<Player> Players { get; }
    DbSet<GameRules> GameRules { get; }
    ChangeTracker ChangeTracker { get; }
    Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default(CancellationToken));
  }

  public class GoTGameContextDb : DbContext, IGoTGameContextDb
  {
    public GoTGameContextDb(DbContextOptions<GoTGameContextDb> options)
        : base(options)
    { }

    public DbSet<Game> Games { get; set; }
    public DbSet<Player> Players { get; set; }
    public DbSet<GameRules> GameRules { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      builder
          .Entity<Player>()
          .Property(p => p.House)
          .HasConversion(
              v => v.ToString(),
              v => (HouseType)Enum.Parse(typeof(HouseType), v));
      builder
        .Entity<Player>()
        .Property(p => p.Status)
        .HasConversion(
          v => v.ToString(),
          v => (PlayerStatus)Enum.Parse(typeof(PlayerStatus), v));
      
      builder
        .Entity<GameRules>()
        .Property(g => g.WinCondition)
        .HasConversion(
        v => v.ToString(),
        v => (WinCondition)Enum.Parse(typeof(WinCondition), v));
    }
  }
}
