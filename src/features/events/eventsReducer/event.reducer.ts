import {EventsState} from "./event.types";
import {ADD_APP_TO_EVENT, ADD_EVENT, AppActionTypes} from "../../app.types";

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
        case ADD_APP_TO_EVENT:
            const newAppId = action.payload[0];
            const eventId = action.payload[1];
            const newEvent = state.events[eventId];
            const updatedAppIds = [...newEvent.appIds, newAppId];
            newEvent.appIds = updatedAppIds;
            return {
                events: {
                    ...state.events,
                    [eventId]: newEvent,
                }
            }
        default:
            return state;
    }
}