using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;


namespace TestDemoApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private static List<User> _users = new List<User>
    {
        new User { Id = 1, Name = "John Doe", Age = 25 },
        new User { Id = 2, Name = "Jane Doe", Age = 30 },
        // Add more initial users as needed
    };

        // GET: api/user
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_users);
        }
    }
}
