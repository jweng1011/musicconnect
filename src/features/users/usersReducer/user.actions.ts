import {ADD_USER, AppActionTypes} from "../../app.types";
import {User} from "../usersReducer/user.interface"

export function addUser(newUser: User): AppActionTypes {
    return {
        type: ADD_USER,
        payload: newUser,
    }
}