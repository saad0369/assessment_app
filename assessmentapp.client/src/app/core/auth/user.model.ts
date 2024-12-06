import { Budget } from "../../features/budget/models/budget.model";
import { Expense } from "../../features/expense/models/expense.model";

export interface User {
  id: number;
  email: string;
  budgets: Budget[];
  expenses: Expense[];
}
