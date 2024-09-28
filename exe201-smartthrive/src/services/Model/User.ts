import { Base } from "./BaseModel";
import { Blog } from "./Blog";
import { Gender, Role, UserStatus } from "./Enum";
import { Provider } from "./Provider";
import { Student } from "./Student";

export class User extends Base {
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  imageUrl?: string;
  email?: string;
  dob?: Date;
  address?: string;
  gender?: Gender;
  phone?: string;
  status?: UserStatus;
  role?: Role;
  blogs?: Blog[];
  provider?: Provider;
  students?: Student[];
}
