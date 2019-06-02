using GotGame.RestServer.Infrastructure.Consts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Models.Fields
{
  public class FieldData
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public FieldType Type { get; set; }
    public int CrownCount { get; set; }
    public int BarrelCount { get; set; }
    public CastleType CastleType { get; set; }
    public HouseType? ControlledHouse { get; set; }
  
    public FieldData(int id, string name)
    {
      Id = id;
      Name = name;
    }
  }
}
