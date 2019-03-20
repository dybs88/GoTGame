using GotGame.RestServer.Models;
using Microsoft.EntityFrameworkCore;
using System;
using GotGame.RestServer.Infrastructure.Consts;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace GotGame.RestServer.DAL
{
  public interface IGoTGameContextDb
  {
    DbSet<Game> Games { get; set; }
    DbSet<Player> Players { get; set; }

    ChangeTracker ChangeTracker { get; }

    int SaveChanges();
    int SaveChanges(bool acceptAllChangesOnSuccess);
  }


  public class GoTGameContextDb : DbContext, IGoTGameContextDb
  {
    public GoTGameContextDb(DbContextOptions<GoTGameContextDb> options)
        : base(options)
    { }

    public DbSet<Game> Games { get; set; }

    public DbSet<Player> Players { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      builder
          .Entity<Player>()
          .Property(p => p.House)
          .HasConversion(
              v => v.ToString(),
              v => (House)Enum.Parse(typeof(House), v));
    }
  }
}
