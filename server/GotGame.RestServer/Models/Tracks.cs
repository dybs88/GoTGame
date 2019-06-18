using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GotGame.RestServer.Infrastructure.Consts;
using GotGame.RestServer.Models.Houses;

namespace GotGame.RestServer.Models
{
  public class Tracks
  {
    private List<House> houses;

    public List<HouseType?> CourtTrack { get; set; }
    public List<HouseType?> VassalsTrack { get; set; }
    public List<HouseType?> ThroneTrack { get; set; }


    public Tracks(List<House> houses)
    {
      this.houses = houses;

      CourtTrack = new List<HouseType?> {null, null, null, null, null, null};
      VassalsTrack = new List<HouseType?> { null, null, null, null, null, null };
      ThroneTrack = new List<HouseType?> { null, null, null, null, null, null };

      if (houses.Any(h => h.Type == HouseType.Baratheon))
      {
        ThroneTrack[0] = HouseType.Baratheon;
        VassalsTrack[4] = HouseType.Baratheon;
        CourtTrack[3] = HouseType.Baratheon;
      }
      if (houses.Any(h => h.Type == HouseType.Lannister))
      {
        ThroneTrack[1] = HouseType.Lannister;
        VassalsTrack[5] = HouseType.Lannister;
        CourtTrack[0] = HouseType.Lannister;
      }
      if (houses.Any(h => h.Type == HouseType.Stark))
      {
        ThroneTrack[2] = HouseType.Stark;
        VassalsTrack[3] = HouseType.Stark;
        CourtTrack[1] = HouseType.Stark;
      }
      if (houses.Any(h => h.Type == HouseType.Greyjoy))
      {
        ThroneTrack[4] = HouseType.Greyjoy;
        VassalsTrack[0] = HouseType.Greyjoy;
        CourtTrack[5] = HouseType.Greyjoy;
      }
      if (houses.Any(h => h.Type == HouseType.Tyrell))
      {
        ThroneTrack[5] = HouseType.Tyrell;
        VassalsTrack[1] = HouseType.Tyrell;
        CourtTrack[4] = HouseType.Tyrell;
      }
      if (houses.Any(h => h.Type == HouseType.Martell))
      {
        ThroneTrack[3] = HouseType.Martell;
        VassalsTrack[2] = HouseType.Martell;
        CourtTrack[2] = HouseType.Martell;
      }

      for (int t = 0; t <= 5; t++)
      {
        if (ThroneTrack[t] == null)
          ThroneTrack.Remove(ThroneTrack[t]);
        if (CourtTrack[t] == null)
          CourtTrack.Remove(CourtTrack[t]);
        if (VassalsTrack[t] == null)
          VassalsTrack.Remove(VassalsTrack[t]);
      }
    }
  }
}
