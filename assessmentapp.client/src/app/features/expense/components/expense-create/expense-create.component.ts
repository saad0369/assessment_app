import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseService } from '../../services/expense.service';
import { Category } from '../../../category/models/category.model';
import { CategoryService } from '../../../category/services/category.service';

@Component({
  selector: 'app-expense-create',
  templateUrl: './expense-create.component.html',
})
export class ExpenseCreateComponent implements OnInit {

  categories: Category[] = [];
  createForm: FormGroup;

  constructor(
    public expenseService: ExpenseService,
    public categoryService: CategoryService,
    public router: Router,
    private formBuilder: FormBuilder
  ) {
    this.createForm = this.formBuilder.group({
      amount: ['', Validators.required],
      description: [''],
      userId: [1, Validators.required], // hardcoded, modify later
      categoryId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
    });
  }


  onSubmit(formData: FormGroup) {
    this.expenseService.createExpense(formData.value).subscribe(res => {
      this.router.navigateByUrl('expenses/list');
    });
  }
}
