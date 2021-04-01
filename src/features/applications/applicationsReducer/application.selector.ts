import {RootState} from "../../../store";
import {selectEvent} from "../../events/eventsReducer/event.selector";
import {selectUser} from "../../users/usersReducer/user.selector";

export const selectApplicationState = (state: RootState) => state.applications;
export const selectApplications = (state: RootState) => selectApplicationState(state).applications;
export const selectApplication = (appId: string) => {
    return (state: RootState) => selectApplications(state)[appId]
}

// return list of Application objects given eventId
// export const selectEventApplications = (eventId: string) => {
//     return (state: RootState) => selectEvent(eventId)(state).appIds.map(
//         id => selectApplication(id)(state)
//     )
// }

// return list of Application objects given userIds
// export const selectUserApplications = (userId: string) => {
//     return (state: RootState) => selectUser(userId)(state).appIds.map(
//         id => selectApplication(id)(state)
//     )
// }