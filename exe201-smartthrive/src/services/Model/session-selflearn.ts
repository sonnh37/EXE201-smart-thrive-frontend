import {Base} from "./base-model";
import {Session} from "./session";

export class SessionSelfLearn extends Base {
    sessionId?: string; // Converted Guid? to string
    sessionNumber?: number;
    videoUrl?: string;
    isComplete: boolean = false; // Set default value for boolean
    session?: Session; // Assuming Session is the modified name from SessionResult
}
