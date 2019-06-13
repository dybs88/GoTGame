using GotGame.RestServer.Infrastructure.Consts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Models
{
  public class Army
  {
    public HouseType HouseType { get; set; }
    public List<Pawn> Pawns { get; set; }
    public int FieldId { get; set; }
    public int AttackStrength => Pawns?.Sum(p => p.AttackStrength) ?? 0;
    public int DefenceStrength => Pawns?.Sum(p => p.DefenceStrength) ?? 0;

    public Army(HouseType houseType, int fieldId, params Pawn[] pawns)
    {
      HouseType = houseType;
      FieldId = fieldId;
      pawns.ToList().ForEach(p => { p.Mode = PawnMode.InGame; });
      Pawns = pawns.ToList();
    }
  }
}
