using GotGame.RestServer.Infrastructure.SeedDatas;
using Microsoft.AspNetCore.Builder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Infrastructure.Extensions
{
  public static class ApplicationBuilderExtensions
  {
    public static IApplicationBuilder PopulateDatabase(this IApplicationBuilder app)
    {
      GameSeedData.Populate(app);
      return app;
    }
  }
}
