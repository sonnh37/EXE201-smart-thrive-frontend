import {BaseEntity} from "./base";
import {Session} from "./session";

export interface SessionMeeting extends BaseEntity {
    sessionId?: string;
    host?: string;
    date?: Date;
    meetingUrl?: string;
    meetingPlatform?: string;
    session?: Session;
}