import { Base } from "./BaseModel";
import { User } from "./User";

export class Blog extends Base {
  userId?: string;
  title?: string;
  description?: string;
  isActive: boolean = false;
  backgroundImage?: string;
  user?: User;
}
