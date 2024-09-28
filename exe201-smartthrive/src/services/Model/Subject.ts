import { Base } from "./BaseModel";
import { Category } from "./Category";
import { Course } from "./Course";

export class Subject extends Base {
  name?: string;
  categoryId?: string; // Converted Guid? to string
  category?: Category; // Assuming Category is the modified name from CategoryResult
  courses?: Course[]; // Assuming Course is the modified name from CourseResult
}
