import {NavBar} from "../../ui-components/navBar/NavBar";
import {EventListingCard} from "./eventListing/EventListingCard";
import {useSelector} from "react-redux";
import {selectEvents} from "./eventsReducer/event.selector";
import {useHistory} from "react-router-dom";
import {Empty} from "antd";
import Title from "antd/es/typography/Title";
import {ListingCard} from "./listingCard/ListingCard";

export function Listings() {
    const events = useSelector(selectEvents);
    const history = useHistory();

    const eventsCardList = (Object.keys(events).length === 0) ?
        <Empty className={`py-20`} description={"No events available yet!"} /> :
        Object.keys(events).map((key: string) => (
            <ListingCard
                onClick={() => history.push(`/event/${key}`)}
                event={events[key]}/>
        ))

    return (
        <>
            <NavBar/>
            <div className={`max-w-2xl m-auto py-20 space-y-5`}>
                <Title level={3}>My Listings</Title>
                {eventsCardList}
            </div>
        </>
    )
}