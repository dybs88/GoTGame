using GotGame.RestServer.Infrastructure.Consts;
using GotGame.RestServer.Models.Fields;
using GotGame.RestServer.Models.Houses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Models.Fields
{
  public class BayOfIce : SeaFieldData
  {
    public BayOfIce()
      :base(FieldInfo.BayOfIce_Id, FieldInfo.BayOfIce)
    { }
  }

  public class Blackwater : LandFieldData
  {
    public Blackwater()
      :base(FieldInfo.Blackwater_Id, FieldInfo.Blackwater, 0, 2, CastleType.None)
    { }
  }

  public class BlackwaterBay : SeaFieldData
  {
    public BlackwaterBay()
      :base(FieldInfo.BlackwaterBay_Id, FieldInfo.BlackwaterBay)
    { }
  }

  public class CastleBlack : LandFieldData
  {
    public CastleBlack()
      :base(FieldInfo.CastleBlack_Id, FieldInfo.CastleBlack, 1, 0, CastleType.None)
    { }
  }

  public class CrackclawPoint : LandFieldData
  {
    public CrackclawPoint()
      :base(FieldInfo.CrackclawPoint_Id, FieldInfo.CrackclawPoint, 0, 0, CastleType.Small)
    { }
  }

  public class DornishMarches : LandFieldData
  {
    public DornishMarches(bool tyrells)
      :base(FieldInfo.DornishMarches_Id, FieldInfo.DornishMarches, 1, 0, CastleType.None)
    {
      if (tyrells)
        ControlledHouse = HouseType.Tyrell;
    }
  }

  public class DragonStone : LandFieldData
  {
    public DragonStone(bool baratheons)
      :base(FieldInfo.DragonStone_Id, FieldInfo.DragonStone, 1, 1, CastleType.Large)
    {
      if (baratheons)
        ControlledHouse = HouseType.Baratheon;
    }
  }

  public class DragonStonePort : PortFieldData
  {
    public DragonStonePort(bool baratheons)
      :base(FieldInfo.DragonStonePort_Id, FieldInfo.DragonStonePort)
    {
      if (baratheons)
        ControlledHouse = HouseType.Baratheon;
    }
  }

  public class EastSummerSea : SeaFieldData
  {
    public EastSummerSea()
      :base(FieldInfo.EastSummerSea_Id, FieldInfo.EastSummerSea)
    { }
  }

  public class FeverRiver : RiverFieldData
  {
    public FeverRiver()
      :base(FieldInfo.FeverRiver_Id, FieldInfo.FeverRiver)
    { }
  }

  public class FlintsFinger : LandFieldData
  {
    public FlintsFinger()
      :base(FieldInfo.FlintsFinger_Id, FieldInfo.FlintsFinger, 0, 0, CastleType.Small)
    { }
  }

  public class GreywaterWatch : LandFieldData
  {
    public GreywaterWatch(bool greyjoys)
      :base(FieldInfo.GreywaterWatch_Id, FieldInfo.GreywaterWatch, 0, 1, CastleType.None)
    {
      if (greyjoys)
        ControlledHouse = HouseType.Greyjoy;
    }
  }

  public class Harrenhal : LandFieldData
  {
    public Harrenhal()
      :base(FieldInfo.Harrenhal_Id, FieldInfo.Harrenhal, 1, 0, CastleType.Small)
    { }
  }

  public class Highgarden : LandFieldData
  {
    public Highgarden(bool tyrells)
      :base(FieldInfo.Highgarden_Id, FieldInfo.Highgarden, 0, 2, CastleType.Large)
    {
      if (tyrells)
        ControlledHouse = HouseType.Tyrell;
    }
  }

  public class IronmansBay : SeaFieldData
  {
    public IronmansBay(bool greyjoys)
      :base(FieldInfo.IronmansBay_Id, FieldInfo.IronmansBay)
    {
      if (greyjoys)
        ControlledHouse = HouseType.Greyjoy;
    }
  }

  public class Karhold : LandFieldData
  {
    public Karhold()
      :base(FieldInfo.Karhold_Id, FieldInfo.Karhold, 1, 0, CastleType.None)
    { }
  }

  public class KingsLanding : LandFieldData
  {
    public KingsLanding()
      :base(FieldInfo.KingsLanding_Id, FieldInfo.KingsLanding, 2, 0, CastleType.Large)
    { }
  }

  public class Kingswood : LandFieldData
  {
    public Kingswood(bool baratheons)
      :base(FieldInfo.Kingswood_Id, FieldInfo.Kingswood, 1, 1, CastleType.None)
    {
      if (baratheons)
        ControlledHouse = HouseType.Baratheon;
    }
  }

  public class Lannisport : LandFieldData
  {
    public Lannisport(bool lannisters)
    :base(FieldInfo.Lannisport_Id, FieldInfo.Lannisport, 0, 2, CastleType.Large)
    {
      if (lannisters)
        ControlledHouse = HouseType.Lannister;
    }
  }

  public class LannisportPort : PortFieldData
  {
    public LannisportPort(bool lannisters)
      :base(FieldInfo.LannisportPort_Id, FieldInfo.LannisportPort)
    {
      if (lannisters)
        ControlledHouse = HouseType.Lannister;
    }
  }

  public class MoatCailin : LandFieldData
  {
    public MoatCailin()
    : base(FieldInfo.MoatCailin_Id, FieldInfo.MoatCailin, 0, 0, CastleType.Small)
    { }
  }

  public class Oldtown : LandFieldData
  {
    public Oldtown()
      :base(FieldInfo.Oldtown_Id, FieldInfo.Oldtown, 0, 0, CastleType.Large)
    { }
  }

  public class OldtownPort : PortFieldData
  {
    public OldtownPort()
      :base(FieldInfo.OldtownPort_Id, FieldInfo.OldtownPort)
    { }
  }

  public class PrincesPass : LandFieldData
  {
    public PrincesPass()
      :base(FieldInfo.PrincesPass_Id, FieldInfo.PrincesPass, 1, 1, CastleType.None)
    { }
  }

  public class Pyke : LandFieldData
  {
    public Pyke(bool greyjoys)
      :base(FieldInfo.Pyke_Id, FieldInfo.Pyke, 1, 1, CastleType.Large)
    {
      if (greyjoys)
        ControlledHouse = HouseType.Greyjoy;
    }
  }

  public class PykePort : PortFieldData
  {
    public PykePort(bool greyjoys)
      :base(FieldInfo.PykePort_Id, FieldInfo.PykePort)
    {
      if (greyjoys)
        ControlledHouse = HouseType.Greyjoy;
    }
  }

  public class RedwyneStraights : SeaFieldData
  {
    public RedwyneStraights(bool tyrells)
      :base(FieldInfo.RedwyneStraights_Id, FieldInfo.RedwyneStraights)
    {
      if (tyrells)
        ControlledHouse = HouseType.Tyrell;
    }
  }

  public class Riverrun : LandFieldData
  {
    public Riverrun()
      :base(FieldInfo.Riverrun_Id, FieldInfo.Riverrun, 1, 1, CastleType.Large)
    { }
  }

  public class SaltShore : LandFieldData
  {
    public SaltShore(bool martells)
      :base(FieldInfo.SaltShore_Id, FieldInfo.SaltShore, 0, 1, CastleType.None)
    {
      if (martells)
        ControlledHouse = HouseType.Martell;
    }
  }

  public class Seagard : LandFieldData
  {
    public Seagard()
      :base(FieldInfo.Seagard_Id, FieldInfo.Seagard, 1, 0, CastleType.Large)
    { }
  }

  public class SeaOfDorne : SeaFieldData
  {
    public SeaOfDorne(bool martells)
      :base(FieldInfo.SeaOfDorne_Id, FieldInfo.SeaOfDorne)
    {
      if (martells)
        ControlledHouse = HouseType.Martell;
    }
  }

  public class SearoadMarches : LandFieldData
  {
    public SearoadMarches()
      :base(FieldInfo.SearoadMarches_Id, FieldInfo.SearoadMarches, 0, 1, CastleType.None)
    { }
  }

  public class ShipbreakerBay : SeaFieldData
  {
    public ShipbreakerBay(bool baratheons)
      :base(FieldInfo.ShipbreakerBay_Id, FieldInfo.ShipbreakerBay)
    {
      if (baratheons)
        ControlledHouse = HouseType.Baratheon;
    }
  }

  public class Starfall : LandFieldData
  {
    public Starfall()
      :base(FieldInfo.Starfall_Id, FieldInfo.Starfall, 0, 1, CastleType.Small)
    { }
  }

  public class StoneySept : LandFieldData
  {
    public StoneySept(bool lannisters)
      :base(FieldInfo.StoneySept_Id, FieldInfo.StoneySept, 1, 0, CastleType.None)
    {
      if (lannisters)
        ControlledHouse = HouseType.Lannister;
    }
  }

  public class StormsEnd : LandFieldData
  {
    public StormsEnd()
      :base(FieldInfo.StormsEnd_Id, FieldInfo.StormsEnd, 0, 0, CastleType.Small)
    { }
  }

  public class StormsEndPort : PortFieldData
  {
    public StormsEndPort()
      :base(FieldInfo.StormsEndPort_Id, FieldInfo.StormsEndPort)
    { }
  }

  public class SunsetSea : SeaFieldData
  {
    public SunsetSea()
      :base(FieldInfo.SunsetSea_Id, FieldInfo.SunsetSea)
    { }
  }

  public class Sunspear : LandFieldData
  {
    public Sunspear(bool martells)
      :base(FieldInfo.Sunspear_Id, FieldInfo.Sunspear, 1, 1, CastleType.Large)
    {
      if (martells)
        ControlledHouse = HouseType.Martell;
    }
  }

  public class SunspearPort : PortFieldData
  {
    public SunspearPort(bool martells)
      :base(FieldInfo.SunspearPort_Id, FieldInfo.SunspearPort)
    {
      if (martells)
        ControlledHouse = HouseType.Martell;
    }
  }

  public class TheArbor : LandFieldData
  {
    public TheArbor()
      :base(FieldInfo.TheArbor_Id, FieldInfo.TheArbor, 1, 0, CastleType.None)
    { }
  }

  public class TheBoneway : LandFieldData
  {
    public TheBoneway()
      :base(FieldInfo.TheBoneway_Id, FieldInfo.TheBoneway, 1, 0, CastleType.None)
    { }
  }

  public class TheEyrie : LandFieldData
  {
    public TheEyrie()
      :base(FieldInfo.TheEyrie_Id, FieldInfo.TheEyrie, 1, 1, CastleType.Small)
    { }
  }

  public class TheFingers : LandFieldData
  {
    public TheFingers()
      :base(FieldInfo.TheFingers_Id, FieldInfo.TheFingers, 0, 1, CastleType.None)
    { }
  }

  public class TheGoldenSound : SeaFieldData
  {
    public TheGoldenSound(bool lannisters)
      :base(FieldInfo.TheGoldenSound_Id, FieldInfo.TheGoldenSound)
    {
      if (lannisters)
        ControlledHouse = HouseType.Lannister;
    }
  }

  public class TheMountainsOfTheMoon : LandFieldData
  {
    public TheMountainsOfTheMoon()
      :base(FieldInfo.TheMountainsOfTheMoon_Id, FieldInfo.TheMountainsOfTheMoon, 0, 1, CastleType.None)
    { }
  }

  public class TheNarrowSea : SeaFieldData
  {
    public TheNarrowSea()
      :base(FieldInfo.TheNarrowSea_Id, FieldInfo.TheNarrowSea)
    { }
  }

  public class TheReach : LandFieldData
  {
    public TheReach()
      :base(FieldInfo.TheReach_Id, FieldInfo.TheReach, 0, 0, CastleType.Small)
    { }
  }

  public class TheShiveringSea : SeaFieldData
  {
    public TheShiveringSea(bool starks)
      :base(FieldInfo.TheShiveringSea_Id, FieldInfo.TheShiveringSea)
    {
      if (starks)
        ControlledHouse = HouseType.Stark;
    }
  }

  public class TheStonyShore : LandFieldData
  {
    public TheStonyShore()
      :base(FieldInfo.TheStonyShore_Id, FieldInfo.TheStonyShore, 0, 1, CastleType.None)
    { }
  }

  public class TheTwins : LandFieldData
  {
    public TheTwins()
      :base(FieldInfo.TheTwins_Id, FieldInfo.TheTwins, 1, 0, CastleType.None)
    { }
  }

  public class ThreeTowers : LandFieldData
  {
    public ThreeTowers()
      :base(FieldInfo.ThreeTowers_Id, FieldInfo.ThreeTowers, 0, 1, CastleType.None)
    { }
  }

  public class TorentineRiver : RiverFieldData
  {
    public TorentineRiver()
      :base(FieldInfo.TorentineRiver_Id, FieldInfo.TorentineRiver)
    { }
  }

  public class TridentRiver : RiverFieldData
  {
    public TridentRiver()
      :base(FieldInfo.TridentRiver_Id, FieldInfo.TridentRiver)
    { }
  }

  public class WestSummerSea : SeaFieldData
  {
    public WestSummerSea()
      :base(FieldInfo.WestSummerSea_Id, FieldInfo.WestSummerSea)
    { }
  }

  public class WhiteHarbor : LandFieldData
  {
    public WhiteHarbor(bool starks)
      :base(FieldInfo.WhiteHarbor_Id, FieldInfo.WhiteHarbor, 0, 0, CastleType.Small)
    {
      if (starks)
        ControlledHouse = HouseType.Stark;
    }
  }

  public class WhiteHarborPort : PortFieldData
  {
    public WhiteHarborPort(bool starks)
      :base(FieldInfo.WhiteHarborPort_Id, FieldInfo.WhiteHarborPort)
    {
      if (starks)
        ControlledHouse = HouseType.Stark;
    }
  }

  public class WidowsWatch : LandFieldData
  {
    public WidowsWatch()
      :base(FieldInfo.WidowsWatch_Id, FieldInfo.WidowsWatch, 0, 1, CastleType.None)
    { }
  }

  public class Winterfell : LandFieldData
  {
    public Winterfell(bool starks)
      :base(FieldInfo.Winterfell_Id, FieldInfo.Winterfell, 1, 1, CastleType.Large)
    {
      if (starks)
        ControlledHouse = HouseType.Stark;
    }
  }

  public class WinterfellPort : PortFieldData
  {
    public WinterfellPort(bool starks)
      :base(FieldInfo.WinterfellPort_Id, FieldInfo.WinterfellPort)
    {
      if (starks)
        ControlledHouse = HouseType.Stark;
    }
  }

  public class Yronwood : LandFieldData
  {
    public Yronwood()
      :base(FieldInfo.Yronwood_Id, FieldInfo.Yronwood, 0, 0, CastleType.Small)
    { }
  }
}
