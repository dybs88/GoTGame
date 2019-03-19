using GotGame.RestServer.Models;

namespace GotGame.RestServer.FrontModels
{
  public class FrontPlayer
  {
    public int GameId { get; set; }
    public Player Player { get; set; }
  }
}
