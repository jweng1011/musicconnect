import {NavBar} from "../ui-components/navBar/NavBar";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {Empty} from "antd";
import {selectApplications} from "../features/applications/applicationsReducer/application.selector";

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
            <div className={`max-w-3xl m-auto py-20 space-y-5`}>
                {/*{eventsCardList}*/}
            </div>
        </>
    )
}