import {Application} from "./application.interface";

export interface ApplicationsState {
    applications: {[id: number] : Application}
}