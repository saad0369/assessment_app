﻿using System;
using System.Collections.Generic;

namespace AssessmentApp.Server.Models;

public partial class Category
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<Expense> Expenses { get; set; } = new List<Expense>();
}
