using System;
using System.Collections.Generic;

namespace AssessmentApp.Server.Models;

public partial class Expense
{
    public int Id { get; set; }

    public int? Amount { get; set; }

    public string? Description { get; set; }

    public int? UserId { get; set; }

    public int? CategoryId { get; set; }

    public virtual Category? Category { get; set; }

    public virtual User? User { get; set; }
}
