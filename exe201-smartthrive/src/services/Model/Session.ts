import {Base} from "./BaseModel";
import {SessionType} from "./Enum";
import {Module} from "./Module";
import {SessionMeeting} from "./SessionMeeting";
import {SessionOffline} from "./SessionOffline";
import {SessionSelfLearn} from "./SessionSelfLearn";

export class Session extends Base {
    moduleId?: string; // Converted Guid? to string
    title?: string;
    sessionNumber?: number;
    document?: string;
    sessionType?: SessionType; // Assuming SessionType is defined in your enums
    description?: string;
    module?: Module; // Assuming Module is the modified name from ModuleResult
    sessionOffline?: SessionOffline; // Assuming SessionOffline is the modified name from SessionOfflineResult
    sessionMeeting?: SessionMeeting; // Assuming SessionMeeting is the modified name from SessionMeetingResult
    sessionSelfLearn?: SessionSelfLearn; // Assuming SessionSelfLearn is the modified name from SessionSelfLearnResult
}
