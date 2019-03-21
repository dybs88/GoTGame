using GotGame.RestServer.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.DAL
{
  public class IdentityContextDb : IdentityDbContext<User>
  {
    public IdentityContextDb(DbContextOptions<IdentityContextDb> options) : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      base.OnModelCreating(builder);

      builder.Entity<User>().ToTable("Users", "Security");
      builder.Entity<IdentityRole>().ToTable("Roles", "Security");
      builder.Entity<IdentityUserRole<string>>().ToTable("UserRoles", "Security");
      builder.Entity<IdentityUserClaim<string>>().ToTable("UserClaims", "Security");
      builder.Entity<IdentityUserLogin<string>>().ToTable("UserLogins", "Security");
      builder.Entity<IdentityUserToken<string>>().ToTable("UserTokens", "Security");
      builder.Entity<IdentityRoleClaim<string>>().ToTable("RoleClaims", "Security");
    }
  }
}
