//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebAPIEmployee.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class trainer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Discription { get; set; }
        public string ImageTrainer { get; set; }
        public Nullable<int> Experience { get; set; }
        public Nullable<int> BodyFat { get; set; }
        public string Nationality { get; set; }
        public string IsAuthorized { get; set; }
    }
}