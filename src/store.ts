import {combineReducers, createStore} from "redux";
import {eventsReducer} from "./features/events/eventsReducer/event.reducer";
import {usersReducer} from "./features/users/usersReducer/user.reducer";
import {applicationsReducer} from "./features/applications/applicationsReducer/application.reducer";

export const rootReducer = combineReducers({
    events: eventsReducer,
    users: usersReducer,
    applications: applicationsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;