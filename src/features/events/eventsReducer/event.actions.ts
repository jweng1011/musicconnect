import {ADD_APP_TO_EVENT, ADD_EVENT, AppActionTypes} from "../../app.types";
import {Event} from "./event.interface"

export function addEvent(newEvent: Event): AppActionTypes {
    return {
        type: ADD_EVENT,
        payload: newEvent,
    };
}

export function addApplicationToEvent(newAppId: string, eventId: string): AppActionTypes {
    return {
        type: ADD_APP_TO_EVENT,
        payload: [newAppId, eventId]
    }
}