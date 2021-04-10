export interface User {
    id: number;
    // userType: UserType;
    appIds: number[];
    eventIds: number[];
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber?: number;
}
//
// export enum UserType {
//     Host,
//     Regular,
// }