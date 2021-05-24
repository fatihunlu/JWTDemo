using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
using JwtDemo.App.Models;
using System.Linq;

namespace JwtDemo.App.Data
{
    public static class SeedDatabase
    {
        public static async Task Seed(UserManager<User> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new User(){ UserName= "JwtUser", Email= "jwtuser@yopmail.com" };
                await userManager.CreateAsync(user, "JwtApp123!");
            }
        }
    }
}