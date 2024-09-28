import { Base } from "./BaseModel";
import { Subject } from "./Subject";

export class Category extends Base {
  name?: string;
  subjects?: Subject[]; // Assuming Subject is the modified name from SubjectResult
}
