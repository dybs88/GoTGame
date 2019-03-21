using GotGame.RestServer.DAL;
using GotGame.RestServer.DAL.Repositories;
using GotGame.RestServer.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Infrastructure.SeedDatas
{
  public class UserSeedData
  {
    public static async void PopulateUser(IApplicationBuilder app)
    {
      IUserRepository userRepository = app.ApplicationServices.GetRequiredService<IUserRepository>();

      User adminUser = await userRepository.FindByNameAsync("admin");

      if(adminUser == null)
      {
        adminUser = new User("admin");
        await userRepository.CreateAsync(adminUser, "Admin1!");
      }
    }
  }
}
