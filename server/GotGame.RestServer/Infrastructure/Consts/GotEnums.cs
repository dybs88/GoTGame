using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Infrastructure.Consts
{
    public enum House
    {
        Lannister,
        Baratheon,
        Stark,
        Greyjoy,
        Martell,
        Tyrell
    }

  public enum PlayerStatus
  {
    Joining,
    Joined,
    Ready
  }

  public enum WinCondition
  {
    Castles,
    Points
  }
}
