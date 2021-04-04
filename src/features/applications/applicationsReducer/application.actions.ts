import {ADD_APPLICATION, AppActionTypes, CHANGE_APP_STATUS} from "../../app.types";
import {Application, Status} from "./application.interface";

export function addApplication(newApp: Application): AppActionTypes {
    return {
        type: ADD_APPLICATION,
        payload: newApp,
    }
}

export function changeAppStatus(newStatus: Status, appId: string): AppActionTypes {
    return {
        type: CHANGE_APP_STATUS,
        payload: [newStatus, appId]
    }
}