import {Event} from "./events/eventsReducer/event.interface"
import {User} from "./users/usersReducer/user.interface"
import {Application} from "./applications/applicationsReducer/application.interface";

export const ADD_EVENT = "ADD_EVENT";
export const ADD_USER = "ADD_USER";
export const ADD_APPLICATION = "ADD_APPLICATION";

export interface AddEventAction {
    type: typeof ADD_EVENT;
    payload: Event;
}

export interface AddUserAction {
    type: typeof ADD_USER;
    payload: User;
}

export interface AddApplicationAction {
    type: typeof ADD_APPLICATION;
    payload: Application;
}
export type AppActionTypes = AddEventAction | AddUserAction | AddApplicationAction;