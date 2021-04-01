import {UsersState} from "./user.types";
import {AppActionTypes} from "../../app.types";

const initialState: UsersState = {
    users: {},
    user: "",
    isLoggedIn: false,
}

export function usersReducer(
    state = initialState,
    action: AppActionTypes
) {
    switch (action.type) {
        case "ADD_USER":
            const user = action.payload;
            return {
                users: {
                    ...state.users,
                    [user.id] : user,
                },
                user: state.user,
                isLoggedIn: state.isLoggedIn,
            }
        case "LOGIN_USER":
            const currUser = action.payload;
            return {
                users: {...state.users},
                user: currUser,
                isLoggedIn: true,
            }
        case "LOGOUT_USER":
            return {
                users: state.users,
                user: "",
                isLoggedIn: false,
            }
        case "ADD_EVENT_TO_USER":
            const eventId = action.payload;
            // let updatedEvents: string[] = [];
            // if (state.users[state.user].eventIds.length === 0) {
            //     updatedEvents = [eventId];
            // } else {
            //     updatedEvents = [...state.users[state.user].eventIds, eventId];
            // }
            const updatedEvents = [...state.users[state.user].eventIds, eventId];
            const updatedUser = {...state.users[state.user], eventIds: updatedEvents}
            return {
                users: {
                    ...state.users,
                    [state.user]: updatedUser
                },
                user: state.user,
                isLoggedIn: state.isLoggedIn,
            }
        default:
            return state;
    }
}