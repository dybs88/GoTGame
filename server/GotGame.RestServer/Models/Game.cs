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
    [MinLength(5, ErrorMessage = "Nazwa jest zbyt krótka (od 5 do 50 znaków)")]
    [MaxLength(50, ErrorMessage = "Nazwa jest zbyt długa (od 5 do 50 znaków)")]
    public string Name { get; set; }
    public int PlayerCount { get; set; }
    [Required]
    [Range(1,6, ErrorMessage = "Zła ilość graczy")]
    public int MaxPlayers { get; set; }
  }
}
