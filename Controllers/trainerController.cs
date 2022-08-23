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
    [Route("api/trainer")]
    public class trainerController : ApiController
    {
        TrainersEntities db = new TrainersEntities();
        [HttpGet]
        [EnableCors("*","*","*")]
        public async Task<List<trainer>> GetTrainerssAsync()
        {
            return (await db.trainers.ToListAsync());
        }

        [Route("api/trainer/{Id}")]
        [EnableCors("*", "*", "*")]

        public async Task<trainer> GetTrainerssAsync([FromUri] int Id)
        {
            var result = await db.trainers.FindAsync(Id);
            return result;
            
        }
        [HttpPost]
        [EnableCors("*", "*", "*")]

        public void AddTrainerssAsync(trainer trainer)
        {
             db.trainers.Add(trainer);
              db.SaveChanges();
            

        }


    }
}
