import {Event} from "./events/eventsReducer/event.interface"
import {User} from "./users/usersReducer/user.interface"
import {Application} from "./applications/applicationsReducer/application.interface";

export const ADD_EVENT = "ADD_EVENT";
export const ADD_USER = "ADD_USER";
export const LOGIN_USER = "LOGIN_USER";
export const ADD_APPLICATION = "ADD_APPLICATION";
export const ADD_EVENT_TO_USER = "ADD_EVENT_TO_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export interface AddEventAction {
    type: typeof ADD_EVENT;
    payload: Event;
}

export interface AddUserAction {
    type: typeof ADD_USER;
    payload: User;
}

export interface LoginUserAction {
    type: typeof LOGIN_USER;
    payload: string;
}

export interface AddEventToUserAction {
    type: typeof ADD_EVENT_TO_USER;
    payload: string;
}

export interface AddApplicationAction {
    type: typeof ADD_APPLICATION;
    payload: Application;
}

export interface LogoutUserAction {
    type: typeof LOGOUT_USER;
    payload: string;
}
export type AppActionTypes = AddEventAction |
    AddUserAction |
    AddApplicationAction |
    LoginUserAction |
    AddEventToUserAction |
    LogoutUserAction;