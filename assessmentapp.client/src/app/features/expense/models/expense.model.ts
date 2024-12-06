import { User } from "../../../core/auth/user.model";
import { Category } from "../../category/models/category.model";

export interface Expense {
  id: number;
  amount: number;
  description?: string;
  userId: number;
  categoryId: number;
  category?: Category;
  user?: User;
}
