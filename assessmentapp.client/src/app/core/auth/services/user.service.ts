import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user.model';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = "https://localhost:7209";
  private currentUser$: Observable<User> | null = null;

  constructor(private httpClient: HttpClient) { }

  getCurrentUser(): Observable<User> {
    if (!this.currentUser$) {
      this.currentUser$ = this.httpClient.get<User>(`${this.apiURL}/Users/me`).pipe(
        shareReplay(1) 
      );
    }
    return this.currentUser$;
  }
}
