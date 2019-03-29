using GotGame.RestServer.Infrastructure.Consts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Models
{
  public class GameRules
  {
    public int Id { get; set; }
    public int GameId { get; set; }
    public int MaxPlayers { get; set; }
    public bool AllHouses { get; set; }
    public bool RandomHouses { get; set; }
    public int RoundsCount { get; set; }
    public WinCondition WinCondition { get; set; }
    public int WinCastlesCount { get; set; }
    public int WinPointsCount { get; set; }
    public bool CanLookPlayerCard { get; set; }
    public bool LargeCastleDefence { get; set; }
    public bool SmallCastleDefence { get; set; }
  }
}
