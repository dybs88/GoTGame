using GotGame.RestServer.Infrastructure.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GotGame.RestServer.Infrastructure.Extensions
{
  public static class ConfigurationExtensions
  {
    public static AppSettings GetAppSettings(this IConfiguration config)
    {
      var appSettingSection = config.GetSection("appSettings");
      return appSettingSection.Get<AppSettings>();
    }

    public static EnvironmentData[] GetEnvironmentCollection(this IConfiguration config)
    {
      var environmentSection = config.GetSection("environments");
      return environmentSection.Get<EnvironmentData[]>();
    }
  }
}
