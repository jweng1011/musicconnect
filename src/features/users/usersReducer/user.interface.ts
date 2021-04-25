import {AccessibilityTypes} from "../../events/eventsReducer/event.interface";

export interface User {
    id: number;
    userType: UserType;
    appIds: number[];
    eventIds: number[];
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber?: number;
    accessibility: string[];
}

export enum UserType {
    Host,
    Musician,
}