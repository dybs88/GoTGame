using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace GotGame.RestServer.Models
{
  public class User : IdentityUser
  {
    public int DefaultPlayerId { get; set; }

    public User() { }
    public User(string userName)
    {
      UserName = userName;
    }
  }
}
