using GotGame.RestServer.Infrastructure.Storage;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.DAL.Repositories.Base
{
  public abstract class BaseRepository
  {
    protected IGoTStorage storage;
    protected GoTGameContextDb context;

    public BaseRepository(GoTGameContextDb context, IGoTStorage storage)
    {
      this.context = context;
      this.storage = storage;
    }
  }
}
