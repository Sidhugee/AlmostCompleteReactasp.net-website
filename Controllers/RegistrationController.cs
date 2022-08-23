using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using WebAPIEmployee.Models;

namespace WebAPIEmployee.Controllers
{
    [Route("api/registration")]
    public class RegistrationController : ApiController
    {
        TrainersEntities db = new TrainersEntities();
        [HttpGet]
        [EnableCors("*", "*", "*")]
        public async Task<List<Registration>> GetRegistrationAsync()
        {
            return (await db.Registrations.ToListAsync());
        }

        [Route("api/registration/{Id}")]
        [EnableCors("*", "*", "*")]

        public async Task<Registration> GetRegistrationAsync([FromUri] int Id)
        {
            var result = await db.Registrations.FindAsync(Id);
            return result;

        }
        [Route("api/registration/PostRegistrationAsync")]
        [HttpPost]
        [EnableCors("*", "*", "*")]

        public async void PostRegistrationAsync([FromBody] Registration registration)
        {
             db.Registrations.Add(registration);
            await db.SaveChangesAsync();


        }
        [Route("api/registration/LoginWeb")]
        [EnableCors("*", "*", "*")]
        public async Task<Registration> LoginWeb(Login login)
        {
           var registration = db.Registrations.Where(x => x.UserName.Equals(login.UserName) && x.UserPassword.Equals(login.UserPassword)).FirstOrDefault(); 
            return registration;

        }

    }
}
