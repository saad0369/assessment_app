import { User } from "../../../core/auth/user.model";

export interface Budget {
  id: number;
  amount: number;
  userId: number;
  user?: User;
}
