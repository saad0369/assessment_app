import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { Expense } from '../models/expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private apiURL = "https://localhost:7209";

  private expenseAddedSource = new Subject<void>();
  private expenseDeletedSource = new Subject<void>();
  expenseAdded$ = this.expenseAddedSource.asObservable();
  expenseDeleted$ = this.expenseDeletedSource.asObservable();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getExpenses(): Observable<Expense[]> {
    return this.httpClient.get<Expense[]>(this.apiURL + '/Expenses')
  }

  getExpense(id: number): Observable<Expense> {
    return this.httpClient.get<Expense>(this.apiURL + '/Expenses/' + id)
  }

  createExpense(expense: Expense): Observable<Expense> {
    return this.httpClient.post<Expense>(this.apiURL + '/Expenses/', JSON.stringify(expense), this.httpOptions)
      .pipe(tap(() => this.expenseAddedSource.next()));
  }

  deleteExpense(id: number) {
    return this.httpClient.delete<Expense>(this.apiURL + '/Expenses/' + id, this.httpOptions).pipe(
      tap(() => this.expenseDeletedSource.next())
    );
  }


}
