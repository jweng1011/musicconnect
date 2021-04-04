import {AppActionTypes} from "../../app.types";
import {ApplicationsState} from "./application.types";

const initialState: ApplicationsState = {
    applications: {}
}
export function applicationsReducer(
    state = initialState,
    action: AppActionTypes
) {
    switch (action.type) {
        case "ADD_APPLICATION":
            const newApp = action.payload;
            return {
                applications: {
                    ...state.applications,
                    [newApp.id]: newApp,
                }
            }
        case "CHANGE_APP_STATUS":
            const newStatus = action.payload[0];
            const appId = action.payload[1];
            const updatedApp = state.applications[appId];
            updatedApp.status = newStatus;
            return {
                applications: {
                    ...state.applications,
                    [appId]: updatedApp,
                }
            }
        default:
            return state;
    }
}