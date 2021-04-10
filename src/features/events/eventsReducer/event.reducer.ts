import {EventsState} from "./event.types";
import {ADD_APP_TO_EVENT, ADD_EVENT, AppActionTypes} from "../../app.types";
import {AudienceSize, Event} from "./event.interface";
import moment from "moment";

// testing events
const event1: Event = {
    id: 0,
    name: "Sample Event 1",
    description: "Sample event 1 description",
    startDate: moment("20210407"),
    endDate: moment("20210407"),
    location: "Tufts",
    accessibility: ["Handicap"],
    audienceSize: AudienceSize.Large,
    musicGenre: ["Rock"],
    appIds: []
}

const event2: Event = {
    id: 1,
    name: "Sample Event 2",
    description: "Sample event 2 description",
    startDate: moment("20210408"),
    endDate: moment("20210409"),
    location: "NEU",
    accessibility: ["Handicap"],
    audienceSize: AudienceSize.Medium,
    musicGenre: ["Pop"],
    appIds: []
}

const event3: Event = {
    id: 2,
    name: "Sample Event 3",
    description: "Sample event 3 description",
    startDate: moment("20210408"),
    endDate: moment("20210409"),
    location: "Harvard",
    accessibility: [],
    audienceSize: AudienceSize.Large,
    musicGenre: ["Funk"],
    appIds: []
}

const initialState: EventsState = {
    events: {
        [event1.id]: event1,
        [event2.id]: event2,
        [event3.id]: event3,
    }
};


// const initialState: EventsState = {
//     events: {},
// };

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