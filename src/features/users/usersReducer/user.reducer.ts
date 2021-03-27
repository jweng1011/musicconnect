import {UsersState} from "./user.types";
import {AppActionTypes} from "../../app.types";

const initialState: UsersState = {
    users: {}
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
                }

            }
        default:
            return state;
    }
}