export interface User {
    id: string;
    appIds: string[];
    eventIds: string[];
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: number;
}