import {RootState} from "../../../store"
import {selectCurrUserId, selectUser} from "../../users/usersReducer/user.selector";

export const selectEventsState = (state: RootState) => state.events

export const selectEvents = (state: RootState) => selectEventsState(state).events;

export const selectEvent = (eventId: number) => {
    return (state: RootState) => selectEvents(state)[eventId];
}

export const selectEventsByUser = (userId: number) => {
    return (state: RootState) => selectUser(userId)(state).eventIds.map(
            id => selectEvent(id)(state))
    // error check for if the event doesn't exist
}