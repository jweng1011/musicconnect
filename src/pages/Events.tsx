import {NavBar} from "../ui-components/navBar/NavBar";
import {EventListingCard} from "../features/events/eventListing/EventListingCard";
import {useSelector} from "react-redux";
import {selectEvents} from "../features/events/eventsReducer/event.selector";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import {Empty} from "antd";
import Title from "antd/es/typography/Title";

// interface MatchProps {
//     match: any;
// }

export function Events() {
    const events = useSelector(selectEvents);
    // const [isEventModalVisible, setEventModalVisible] = useState(false);
    const history = useHistory();

    const eventsCardList = (Object.keys(events).length === 0) ?
        <Empty className={`py-20`} description={"No events available yet!"} /> :
        Object.keys(events).map((key: string) => (
                <EventListingCard
                    onClick={() => history.push(`/event/${key}`)}
                    event={events[key]}/>
            ))

    return (
        <>
            <NavBar/>
            <div className={`max-w-3xl m-auto py-20 space-y-5`}>
                <Title level={3}>Events</Title>
                {eventsCardList}
            </div>
        </>
    )
}