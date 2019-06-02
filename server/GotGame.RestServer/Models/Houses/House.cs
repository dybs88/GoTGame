using GotGame.RestServer.Infrastructure.Consts;
using GotGame.RestServer.Models.Fields;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Models.Houses
{
  public abstract class House
  {
    public int PlayerId { get; set; }
    public string PlayerName { get; set; }
    public HouseType Type { get; set; }
    public List<int> ControlledFields { get; set; }
  
    public House(Player player)
    {
      PlayerId = player.Id;
      PlayerName = player.Name;
      Type = player.House.Value;
    }
  }

  public class BaratheonHouse : House
  {
    public BaratheonHouse(Player player)
      :base(player)
    {
      ControlledFields = new List<int> { FieldInfo.DragonStone_Id, FieldInfo.DragonStonePort_Id, FieldInfo.ShipbreakerBay_Id };
    }
  }

  public class LannisterHouse : House
  {
    public LannisterHouse(Player player)
      :base(player)
    {
      ControlledFields = new List<int> { FieldInfo.Lannisport_Id, FieldInfo.LannisportPort_Id, FieldInfo.TheGoldenSound_Id };
    }
  }

  public class StarkHouse : House
  {
    public StarkHouse(Player player)
      :base(player)
    {
      ControlledFields = new List<int> { FieldInfo.Winterfell_Id, FieldInfo.WinterfellPort_Id, FieldInfo.WhiteHarbor_Id, FieldInfo.WhiteHarborPort_Id };
    }
  }

  public class GreyjoyHouse : House
  {
    public GreyjoyHouse(Player player)
      : base(player)
    {
      ControlledFields = new List<int> { FieldInfo.Pyke_Id, FieldInfo.PykePort_Id, FieldInfo.IronmansBay_Id, FieldInfo.GreywaterWatch_Id };
    }
  }

  public class TyrellHouse : House
  {
    public TyrellHouse(Player player)
      :base(player)
    {
      ControlledFields = new List<int> { FieldInfo.Highgarden_Id, FieldInfo.DornishMarches_Id };
    }
  }

  public class MartellHouse : House
  {
    public MartellHouse(Player player)
      :base(player)
    {
      ControlledFields = new List<int> { FieldInfo.Sunspear_Id, FieldInfo.SunspearPort_Id, FieldInfo.SaltShore_Id };
    }
  }
}
