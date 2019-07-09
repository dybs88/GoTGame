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
    public List<Army> Armies { get; set; }
    public List<Pawn> Pawns { get; set; }
    public List<int> ControlledFields { get; set; }
    public int CastlesCount { get; set; }
  
    public House(Player player)
    {
      PlayerId = player.Id;
      PlayerName = player.Name;
      Type = player.House.Value;
      Armies = new List<Army>();

      Pawns = new List<Pawn>();
      for (int i = 1; i <= 23; i++)
      {
        if (i <= 10)
          Pawns.Add(new Pawn(i, Type, PawnType.Footman));
        else if (i <= 15)
          Pawns.Add(new Pawn(i, Type, PawnType.Knight));
        else if (i <= 21)
          Pawns.Add(new Pawn(i, Type, PawnType.Ship));
        else
          Pawns.Add(new Pawn(i, Type, PawnType.Tower));
      }
    }
  }

  public class BaratheonHouse : House
  {
    public BaratheonHouse(Player player)
      :base(player)
    {
      Armies = new List<Army>()
      {
        new Army(HouseType.Baratheon, FieldInfo.DragonStone_Id, Pawns.FirstOrDefault(p => p.Type == PawnType.Footman && p.Mode != PawnMode.InGame).SetLocation(1290, 1544), Pawns.FirstOrDefault(p => p.Type == PawnType.Knight && p.Mode != PawnMode.InGame).SetLocation(1364, 1545)),
        new Army(HouseType.Baratheon, FieldInfo.Kingswood_Id, Pawns.FirstOrDefault(p => p.Type == PawnType.Footman && p.Mode != PawnMode.InGame).SetLocation(1004, 1881)),
        new Army(HouseType.Baratheon, FieldInfo.ShipbreakerBay_Id, Pawns.FirstOrDefault(p => p.Type == PawnType.Ship && p.Mode != PawnMode.InGame).SetLocation(1292, 1775))
      };

      ControlledFields = Armies.Select(a => a.FieldId).ToList();
      CastlesCount = 1;
    }
  }

  public class LannisterHouse : House
  {
    public LannisterHouse(Player player)
      :base(player)
    {
      Armies = new List<Army>
      {
        new Army(HouseType.Lannister, FieldInfo.Lannisport_Id, Pawns.FirstOrDefault(p => p.Type == PawnType.Footman && p.Mode != PawnMode.InGame).SetLocation(367, 1552), Pawns.FirstOrDefault(p => p.Type == PawnType.Knight && p.Mode != PawnMode.InGame).SetLocation(377, 1455)),
        new Army(HouseType.Lannister, FieldInfo.StoneySept_Id, Pawns.FirstOrDefault(p => p.Type == PawnType.Footman && p.Mode != PawnMode.InGame).SetLocation(548, 1561)),
        new Army(HouseType.Lannister, FieldInfo.TheGoldenSound_Id, Pawns.FirstOrDefault(p => p.Type == PawnType.Ship && p.Mode != PawnMode.InGame).SetLocation(145, 1509))
      };

      ControlledFields = Armies.Select(a => a.FieldId).ToList();
      CastlesCount = 1;
    }
  }

  public class StarkHouse : House
  {
    public StarkHouse(Player player)
      :base(player)
    {
      Armies = new List<Army>
      {
        new Army(HouseType.Stark, FieldInfo.Winterfell_Id, Pawns.FirstOrDefault(p => p.Type == PawnType.Footman && p.Mode != PawnMode.InGame).SetLocation(610, 478), Pawns.FirstOrDefault(p => p.Type == PawnType.Knight && p.Mode != PawnMode.InGame).SetLocation(700, 449)),
        new Army(HouseType.Stark, FieldInfo.WhiteHarbor_Id, Pawns.FirstOrDefault(p => p.Type == PawnType.Footman && p.Mode != PawnMode.InGame).SetLocation(878, 565)),
        new Army(HouseType.Stark, FieldInfo.TheShiveringSea_Id, Pawns.FirstOrDefault(p => p.Type == PawnType.Ship && p.Mode != PawnMode.InGame).SetLocation(1289, 535))
      };

      ControlledFields = Armies.Select(a => a.FieldId).ToList();
      CastlesCount = 2;
    }
  }

  public class GreyjoyHouse : House
  {
    public GreyjoyHouse(Player player)
      : base(player)
    {
      Armies = new List<Army>
      {
        new Army(HouseType.Greyjoy, FieldInfo.Pyke_Id, Pawns.FirstOrDefault(p => p.Type == PawnType.Footman && p.Mode != PawnMode.InGame).SetLocation(188, 1143), Pawns.FirstOrDefault(p => p.Type == PawnType.Knight && p.Mode != PawnMode.InGame).SetLocation(196, 1191)),
        new Army(HouseType.Greyjoy, FieldInfo.GreywaterWatch_Id, Pawns.FirstOrDefault(p => p.Type == PawnType.Footman && p.Mode != PawnMode.InGame).SetLocation(461, 961)),
        new Army(HouseType.Greyjoy, FieldInfo.PykePort_Id, Pawns.FirstOrDefault(p => p.Type == PawnType.Ship && p.Mode != PawnMode.InGame).SetLocation(323, 1143)),
        new Army(HouseType.Greyjoy, FieldInfo.IronmansBay_Id, Pawns.FirstOrDefault(p => p.Type == PawnType.Ship && p.Mode != PawnMode.InGame).SetLocation(409, 1229))
      };

      ControlledFields = Armies.Select(a => a.FieldId).ToList();
      CastlesCount = 1;
    }
  }

  public class TyrellHouse : House
  {
    public TyrellHouse(Player player)
      :base(player)
    {
      Armies = new List<Army>
      {
        new Army(HouseType.Tyrell, FieldInfo.Highgarden_Id, Pawns.FirstOrDefault(p => p.Type == PawnType.Footman && p.Mode != PawnMode.InGame).SetLocation(425, 2029), Pawns.FirstOrDefault(p => p.Type == PawnType.Knight && p.Mode != PawnMode.InGame).SetLocation(374, 1965)),
        new Army(HouseType.Tyrell, FieldInfo.DornishMarches_Id, Pawns.FirstOrDefault(p => p.Type == PawnType.Footman && p.Mode != PawnMode.InGame).SetLocation(537, 2096)),
        new Army(HouseType.Tyrell, FieldInfo.RedwyneStraights_Id, Pawns.FirstOrDefault(p => p.Type == PawnType.Ship && p.Mode != PawnMode.InGame).SetLocation(231, 2079))
      };

      ControlledFields = Armies.Select(a => a.FieldId).ToList();
      CastlesCount = 1;
    }
  }

  public class MartellHouse : House
  {
    public MartellHouse(Player player)
      :base(player)
    {
      Armies = new List<Army>
      {
        new Army(HouseType.Martell, FieldInfo.Sunspear_Id, Pawns.FirstOrDefault(p => p.Type == PawnType.Footman && p.Mode != PawnMode.InGame).SetLocation(1063, 2386), Pawns.FirstOrDefault(p => p.Type == PawnType.Knight && p.Mode != PawnMode.InGame).SetLocation(964, 2372)),
        new Army(HouseType.Martell, FieldInfo.SaltShore_Id, Pawns.FirstOrDefault(p => p.Type == PawnType.Footman && p.Mode != PawnMode.InGame).SetLocation(910, 2446)),
        new Army(HouseType.Martell, FieldInfo.DornishMarches_Id, Pawns.FirstOrDefault(p => p.Type == PawnType.Ship && p.Mode != PawnMode.InGame).SetLocation(1001, 2235))
      };

      ControlledFields = Armies.Select(a => a.FieldId).ToList();
      CastlesCount = 1;
    }
  }
}
