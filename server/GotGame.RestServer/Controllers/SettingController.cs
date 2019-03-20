using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GotGame.RestServer.Infrastructure.Consts;
using GotGame.RestServer.Infrastructure.Extensions;
using GotGame.RestServer.Infrastructure.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace GotGame.RestServer.Controllers
{
  [Produces("application/json")]
  [Route("api/setting")]
  public class SettingController : Controller
  {
    private IHostingEnvironment environment;
    private IConfiguration configuration;
    private EnvironmentData[] environmentDatas;

    public SettingController(IHostingEnvironment env, IConfiguration config)
    {
      environment = env;
      configuration = config;
      environmentDatas = config.GetEnvironmentCollection();
    }

    [HttpGet]
    public IActionResult GetEnvironmentSettings()
    {
      switch (environment.EnvironmentName)
      {
        case Environments.Development:
          {
            var connectionStringDatas = GetDataFromConnectionString(environmentDatas
                .FirstOrDefault(d => d.Name == Environments.Development).ConnectionString);
            return new JsonResult(new
            {
              EnvironmentName = environment.EnvironmentName,
              ServerName = connectionStringDatas.Item1,
              DatabaseName = connectionStringDatas.Item2
            });
          }
        case Environments.Release:
          {
            var connectionStringDatas = GetDataFromConnectionString(environmentDatas
                .FirstOrDefault(d => d.Name == Environments.Release).ConnectionString);
            return new JsonResult(new
            {
              EnvironmentName = environment.EnvironmentName,
              ServerName = connectionStringDatas.Item1,
              DatabaseName = connectionStringDatas.Item2
            });
          }
        case Environments.Production:
          {
            var connectionStringDatas = GetDataFromConnectionString(environmentDatas
                .FirstOrDefault(d => d.Name == Environments.Production).ConnectionString);
            return new JsonResult(new
            {
              EnvironmentName = environment.EnvironmentName,
              ServerName = connectionStringDatas.Item1,
              DatabaseName = connectionStringDatas.Item2
            });
          }
        default:
          return null;
      }
    }

    private Tuple<string, string> GetDataFromConnectionString(string connectionString)
    {
      if (!string.IsNullOrEmpty(connectionString))
      {
        var datas = connectionString.Split(";");

        string serverName = datas[0].Substring(datas[0].IndexOf("=", StringComparison.Ordinal) + 1);
        string databaseName = datas[1].Substring(datas[1].IndexOf("=", StringComparison.Ordinal) + 1);

        return new Tuple<string, string>(serverName, databaseName);
      }

      return null;
    }
  }
}
