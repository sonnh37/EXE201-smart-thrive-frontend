import {Base} from "./base-model";
import {Subject} from "./subject";

export class Category extends Base {
    name?: string;
    subjects?: Subject[]; // Assuming Subject is the modified name from SubjectResult
}
