import { Base } from "./BaseModel";
import { Session } from "./Session";

export class SessionMeeting extends Base {
  sessionId?: string; // Converted Guid? to string
  host?: string;
  date?: Date; // DateTime? is converted to Date
  meetingUrl?: string;
  meetingPlatform?: string;
  session?: Session; // Assuming Session is the modified name from SessionResult
}
