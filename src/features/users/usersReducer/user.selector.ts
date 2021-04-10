import {RootState} from "../../../store";

export const selectUsersState = (state: RootState) => state.users;
export const selectUsers = (state: RootState) => selectUsersState(state).users;
export const selectUser = (userId: number) => {
    return (state: RootState) => selectUsers(state)[userId]
}
export const selectCurrUserId = (state: RootState) => selectUsersState(state).user;
export const selectUserIdByEmail = (email: string) => {
    return (state: RootState) => {
        let id = -1;
        Object.values(selectUsers(state)).forEach(value => {
            if (value.email === email) {
                id = value.id;
            }
        })
        return id;
    }
}