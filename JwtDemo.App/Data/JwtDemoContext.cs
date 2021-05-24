using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using JwtDemo.App.Models;

namespace JwtDemo.App.Data
{
    public class JwtDemoContext: IdentityDbContext<User,Role,int>
    {
        public JwtDemoContext(DbContextOptions<JwtDemoContext> options): base(options)
        {
        }

        // You can add new models with DbSet
    }
}