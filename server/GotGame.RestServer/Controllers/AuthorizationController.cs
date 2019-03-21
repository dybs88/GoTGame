using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using GotGame.RestServer.DAL.Repositories;
using GotGame.RestServer.FrontModels;
using GotGame.RestServer.Infrastructure.Models;
using GotGame.RestServer.Infrastructure.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace GotGame.RestServer.Controllers
{
  [Produces("application/json")]
  [Route("api/auth")]
  public class AuthorizationController : Controller
  {
    private IUserRepository userRepository;
    private ISignInService signInService;
    private AppSettings appSettings;

    public AuthorizationController(IUserRepository userRepo, ISignInService service, IOptions<AppSettings> settings)
    {
      userRepository = userRepo;
      signInService = service;
      appSettings = settings.Value;
    }

    [HttpPost("login")]
    [AllowAnonymous]
    public async Task<IActionResult> SignInAsync([FromBody]FrontUser frontUser)
    {
      var user = await userRepository.FindByNameAsync(frontUser.UserName);
      if (user == null)
        return BadRequest(new { isAuthorized = false, reason = "Wrong login or password" });

      var signInResult = await signInService.PasswordSignInAsync(user, frontUser.Password, true, true);

      if(signInResult.Succeeded)
      {
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(appSettings.Secret);
        var tokenDescriptor = new SecurityTokenDescriptor
        {
          Subject = new ClaimsIdentity(new Claim[]
          {
            new Claim(ClaimTypes.Name, user.Id.ToString())
          }),
          Expires = DateTime.UtcNow.AddHours(1),
          SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };

        var token = tokenHandler.CreateToken(tokenDescriptor);
        var tokenString = tokenHandler.WriteToken(token);

        return new OkObjectResult(new { isAuthorized = signInResult.Succeeded, token = tokenString });
      }

      return new OkObjectResult(new { isAuthorized = false });
    }
  }
}
