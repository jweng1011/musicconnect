import {Link, useHistory} from "react-router-dom";
import {Avatar, Button, Dropdown, Menu} from "antd";
import {UserOutlined, DownOutlined} from '@ant-design/icons';
import {useState} from "react";
import {CreateEventModal} from "../../features/events/createEventModal/CreateEventModal";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../features/users/usersReducer/user.actions";
import {selectCurrUserId, selectUser} from "../../features/users/usersReducer/user.selector";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import {UserProfileMenu} from "../userProfileMenu/UserProfileMenu";

export function NavBar() {
    const history = useHistory();

    return (
        <>
            <div className={`bg-gray-50 shadow-md`}>
                <div className={`max-w-3xl m-auto py-7 flex justify-between items-center`}>
                    <div className={`space-x-10`}>
                        <Link className={`text-gray-900 text-base`} to="/events">Home</Link>
                        <Link className={`text-gray-900 text-base`} to="/applications">My Applications</Link>
                    </div>
                    <div className={`flex items-center space-x-5`}>
                        <Button type="ghost" onClick={() => history.push("/myEvents")}>Host an Event</Button>
                        <UserProfileMenu />
                    </div>
                </div>
            </div>
        </>
    )
}