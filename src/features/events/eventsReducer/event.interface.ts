import moment from "moment";

export interface Event {
    id: number;
    appIds: number[];
    name: string;
    description: string;
    location: string;
    startDate: moment.Moment;
    endDate: moment.Moment;
    audienceSize: AudienceSize;
    accessibility: string[];
    musicGenre: string[];
    // yearsOfExperience?: YearsExperienceType;
}

export interface EventDTO {
    id: number;
    appIds: number[];
    name: string;
    description: string;
    location: string;
    startDate: number;
    endDate: number;
    audienceSize: AudienceSize;
    accessibility: string[];
    musicGenre: string[];
    // yearsOfExperience?: YearsExperienceType;
}

export enum AudienceSize {
    Small = "Small",
    Medium = "Medium",
    Large = "Large",
}

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