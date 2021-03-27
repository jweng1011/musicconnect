import {NavBar} from "../../ui-components/navBar/NavBar";
import {useSelector} from "react-redux";
import {selectEvents} from "../events/eventsReducer/event.selector";
import {useHistory} from "react-router-dom";
import {Empty} from "antd";
import {EventListingCard} from "../events/eventListing/EventListingCard";
import {selectApplications} from "./applicationsReducer/application.selector";

export function Applications() {
    const applications = useSelector(selectApplications);
    // const [isEventModalVisible, setEventModalVisible] = useState(false);
    const history = useHistory();

    // const applicationsCardList = (Object.keys(applications).length === 0) ?
    //     <Empty className={`py-20`} description={"No events available yet!"} /> :
    //     Object.keys(applications).map((key: string) => (
    //         <EventListingCard
    //             onClick={() => history.push(`/event/${key}`)}
    //             applications={applications[key]}/>
    //     ))
    //
    return (
        <>
            <NavBar/>
            <div className={`max-w-2xl m-auto py-20 space-y-5`}>
                {/*{eventsCardList}*/}
            </div>
        </>
    )
}