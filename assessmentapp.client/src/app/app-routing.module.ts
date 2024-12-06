import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetCreateComponent } from './features/budget/components/budget-create/budget-create.component';
import { ExpenseListComponent } from './features/expense/components/expense-list/expense-list.component';
import { ExpenseDetailComponent } from './features/expense/components/expense-detail/expense-detail.component';
import { ExpenseCreateComponent } from './features/expense/components/expense-create/expense-create.component';
import { ExpenseGuard } from './core/auth/expense.guard';
import { BudgetGuard } from './core/auth/budget.guard';



const routes: Routes = [
  { path: '', redirectTo: 'budgets/create', pathMatch: 'full' },
  { path: 'budgets/create', component: BudgetCreateComponent, canActivate : [BudgetGuard] },
  { path: 'expenses/list', component: ExpenseListComponent, canActivate: [ExpenseGuard] },
  { path: 'expenses/:expenseId/detail', component: ExpenseDetailComponent, canActivate: [ExpenseGuard] },
  { path: 'expenses/create', component: ExpenseCreateComponent, canActivate: [ExpenseGuard] },
  { path: '**', redirectTo: 'budgets/create' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
