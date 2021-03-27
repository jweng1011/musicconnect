import {User} from "./user.interface"

export interface UsersState {
    users: { [id: string]: User };
}