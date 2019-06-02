using GotGame.RestServer.Infrastructure.Consts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Models.Houses
{
  public class HouseCollection : List<House>
  {
    public HouseCollection(List<Player> players)
    {
      if (players.Any(p => p.House == HouseType.Lannister))
        Add(new LannisterHouse(players.First(p => p.House == HouseType.Lannister)));
      if (players.Any(p => p.House == HouseType.Baratheon))
        Add(new BaratheonHouse(players.First(p => p.House == HouseType.Baratheon)));
      if (players.Any(p => p.House == HouseType.Stark))
        Add(new StarkHouse(players.First(p => p.House == HouseType.Stark)));
      if (players.Any(p => p.House == HouseType.Greyjoy))
        Add(new GreyjoyHouse(players.First(p => p.House == HouseType.Greyjoy)));
      if (players.Any(p => p.House == HouseType.Martell))
        Add(new MartellHouse(players.First(p => p.House == HouseType.Martell)));
      if (players.Any(p => p.House == HouseType.Tyrell))
        Add(new TyrellHouse(players.First(p => p.House == HouseType.Tyrell)));
    }

    public bool FindHouseType(HouseType houseType)
    {
      return Exists(h => h.Type == houseType);
    }
  }
}
