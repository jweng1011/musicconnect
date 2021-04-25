import {NavBar} from "../ui-components/navBar/NavBar";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {Empty} from "antd";
import {selectApplications} from "../features/applications/applicationsReducer/application.selector";
import Title from "antd/es/typography/Title";
import {EventListingCard} from "../features/events/eventListing/EventListingCard";
import {ApplicationCard} from "../features/applications/applicationCard/ApplicationCard";
import {useState} from "react";

export function Applications() {
    const applications = useSelector(selectApplications);
    const [isAppModalVisible, setAppModalVisible] = useState(false);
    const history = useHistory();

    const handleViewApp = () => {
        setAppModalVisible(true);
    }

    const applicationsCardList = (Object.keys(applications).length === 0) ?
        <Empty className={`py-20`} description={"You haven't applied to any events yet!"} /> :
        Object.values(applications).map((value) => (
            console.log("application:", value),
            <ApplicationCard
                onViewApplication={handleViewApp}
                application={value}/>
        ))

    return (
        <>
            {/*{isAppModalVisible ? }*/}
            <NavBar/>
            <div className={`max-w-3xl m-auto py-16 space-y-5`}>
                <Title level={4}>My Applications</Title>
                {applicationsCardList}
            </div>
        </>
    )
}