import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-budget-create',
  templateUrl: './budget-create.component.html',
})
export class BudgetCreateComponent {

  createForm: FormGroup;

  constructor(
    public budgetService: BudgetService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.createForm = this.formBuilder.group({
      amount: ['', Validators.required],
      userId: [1, Validators.required] // hardcoded user, modify later
    });
  }

  onSubmit(formData: FormGroup) {
    this.budgetService.createBudget(formData.value).subscribe(res => {
      // Refresh the page after creating the budget
      window.location.reload();  // This will reload the current page
    });
  }

}
