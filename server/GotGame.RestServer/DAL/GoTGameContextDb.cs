using GotGame.RestServer.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.DAL
{
  public interface IGoTGameContextDb
  {
    DbSet<Game> Games { get; set; }

    int SaveChanges();
    int SaveChanges(bool acceptAllChangesOnSuccess);
  }


  public class GoTGameContextDb : DbContext, IGoTGameContextDb
  {
    public GoTGameContextDb(DbContextOptions<GoTGameContextDb> options)
      : base(options)
    { }

    public DbSet<Game> Games { get; set; }
  }
}
