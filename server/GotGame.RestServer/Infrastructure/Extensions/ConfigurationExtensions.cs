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
      var appSettingSection = config.GetSection("AppSettings");
      return appSettingSection.Get<AppSettings>();
    }
  }
}
