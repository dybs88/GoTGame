using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Infrastructure.Models
{
  public class ErrorDetails
  {
    public string StatusCode { get; set; }
    public string Message { get; set; }

    public override string ToString()
    {
      return JsonConvert.SerializeObject(this);
    }
  }
}
