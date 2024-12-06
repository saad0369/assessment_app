import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Budget } from '../models/budget.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private apiURL = "https://localhost:7209";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getBudgets(): Observable<Budget[]> {
    return this.httpClient.get<Budget[]>(this.apiURL + '/Budgets')
  }

  getBudget(id: number): Observable<Budget> {
    return this.httpClient.get<Budget>(this.apiURL + '/Budgets/' + id)
  }

  createBudget(budget: Budget): Observable<Budget> {
    return this.httpClient.post<Budget>(this.apiURL + '/Budgets/', JSON.stringify(budget), this.httpOptions)
  }

  deleteBudget(id: number) {
    return this.httpClient.delete<Budget>(this.apiURL + '/Budgets/' + id, this.httpOptions)
  }

}
