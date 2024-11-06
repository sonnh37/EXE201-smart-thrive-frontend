import {BaseEntity} from './base';
import {Session} from './session';

export interface SessionSelfLearn extends BaseEntity {
    sessionId?: string;
    sessionNumber?: number;
    videoUrl?: string;
    session?: Session;
}
