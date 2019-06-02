using GotGame.RestServer.Infrastructure.Consts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Models.Fields
{
  public class PortFieldData : FieldData
  {
    public PortFieldData(int id, string name)
      :base(id, name)
    {
      Type = FieldType.Port;
    }
  }
}
