using GotGame.RestServer.Models;
using Microsoft.EntityFrameworkCore;
using System;
using GotGame.RestServer.Infrastructure.Consts;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Threading.Tasks;
using System.Threading;

namespace GotGame.RestServer.DAL
{
  public interface IGoTGameContextDb
  {
    DbSet<Game> Games { get; }
    DbSet<Player> Players { get; }
    DbSet<User> Users { get; }

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

    public DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      builder
          .Entity<Player>()
          .Property(p => p.House)
          .HasConversion(
              v => v.ToString(),
              v => (House)Enum.Parse(typeof(House), v));
      builder
        .Entity<Player>()
        .Property(p => p.Status)
        .HasConversion(
          v => v.ToString(),
          v => (PlayerStatus)Enum.Parse(typeof(PlayerStatus), v));
    }
  }
}
