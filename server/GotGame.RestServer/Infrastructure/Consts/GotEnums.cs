using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Infrastructure.Consts
{
    public enum HouseType
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

  public enum FieldType
  {
    Land,
    Sea,
    Port,
    River
  }

  public enum CastleType
  {
    Large,
    Small,
    None
  }

  public enum RoundPhase
  {
    Westeros,
    Planning,
    Action
  }
}
