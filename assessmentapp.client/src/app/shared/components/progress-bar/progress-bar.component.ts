import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BudgetService } from '../../../features/budget/services/budget.service';
import { ExpenseService } from '../../../features/expense/services/expense.service';


@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
})
export class ProgressBarComponent implements OnInit, OnDestroy {
  budget: number = 0;
  totalExpenses: number = 0;
  private expenseAddedSubscription?: Subscription;
  private expenseDeletedSubscription?: Subscription;

  constructor(
    private budgetService: BudgetService,
    private expenseService: ExpenseService
  ) { }

  get expensePercentage(): number {
    return this.budget > 0 ? (this.totalExpenses / this.budget) * 100 : 0;
  }

  ngOnInit(): void {
    this.fetchBudget();
    this.fetchTotalExpenses();

    // Subscribe to expense added notifications
    this.expenseAddedSubscription = this.expenseService.expenseAdded$.subscribe(() => {
      this.fetchTotalExpenses(); // Fetch new total expenses when notified
    });

    this.expenseDeletedSubscription = this.expenseService.expenseDeleted$.subscribe(() => {
      this.fetchTotalExpenses(); // Fetch new total expenses when an expense is deleted
    });
  }

  ngOnDestroy(): void {
    if (this.expenseAddedSubscription) {
      this.expenseAddedSubscription.unsubscribe();
    }
    if (this.expenseDeletedSubscription) {
      this.expenseDeletedSubscription.unsubscribe();
    }
  }

  fetchBudget(): void {
    this.budgetService.getBudgets().subscribe({
      next: (budgets) => {
        this.budget = budgets.length > 0 ? budgets[0].amount : 0;
      },
      error: (err) => console.error('Failed to fetch budget:', err)
    });
  }

  fetchTotalExpenses(): void {
    this.expenseService.getExpenses().subscribe({
      next: (expenses) => {
        this.totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
      },
      error: (err) => console.error('Failed to fetch expenses:', err)
    });
  }
}
