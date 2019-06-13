using GotGame.RestServer.Infrastructure.Consts;
using GotGame.RestServer.Models.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Models
{
  public class Pawn
  {
    public int Id { get; set; }
    public HouseType HouseType { get; set; }
    public PawnType Type { get; set; }
    public int AttackStrength { get; set; }
    public int DefenceStrength { get; set; }
    public Location Location { get; set; }
    public PawnMode Mode { get; set; }

    public Pawn(int id, HouseType houseType, PawnType pawnType)
    {
      Id = id;
      HouseType = houseType;
      Type = pawnType;
      Mode = PawnMode.OutGame;

      switch(Type)
      {
        case PawnType.Footman:
        case PawnType.Ship:
          AttackStrength = 1;
          DefenceStrength = 1;
          break;
        case PawnType.Knight:
          AttackStrength = 2;
          DefenceStrength = 2;
          break;
        case PawnType.Tower:
          AttackStrength = 4;
          DefenceStrength = 0;
          break;
      }
    }

    public Pawn SetLocation(int x, int y)
    {
      Location = new Location { X = x, Y = y };
      return this;
    }
  }
}
