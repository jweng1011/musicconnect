import {Link, useHistory} from "react-router-dom";
import {Button} from "antd";
import {useState} from "react";
import {CreateEventModal} from "../../features/events/createEventModal/CreateEventModal";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../features/users/usersReducer/user.actions";

export function NavBar() {
    const [isCreateEventVisible, setIsCreateEventVisible] = useState(false);

    const closeModal = () => setIsCreateEventVisible(false);
    const createEventModal = <CreateEventModal onCancel={closeModal} />

    const dispatch = useDispatch();
    const history = useHistory();
    const handleSignOut = () => {
        dispatch(logoutUser(""));
        history.push(`\login`);
    }
    return (
        <>
            {isCreateEventVisible ? createEventModal : null}
            <div className={`bg-gray-50 shadow-md`}>
                <div className={`max-w-3xl m-auto py-7 flex justify-between items-center`}>
                    <div className={`space-x-20`}>
                        <Link className={`text-gray-900 text-base`} to="/events">Events</Link>
                        <Link className={`text-gray-900 text-base`} to="/applications">Applications</Link>
                        <Link className={`text-gray-900 text-base`} to="/listings">Listings</Link>
                    </div>
                    <div>
                        <Button type="primary" onClick={() => setIsCreateEventVisible(true)}>Create Event</Button>
                        <Button type="link" onClick={handleSignOut}>Sign out</Button>
                    </div>
                </div>
            </div>
        </>
    )
}