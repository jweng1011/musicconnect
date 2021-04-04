export interface Application {
    id: string;
    userId: string;
    performName: string;
    performDescription: string;
    // true = accepted, false = rejected (for now!)
    status: Status;
}

export enum Status {
    accepted,
    rejected,
    pending
}