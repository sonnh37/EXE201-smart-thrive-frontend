import { Base } from "./BaseModel";
import { DayInWeek } from "./DayInWeek";
import { CourseStatus, CourseType } from "./Enum";
import { Feedback } from "./Feedback";
import { Module } from "./Module";
import { PackageXCourse } from "./PackageXCourse";
import { Provider } from "./Provider";
import { Subject } from "./Subject";

export class Course extends Base {
  subjectId?: string;
  providerId?: string;
  teacherName?: string;
  type?: CourseType;
  name?: string;
  code?: string;
  courseName?: string;
  description?: string;
  backgroundImage?: string;
  price?: number;
  soldCourses?: number;
  totalSlots?: number;
  totalSessions?: number;
  startTime?: string; // TimeSpan is converted to string in TypeScript
  endTime?: string; // TimeSpan is converted to string in TypeScript
  status?: CourseStatus;
  isActive: boolean = false;
  startDate?: Date;
  endDate?: Date;
  dayInWeek?: DayInWeek;
  subject?: Subject;
  provider?: Provider;
  modules?: Module[];
  feedbacks?: Feedback[];
  packageXCourses?: PackageXCourse[];
}
