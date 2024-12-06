import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from './services/user.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ExpenseGuard implements CanActivate {
  private bypassGuard = false;

  constructor(private userService: UserService, private router: Router) { }

  canActivate(): Observable<boolean> {
    if (this.bypassGuard) {
      return new Observable(observer => {
        observer.next(true); // Skip guard logic
        observer.complete();
      });
    }

    return this.userService.getCurrentUser().pipe(
      map(user => {
        if (user && user.budgets.length != 0) {
          return true;
        }
        this.router.navigate(['/budgets/create']);
        return false;
      })
    );
  }

  setBypassGuard(flag: boolean) {
    this.bypassGuard = flag;
  }
}
