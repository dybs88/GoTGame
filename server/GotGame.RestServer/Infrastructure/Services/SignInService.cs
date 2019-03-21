using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GotGame.RestServer.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace GotGame.RestServer.Infrastructure.Services
{
  public interface ISignInService
  {
      Task<SignInResult> PasswordSignInAsync(string userName, string password, bool isPersistent,
          bool lockoutOnFailure);

      Task<SignInResult> PasswordSignInAsync(User user, string password, bool isPersistent, bool lockoutOnFailure);

      Task SignOutAsync();
  }

  public class SignInService : SignInManager<User>, ISignInService
  {
    public SignInService(UserManager<User> userManager, IHttpContextAccessor contextAccessor, IUserClaimsPrincipalFactory<User> claimsFactory, IOptions<IdentityOptions> optionsAccessor, ILogger<SignInManager<User>> logger, IAuthenticationSchemeProvider schemes)
        : base(userManager, contextAccessor, claimsFactory, optionsAccessor, logger, schemes)
    {
    }
  }
}
