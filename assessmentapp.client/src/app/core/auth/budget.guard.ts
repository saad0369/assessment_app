import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './services/user.service';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class BudgetGuard implements CanActivate{
  constructor(private userService: UserService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.userService.getCurrentUser().pipe(
      map(user => {
        if (!(user && (user.budgets.length != 0) )) {
          return true;
        }
        this.router.navigate(['/expenses/list']);
        return false;
      })
    );
  } 


};
