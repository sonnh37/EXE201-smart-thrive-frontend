import { Base } from "./BaseModel";
import { Gender, UserStatus } from "./Enum";
import { Feedback } from "./Feedback";
import { StudentXPackage } from "./StudentXPackage";
import { User } from "./User";

export class Student extends Base {
  userId?: string;
  studentName?: string;
  imageAvatar?: string;
  gender?: Gender;
  dob?: Date;
  phone?: string;
  status?: UserStatus;
  user?: User;
  feedback?: Feedback;
  studentXPackages?: StudentXPackage[];
}
