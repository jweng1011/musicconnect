import moment from "moment";

export interface Application {
    id: number;
    userId: number;
    performName: string;
    performDescription: string;
    eventId: number;
    dateApplied: moment.Moment;
    // true = accepted, false = rejected (for now!)
    status: Status;
}

export enum Status {
    accepted,
    rejected,
    pending
}