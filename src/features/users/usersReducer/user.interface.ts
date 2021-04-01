export interface User {
    id: string;
    appIds: string[];
    eventIds: string[];
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber?: number;
}