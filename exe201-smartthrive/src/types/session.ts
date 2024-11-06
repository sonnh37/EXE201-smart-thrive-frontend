import {BaseEntity} from "./base";
import {SessionOffline} from "./session-offline";
import {SessionMeeting} from "./session-meeting";
import {SessionSelfLearn} from "./session-self-learn";
import {Module} from "./module";

export enum SessionType {
    Offline = 'Offline',
    Meeting = 'Meeting',
    SelfLearn = 'SelfLearn',
}

export interface Session extends BaseEntity {
    moduleId?: string;
    title?: string;
    sessionNumber?: number;
    document?: string;
    sessionType?: SessionType;
    description?: string;
    module?: Module;
    sessionOffline?: SessionOffline;
    sessionMeeting?: SessionMeeting;
    sessionSelfLearn?: SessionSelfLearn;
}
