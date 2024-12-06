import { Component, OnInit } from '@angular/core';
import { Expense } from '../../models/expense.model';
import { ExpenseService } from '../../services/expense.service';
import { BudgetService } from '../../../budget/services/budget.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
})
export class ExpenseListComponent implements OnInit {
  expenses: Expense[] = [];
  constructor(public expenseService: ExpenseService,
    public budgetService: BudgetService,
    public router: Router) { }

  ngOnInit(): void {
    this.expenseService.getExpenses().subscribe((data: Expense[]) => {
      this.expenses = data;
    });
  }

  deleteExpense(id: number) {
    this.expenseService.deleteExpense(id).subscribe(_ => {
      this.expenses = this.expenses.filter(item => item.id !== id);
    });
  }

  clearAll() {
    this.expenseService.getExpenses().subscribe(expenses => {
      expenses.forEach(expense => {
        this.expenseService.deleteExpense(expense.id).subscribe();
      });
      this.expenses = []; // Clear local expenses array
    });

    this.budgetService.getBudgets().subscribe(budgets => {
      budgets.forEach(budget => {
        this.budgetService.deleteBudget(budget.id).subscribe();
      });
    });

 
    window.location.reload(); 
  }

}
