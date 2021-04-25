import {NavBar} from "../ui-components/navBar/NavBar";
import {EventListingCard} from "../features/events/eventListing/EventListingCard";
import {useSelector} from "react-redux";
import {selectEvents} from "../features/events/eventsReducer/event.selector";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import {Empty, Tabs} from "antd";
import Title from "antd/es/typography/Title";
import {EventListingModal} from "../features/events/eventListing/EventListingModal";
import {Event} from "../features/events/eventsReducer/event.interface";
import {CreateEventModal} from "../features/events/createEventModal/CreateEventModal";
import {ApplyEventModal} from "../features/applications/applyEventModal/ApplyEventModal";
import {selectCurrUserId} from "../features/users/usersReducer/user.selector";

const { TabPane } = Tabs;

// interface MatchProps {
//     match: any;
// }

export function Events() {
    const events = useSelector(selectEvents);
    const user = useSelector(selectCurrUserId);
    const [isEventModalVisible, setEventModalVisible] = useState(false);
    const [isApplyEventModalVisible, setApplyEventModalVisible] = useState(false);
    const [currEvent, setCurrEvent] = useState(-1);
    const history = useHistory();

    const handleOnClickEvent = (key: number) => () => {
        setEventModalVisible(true);
        setCurrEvent(key)
    }

    const handleCloseEventModal = () => {
        setEventModalVisible(false);
    }

    const handleCloseApplyModal = () => {
        setApplyEventModalVisible(false);
    }

    const handleOnApply = (key: number) => () => {
        setApplyEventModalVisible(true);
        setCurrEvent(key)
        setEventModalVisible(false);
    }

    const eventsCardList = ( Object.keys(events).length === 0) ?
        <Empty className={`py-20`} description={"No events available yet!"} /> :
        Object.values(events).map((e) => (
                <EventListingCard
                    onClick={handleOnClickEvent(e.id)}
                    event={e}
                    onApply={handleOnApply(e.id)}
                />
            ))

    const eventModal = <EventListingModal eventId={currEvent}
                                          closeModal={handleCloseEventModal}
                                          onApply={handleOnApply(currEvent)}
    />

    const applyModal = <ApplyEventModal eventId={currEvent} closeModal={handleCloseApplyModal} />

    return (
        <>
            {isApplyEventModalVisible ? applyModal : null}
            {isEventModalVisible ? eventModal : null}
            <NavBar/>
            <div className={`max-w-3xl m-auto py-16 space-y-8`}>
                <Title level={4}>Events</Title>
                <div className={`border-t`}>
                    {/*<Tabs defaultActiveKey="1">*/}
                    {/*    <TabPane tab="Browse all" key="1">*/}
                    {/*        {eventsCardList}*/}
                    {/*    </TabPane>*/}
                    {/*</Tabs>*/}
                    {eventsCardList}
                </div>
            </div>
        </>
    )
}