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
    [Required]
    [MinLength(6, ErrorMessage = "Nazwa jest zbyt krótka (od 5 do 50 znaków)")]
    [MaxLength(50, ErrorMessage = "Nazwa jest zbyt długa (od 5 do 50 znaków)")]
    public string Name { get; set; }
    public int PlayerCount => Players?.Count() ?? 0;
    [Required]
    [Range(3,6, ErrorMessage = "Zła ilość graczy")]
    public int MaxPlayers { get; set; }
    public IList<Player> Players { get; set; }

      public Game()
      {
          Players = new List<Player>();
      }
  }
}
