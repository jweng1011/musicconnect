import {NavBar} from "../ui-components/navBar/NavBar";
import {EventListingCard} from "../features/events/eventListing/EventListingCard";
import {useSelector} from "react-redux";
import {selectEvents} from "../features/events/eventsReducer/event.selector";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import {Empty} from "antd";
import Title from "antd/es/typography/Title";
import {EventListingModal} from "../features/events/eventListing/EventListingModal";
import {Event} from "../features/events/eventsReducer/event.interface";
import {CreateEventModal} from "../features/events/createEventModal/CreateEventModal";
import {ApplyEventModal} from "../features/applications/applyEventModal/ApplyEventModal";
import {selectCurrUserId} from "../features/users/usersReducer/user.selector";

// interface MatchProps {
//     match: any;
// }

export function Events() {
    const events = useSelector(selectEvents);
    const user = useSelector(selectCurrUserId);
    const [isEventModalVisible, setEventModalVisible] = useState(false);
    const [isApplyEventModalVisible, setApplyEventModalVisible] = useState(false);
    const [currEvent, setCurrEvent] = useState("");
    const history = useHistory();

    const handleOnClickEvent = (key: string) => () => {
        setEventModalVisible(true);
        setCurrEvent(key)
    }

    const handleCloseEventModal = () => {
        setEventModalVisible(false);
    }

    const handleCloseApplyModal = () => {
        setApplyEventModalVisible(false);
    }

    const handleShowApplyModal = () => {
        setApplyEventModalVisible(true);
        setEventModalVisible(false);
    }

    const eventsCardList = (Object.keys(events).length === 0) ?
        <Empty className={`py-20`} description={"No events available yet!"} /> :
        Object.keys(events).map((key: string) => (
                <EventListingCard
                    onClick={handleOnClickEvent(key)}
                    event={events[key]}
                    showApplyModal={handleShowApplyModal}
                />
            ))

    const eventModal = <EventListingModal eventId={currEvent}
                                          closeModal={handleCloseEventModal}
                                          showApplyModal={handleShowApplyModal}
    />

    const applyModal = <ApplyEventModal eventId={currEvent} closeModal={handleCloseApplyModal} />

    return (
        <>
            {isApplyEventModalVisible ? applyModal : null}
            {isEventModalVisible ? eventModal : null}
            <NavBar/>
            <div className={`max-w-3xl m-auto py-20 space-y-5`}>
                <Title level={3}>Events</Title>
                {eventsCardList}
            </div>
        </>
    )
}