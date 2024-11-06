import {BaseEntity} from "./base";
import {Category} from "./category";
import {Course} from "./course";

export interface Subject extends BaseEntity {
    name?: string;
    categoryId?: string;
    category?: Category;
    courses?: Course[];
}
