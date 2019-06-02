using GotGame.RestServer.Infrastructure.Consts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Models.Fields
{
  public class LandFieldData : FieldData
  {
    public LandFieldData(int id, string name, int crowns, int barrels, CastleType castleType)
      :base(id, name)
    {
      Type = FieldType.Land;
      CrownCount = crowns;
      BarrelCount = barrels;
      CastleType = castleType;
    }
  }
}
