import {ADD_EVENT_TO_USER, ADD_USER, AppActionTypes, EDIT_USER, LOGIN_USER, LOGOUT_USER} from "../../app.types";
import {User} from "../usersReducer/user.interface"

export function addUser(newUser: User): AppActionTypes {
    return {
        type: ADD_USER,
        payload: newUser,
    }
}

export function editUser(newUser: User): AppActionTypes {
    return {
        type: EDIT_USER,
        payload: newUser,
    }
}

export function loginUser(currUser: number): AppActionTypes {
    return {
        type: LOGIN_USER,
        payload: currUser,
    }
}

export function addEventToUser(eventId: number): AppActionTypes {
    return {
        type: ADD_EVENT_TO_USER,
        payload: eventId,
    }
}

export function logoutUser(currUser: number) : AppActionTypes {
    return {
        type: LOGOUT_USER,
        payload: currUser,
    }
}