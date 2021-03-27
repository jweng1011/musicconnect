import {RootState} from "../../../store"
import {selectUser} from "../../users/usersReducer/user.selector";

export const selectEventsState = (state: RootState) => state.events;
export const selectEvents = (state: RootState) => selectEventsState(state).events;

export const selectEvent = (eventId: string) => {
    return (state: RootState) => selectEvents(state)[eventId];
}

// export const selectEventsByUser = (userId: string) => {
//     return (state: RootState) => selectUser(userId)(state).eventIds.map(
//             id => selectEvent(id)(state))
// }