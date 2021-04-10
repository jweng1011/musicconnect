import {UsersState} from "./user.types";
import {AppActionTypes} from "../../app.types";
import {User} from "./user.interface";

const dummyUser: User = {
    id: 0,
    // userType: UserType;
    appIds: [],
    eventIds: [0, 1],
    firstName: "Dummy",
    lastName: "User",
    email: "dummyUser@gmail.com",
    password: "dummyuser",
}

const initialState: UsersState = {
    users: {[0]: dummyUser},
    user: -1,
    isLoggedIn: false,
}

// const initialState: UsersState = {
//     users: {},
//     user: -1,
//     isLoggedIn: false,
// }

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
                user: -1,
                isLoggedIn: false,
            }
        case "ADD_EVENT_TO_USER":
            const eventId = action.payload;
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