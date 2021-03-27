import {RootState} from "../../../store";

export const selectUsersState = (state: RootState) => state.users;
export const selectUsers = (state: RootState) => selectUsersState(state).users;
export const selectUser = (userId: string) => {
    return (state: RootState) => selectUsers(state)[userId]
}
