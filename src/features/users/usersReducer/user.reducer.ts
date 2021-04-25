import {UsersState} from "./user.types";
import {AppActionTypes} from "../../app.types";
import {User, UserType} from "./user.interface";

const musician: User = {
    id: 0,
    userType: UserType.Musician,
    appIds: [],
    eventIds: [0, 1],
    firstName: "Musician",
    lastName: "User",
    email: "musician@gmail.com",
    password: "musician",
    accessibility: [],
}

const host: User = {
    id: 1,
    userType: UserType.Host,
    appIds: [],
    eventIds: [0, 1],
    firstName: "Host",
    lastName: "User",
    email: "host@gmail.com",
    password: "host",
    accessibility: [],
}


const initialState: UsersState = {
    users: {[0]: musician,
            [1]: host,
    },
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
        case "EDIT_USER":
            const editedUser = action.payload;
            return {
                users: {
                    ...state.users,
                    [editedUser.id]: editedUser,
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