import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseListComponent } from './features/expense/components/expense-list/expense-list.component';
import { ExpenseDetailComponent } from './features/expense/components/expense-detail/expense-detail.component';
import { ExpenseCreateComponent } from './features/expense/components/expense-create/expense-create.component';
import { BudgetCreateComponent } from './features/budget/components/budget-create/budget-create.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { ProgressBarComponent } from './shared/components/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseListComponent,
    ExpenseDetailComponent,
    ExpenseCreateComponent,
    BudgetCreateComponent,
    HeaderComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
