using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GotGame.RestServer.DAL.Repositories;
using GotGame.RestServer.Infrastructure.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Clients.ActiveDirectory;

namespace GotGame.RestServer.Controllers
{
  [Route("api/[auth]")]
  [ApiController]
  public class AuthorizationController : Controller
  {
    private IUserRepository userRepository;
    private ISignInService signInService;

    public AuthorizationController(IUserRepository userRepo, ISignInService service)
    {
      userRepository = userRepo;
      signInService = service;
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> SignInAsync(string userId, string password)
    {
      var user = await userRepository.FindByIdAsync(userId);

      var signInResult = await signInService.PasswordSignInAsync(user, password, true, true);

      return new OkObjectResult(new { authorization = signInResult.Succeeded });
    }
  }
}
