import moment from "moment";

export interface Event {
    id: string;
    appIds: string[];
    eventName: string;
    eventDescription: string;
    location: string;
    startDate: moment.Moment;
    endDate: moment.Moment;
    //1-500
    audienceSize: number;
    accessibility?: string[];
    musicGenre?: string[];
    yearsOfExperience?: YearsExperienceType;
}

// export type AccessibilityTypes = "Handicap" | "Hearing";
export enum AccessibilityTypes {
    Handicap = "HANDICAP",
    Hearing = "HEARING",
}

export enum MusicGenreType {
    EDM = "EDM",
    Rock = "ROCK",
    Jazz = "JAZZ",
    Dubstep = "DUBSTEP",
    RnB = "RNB",
    Electro = "ELECTRO",
    Country = "COUNTRY",
    IndieRock = "INDIEROCK",
    Pop = "POP",
}

export enum YearsExperienceType {
    Novice,
    Experienced,
    Advanced
}

export enum EventType {
    Casual,
    Formal
}