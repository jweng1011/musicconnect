import {NavBar} from "../ui-components/navBar/NavBar";
import {useSelector} from "react-redux";
import {selectEvents, selectEventsByUser} from "../features/events/eventsReducer/event.selector";
import {useHistory} from "react-router-dom";
import {Button, Empty} from "antd";
import Title from "antd/es/typography/Title";
import {HostEventListingCard} from "../features/events/hostEventListingCard/HostEventListingCard";
import {selectCurrUserId} from "../features/users/usersReducer/user.selector";
import {EventManagerNavBar} from "../ui-components/eventManagerNavBar/EventManagerNavBar";
import {useState} from "react";
import {CreateEventModal} from "../features/events/createEventModal/CreateEventModal";

export function EventsDashboard() {
    const [isCreateEventVisible, setIsCreateEventVisible] = useState(false);
    const closeModal = () => setIsCreateEventVisible(false);
    const createEventModal = <CreateEventModal onCancel={closeModal}/>

    const currUserId = useSelector(selectCurrUserId)
    const events = useSelector(selectEventsByUser(currUserId));
    console.log("events:", events);
    const history = useHistory();

    const noEventsMessage = <div>
        <p className={`text-base`}>Welcome to your events dashboard! Create an event to get started.</p>
        {/*<Button type="primary" onClick={() => setIsCreateEventVisible(true)}>Create Event</Button>*/}
    </div>

    const eventsCardList = (events.length === 0) ?
        noEventsMessage :
        (events).map((event) => (
            <HostEventListingCard
                onClick={() => history.push(`/event/${event}`)}
                event={event}/>
        ))

    return (
        <>
            {isCreateEventVisible ? createEventModal : null}
            <EventManagerNavBar/>
            <div className={`max-w-3xl m-auto py-16 space-y-5`}>
                <div className={`flex space-x-5`}>
                    <Title level={4}>My Events</Title>
                    <Button type="primary" onClick={() => setIsCreateEventVisible(true)}>Create Event</Button>
                </div>
                {eventsCardList}
            </div>
        </>
    )
}