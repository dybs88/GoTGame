using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GotGame.RestServer.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace GotGame.RestServer.DAL.Repositories
{
  public interface IUserRepository
  {
    Task<User> FindByIdAsync(string userId);
    Task<User> FindByNameAsync(string userName);
  }


  public class UserRepository : UserManager<User>, IUserRepository
  {
    public UserRepository(IUserStore<User> store, IOptions<IdentityOptions> optionsAccessor, IPasswordHasher<User> passwordHasher, IEnumerable<IUserValidator<User>> userValidators, IEnumerable<IPasswordValidator<User>> passwordValidators, ILookupNormalizer keyNormalizer, IdentityErrorDescriber errors, IServiceProvider services, ILogger<UserManager<User>> logger) : base(store, optionsAccessor, passwordHasher, userValidators, passwordValidators, keyNormalizer, errors, services, logger)
    {
    }
  }
}
