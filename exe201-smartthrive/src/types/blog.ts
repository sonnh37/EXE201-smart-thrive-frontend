import {BaseEntity} from './base';
import {User} from './user';

export interface Blog extends BaseEntity {
    userId?: string;
    title?: string;
    description?: string;
    isActive?: boolean;
    backgroundImage?: string;
    user?: User;
}
