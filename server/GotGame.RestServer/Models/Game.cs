using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Models
{
  public class Game
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public int PlayerCount => Players?.Count() ?? 0;
    public IList<Player> Players { get; set; }
    public GameRules GameRules { get; set; }
    public bool IsPrivate { get; set; }
    public string PasswordHash { get; set; }

    public Game()
    {
        Players = new List<Player>();
    }
  }
}
