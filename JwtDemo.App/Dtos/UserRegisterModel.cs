using System;
using System.ComponentModel.DataAnnotations;

namespace JwtDemo.App.Dtos
{
    public class UserRegisterModel
    {        
        [Required(ErrorMessage="username is required")]  
        [StringLength(50,MinimumLength=6)]
        public string UserName { get; set; }

        [Required] 
        [EmailAddress]
        public string Email { get; set; }

        [Required] 
        public string Password { get; set; }
    }
}