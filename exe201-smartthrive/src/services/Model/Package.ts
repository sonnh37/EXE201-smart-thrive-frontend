import { Base } from "./BaseModel";
import { PackageStatus } from "./Enum";
import { Order } from "./Order";
import { PackageXCourse } from "./PackageXCourse";
import { StudentXPackage } from "./StudentXPackage";

export class Package extends Base {
  name?: string;
  quantityCourse?: number;
  totalPrice?: number;
  isActive: boolean = false; // Set default value for boolean
  status?: PackageStatus; // Assuming PackageStatus is defined in your enums
  packageXCourses?: PackageXCourse[]; // Assuming PackageXCourse is the modified name from PackageXCourseResult
  orders?: Order[]; // Assuming Order is the modified name from OrderResult
  studentXPackages?: StudentXPackage[]; // Assuming StudentXPackage is the modified name from StudentXPackageResult
}
