import {NavBar} from "../ui-components/navBar/NavBar";
import {useSelector} from "react-redux";
import {selectEvents, selectEventsByUser} from "../features/events/eventsReducer/event.selector";
import {useHistory} from "react-router-dom";
import {Empty} from "antd";
import Title from "antd/es/typography/Title";
import {ListingCard} from "../features/events/listingCard/ListingCard";
import {selectCurrUserId} from "../features/users/usersReducer/user.selector";

export function Listings() {
    const currUserId = useSelector(selectCurrUserId)
    const events = useSelector(selectEventsByUser(currUserId));
    console.log("events:", events);
    const history = useHistory();

    const eventsCardList = (events.length === 0) ?
        <Empty className={`py-20`} description={"No events available yet!"} /> :
        (events).map((event) => (
            <ListingCard
                onClick={() => history.push(`/event/${event}`)}
                event={event}/>
        ))

    return (
        <>
            <NavBar/>
            <div className={`max-w-3xl m-auto py-20 space-y-5`}>
                <Title level={3}>My Listings</Title>
                {eventsCardList}
            </div>
        </>
    )
}