import {ADD_APPLICATION, AppActionTypes} from "../../app.types";
import {Application} from "./application.interface";

export function addApplication(newApp: Application): AppActionTypes {
    return {
        type: ADD_APPLICATION,
        payload: newApp,
    }
}