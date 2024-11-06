import {CreateCommand, UpdateCommand} from "./base-command";

export interface BlogCreateCommand extends CreateCommand {
    userId?: string;
    title?: string;
    description?: string;
    isActive?: boolean;
    backgroundImage?: string;
}

export interface BlogUpdateCommand extends UpdateCommand {
    userId?: string;
    title?: string;
    description?: string;
    isActive?: boolean;
    backgroundImage?: string;
}
