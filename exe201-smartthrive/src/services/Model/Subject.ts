import {Base} from "./base-model";
import {Category} from "./category";
import {Course} from "./course";

export class Subject extends Base {
    name?: string;
    categoryId?: string; // Converted Guid? to string
    category?: Category; // Assuming Category is the modified name from CategoryResult
    courses?: Course[]; // Assuming Course is the modified name from CourseResult
}
