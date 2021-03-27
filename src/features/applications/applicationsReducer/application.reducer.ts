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
        default:
            return state;
    }
}