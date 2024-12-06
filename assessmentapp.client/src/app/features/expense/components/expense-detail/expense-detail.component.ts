import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from '../../models/expense.model';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
})
export class ExpenseDetailComponent implements OnInit {

  id: number = 0;
  expense: Expense | null = null;

  constructor(
    public expenseService: ExpenseService,
    private route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['expenseId'];
    this.expenseService.getExpense(this.id).subscribe((data: Expense) => {
      this.expense = data;
    });
  }

}
