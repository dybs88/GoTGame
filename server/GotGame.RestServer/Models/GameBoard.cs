using GotGame.RestServer.Infrastructure.Consts;
using GotGame.RestServer.Models.Fields;
using GotGame.RestServer.Models.Houses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Models
{
  public class GameBoard
  {
    private GameRules gameRules;

    public int GameId { get; set; }
    public string GameName { get; set; }
    public FieldCollection Fields { get; private set; }
    public HouseCollection Houses { get; set; }
    public int RoundNumber { get; set; }
    public RoundPhase CurrentRoundPhase { get; set; }
    public Tracks Tracks { get; set; }
    public GameBoard(Game game)
    {
      GameId = game.Id;
      GameName = game.Name;
      gameRules = game.GameRules;
      RoundNumber = 1;
      CurrentRoundPhase = RoundPhase.Planning;

      Houses = new HouseCollection(game.Players.ToList());
      Fields = new FieldCollection(gameRules, Houses);
      Tracks = new Tracks(Houses);
    }

    public void RemovePlayer(int playerId)
    {
      Houses.Remove(Houses.First(h => h.PlayerId == playerId));
    }
  }
}
