import { Expense } from "../../expense/models/expense.model";

export interface Category {
  id: number;
  name: string;
  expenses: Expense[];
}
