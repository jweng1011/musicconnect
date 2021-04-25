import {Link, useHistory} from "react-router-dom";
import {useState} from "react";
import {CreateEventModal} from "../../features/events/createEventModal/CreateEventModal";
import {Button} from "antd";
import {UserProfileMenu} from "../userProfileMenu/UserProfileMenu";

export function EventManagerNavBar() {
    const [isCreateEventVisible, setIsCreateEventVisible] = useState(false);
    const closeModal = () => setIsCreateEventVisible(false);
    const createEventModal = <CreateEventModal onCancel={closeModal}/>
    const history = useHistory();

    return (
        <>
            {isCreateEventVisible ? createEventModal : null}
            <div className={`bg-gray-50 shadow-md`}>
                <div className={`max-w-3xl m-auto py-7 flex justify-between items-center`}>
                    <div className={`space-x-10`}>
                        <Link to="/myEvents" className={`text-gray-900 text-base`}>Dashboard</Link>
                    </div>
                    <div className={`flex items-center space-x-5`}>
                        {/*<Button type="primary" onClick={() => setIsCreateEventVisible(true)}>Create Event</Button>*/}
                        <Button type="ghost" onClick={() => history.push("/events")}>Go to Music Connect</Button>
                        <UserProfileMenu />
                    </div>
                </div>
            </div>
        </>

    )
}