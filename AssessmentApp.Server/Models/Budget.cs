using System;
using System.Collections.Generic;

namespace AssessmentApp.Server.Models;

public partial class Budget
{
    public int Id { get; set; }

    public int? Amount { get; set; }

    public int? UserId { get; set; }

    public virtual User? User { get; set; }
}
