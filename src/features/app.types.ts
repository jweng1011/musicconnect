import {Event} from "./events/eventsReducer/event.interface"
import {User} from "./users/usersReducer/user.interface"
import {Application, Status} from "./applications/applicationsReducer/application.interface";

export const ADD_EVENT = "ADD_EVENT";
export const ADD_USER = "ADD_USER";
export const LOGIN_USER = "LOGIN_USER";
export const ADD_APPLICATION = "ADD_APPLICATION";
export const ADD_EVENT_TO_USER = "ADD_EVENT_TO_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const ADD_APP_TO_EVENT = "ADD_APP_TO_EVENT";
export const CHANGE_APP_STATUS = "CHANGE_APP_STATUS";

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

export interface AddAppToEventAction {
    type: typeof ADD_APP_TO_EVENT;
    payload: [string, string];
}

export interface ChangeAppStatus {
    type: typeof CHANGE_APP_STATUS;
    payload: [Status, string];
}

export type AppActionTypes = AddEventAction |
    AddUserAction |
    AddApplicationAction |
    LoginUserAction |
    AddEventToUserAction |
    LogoutUserAction |
    AddAppToEventAction |
    ChangeAppStatus;