using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Infrastructure.Consts
{
  public class GotConsts
  {
    public const string CorsPolicy = "GotCorsPolicy";
  }

  public class Environments
  {
    public const string Development = "Development";
    public const string Release = "Release";
    public const string Production = "Production";
  }

  public class SessionKeys
  {
    public const string NewGameCreator = "NewGameCreator";
  }
}
