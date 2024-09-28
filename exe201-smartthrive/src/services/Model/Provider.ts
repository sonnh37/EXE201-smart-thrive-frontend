import { Base } from "./BaseModel";
import { Course } from "./Course";
import { User } from "./User";

export class Provider extends Base {
  userId?: string;
  companyName?: string;
  address?: string;
  website?: string;
  user?: User;
  courses?: Course[];
}
