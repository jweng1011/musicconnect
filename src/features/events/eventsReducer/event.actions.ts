import {ADD_EVENT, AppActionTypes} from "../../app.types";
import {Event} from "./event.interface"

export function addEvent(newEvent: Event): AppActionTypes {
    return {
        type: ADD_EVENT,
        payload: newEvent,
    };
}