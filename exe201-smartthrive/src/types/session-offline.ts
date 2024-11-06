import {BaseEntity} from './base';
import {Session} from './session';

export interface SessionOffline extends BaseEntity {
    sessionId?: string;
    location?: string;
    date?: Date;
    duration?: number;
    session?: Session;
}
