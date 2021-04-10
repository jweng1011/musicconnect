import {User} from "./user.interface"

export interface UsersState {
    users: { [id: number]: User };
    user: number;
    isLoggedIn: boolean;
}