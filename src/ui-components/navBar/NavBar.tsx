import {Link, useHistory, useLocation} from "react-router-dom";
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
    const location = useLocation();

    const defaultUnderline = <div className={`mt-1 border-transparent border-2`}> </div>;
    const activeUnderline = <div className={`mt-1 border-2 border-blue-400 rounded`}> </div>;
    return (
        <>
            <div className={`border-b`}>
                <div className={`max-w-3xl m-auto py-7 flex justify-between items-center`}>
                    <div className={`space-x-10 flex items-center`}>
                        {/*<div className={`p-1 bg-blue-100 self-center`}>*/}
                        {/*    <p className={`m-0`}>Logo/App Name</p>*/}
                        {/*</div>*/}
                        <div>
                            <Link className={`text-gray-900 text-base`} to="/events">Home</Link>
                            {location.pathname === "/events" ?  activeUnderline : defaultUnderline}
                        </div>
                        <div>
                            <Link className={`text-gray-900 text-base`} to="/applications">My Applications</Link>
                            {location.pathname === "/applications" ? activeUnderline : defaultUnderline}
                        </div>
                    </div>
                    <div className={`flex items-center space-x-5`}>
                        {/*<Button type="ghost" onClick={() => history.push("/myEvents")}>Host an Event</Button>*/}
                        <UserProfileMenu />
                    </div>
                </div>
            </div>
        </>
    )
}