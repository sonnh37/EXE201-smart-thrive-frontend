import {Base} from "./base-model";
import {Session} from "./session";

export class SessionOffline extends Base {
    sessionId?: string; // Converted Guid? to string
    location?: string;
    date?: Date; // DateTime? is converted to Date
    duration?: number;
    session?: Session; // Assuming Session is the modified name from SessionResult
}
