import {Link} from "react-router-dom";
import {Button} from "antd";
import {useState} from "react";
import {CreateEventModal} from "../../features/events/createEventModal/CreateEventModal";

export function NavBar() {
    const [isCreateEventVisible, setIsCreateEventVisible] = useState(false);

    const closeModal = () => setIsCreateEventVisible(false);
    const createEventModal = <CreateEventModal onCancel={closeModal} />

    return (
        <>
            {isCreateEventVisible ? createEventModal : null}
            <div className={`bg-gray-50 shadow-md`}>
                <div className={`max-w-2xl m-auto py-7 flex justify-between items-center`}>
                    <div className={`space-x-20`}>
                        <Link className={`text-gray-900 text-base`} to="/events">Events</Link>
                        <Link className={`text-gray-900 text-base`} to="/applications">Applications</Link>
                        <Link className={`text-gray-900 text-base`} to="/listings">Listings</Link>
                    </div>
                    <div>
                        <Button type="primary" onClick={() => setIsCreateEventVisible(true)}>Create Event</Button>
                    </div>
                </div>
            </div>
        </>
    )
}