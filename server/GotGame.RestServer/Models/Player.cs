using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using GotGame.RestServer.Infrastructure.Consts;
using GotGame.RestServer.Models.Houses;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace GotGame.RestServer.Models
{
  public class Player
  {
    public int Id { get; set; }
    [MinLength(3)]
    [MaxLength(8)]
    public string Name { get; set; }
    public int GameId { get; set; }
    [JsonConverter(typeof(StringEnumConverter))]
    public HouseType? House { get; set; }
    public string IpAddress { get; set; }
    public PlayerStatus Status { get; set; }
    public bool IsGameCreator { get; set; }

  }
}
