import {EventsState} from "./event.types";
import {ADD_EVENT, AppActionTypes} from "../../app.types";

const initialState: EventsState = {
    events: {},
};

export function eventsReducer(
    state = initialState,
    action: AppActionTypes
): EventsState {
    switch (action.type) {
        case ADD_EVENT:
            const event = action.payload;
            return {
                events: {
                    ...state.events,
                    [event.id]: event,
                }
            }
        default:
            return state;
    }
}