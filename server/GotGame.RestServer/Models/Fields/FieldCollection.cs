using GotGame.RestServer.Infrastructure.Consts;
using GotGame.RestServer.Models.Houses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Models.Fields
{
  public class FieldCollection : List<FieldData>
  {
    public FieldCollection(GameRules gameRules, HouseCollection houses)
    {


      AddRange(new List<FieldData>
      {
        new BayOfIce(),
        new Blackwater(),
        new BlackwaterBay(),
        new CastleBlack(),
        new CrackclawPoint(),
        new DornishMarches(houses.FindHouseType(HouseType.Tyrell)),
        new DragonStone(houses.FindHouseType(HouseType.Baratheon)),
        new DragonStonePort(houses.FindHouseType(HouseType.Baratheon)),
        new EastSummerSea(),
        new FeverRiver(),
        new FlintsFinger(),
        new GreywaterWatch(houses.FindHouseType(HouseType.Greyjoy)),
        new Harrenhal(),
        new Highgarden(houses.FindHouseType(HouseType.Tyrell)),
        new IronmansBay(houses.FindHouseType(HouseType.Greyjoy)),
        new Karhold(),
        new KingsLanding(),
        new Kingswood(houses.FindHouseType(HouseType.Baratheon)),
        new Lannisport(houses.FindHouseType(HouseType.Lannister)),
        new LannisportPort(houses.FindHouseType(HouseType.Lannister)),
        new MoatCailin(),
        new Oldtown(),
        new OldtownPort(),
        new PrincesPass(),
        new Pyke(houses.FindHouseType(HouseType.Greyjoy)),
        new PykePort(houses.FindHouseType(HouseType.Greyjoy)),
        new RedwyneStraights(houses.FindHouseType(HouseType.Tyrell)),
        new Riverrun(),
        new SaltShore(houses.FindHouseType(HouseType.Martell)),
        new Seagard(),
        new SeaOfDorne(houses.FindHouseType(HouseType.Martell)),
        new SearoadMarches(),
        new ShipbreakerBay(houses.FindHouseType(HouseType.Baratheon)),
        new Starfall(),
        new StoneySept(houses.FindHouseType(HouseType.Lannister)),
        new StormsEnd(),
        new StormsEndPort(),
        new SunsetSea(),
        new Sunspear(houses.FindHouseType(HouseType.Martell)),
        new SunspearPort(houses.FindHouseType(HouseType.Martell)),
        new TheArbor(),
        new TheBoneway(),
        new TheEyrie(),
        new TheFingers(),
        new TheGoldenSound(houses.FindHouseType(HouseType.Lannister)),
        new TheMountainsOfTheMoon(),
        new TheNarrowSea(),
        new TheReach(),
        new TheShiveringSea(houses.FindHouseType(HouseType.Stark)),
        new TheStonyShore(),
        new TheTwins(),
        new ThreeTowers(),
        new TorentineRiver(),
        new TridentRiver(),
        new WestSummerSea(),
        new WhiteHarbor(houses.FindHouseType(HouseType.Stark)),
        new WhiteHarborPort(houses.FindHouseType(HouseType.Stark)),
        new WidowsWatch(),
        new Winterfell(houses.FindHouseType(HouseType.Stark)),
        new WinterfellPort(houses.FindHouseType(HouseType.Stark)),
        new Yronwood()
      });
    }

    public FieldData GetField(int fieldId)
    {
      return this.FirstOrDefault(f => f.Id == fieldId);
    }
  }
}
