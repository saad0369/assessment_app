﻿using System;
using System.Collections.Generic;

namespace AssessmentApp.Server.Models;

public partial class User
{
    public int Id { get; set; }

    public string Email { get; set; } = null!;

    public virtual ICollection<Budget> Budgets { get; set; } = new List<Budget>();

    public virtual ICollection<Expense> Expenses { get; set; } = new List<Expense>();
}