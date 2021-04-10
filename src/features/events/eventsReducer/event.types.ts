import {Event} from "./event.interface"

export interface EventsState {
    events: { [id: number]: Event};
}