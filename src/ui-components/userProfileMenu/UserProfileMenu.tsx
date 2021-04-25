import {Avatar, Dropdown, Menu} from "antd";
import {DownOutlined, UserOutlined} from "@ant-design/icons";
import Text from "antd/es/typography/Text";
import {Link} from "react-router-dom";
import {logoutUser} from "../../features/users/usersReducer/user.actions";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrUserId, selectUser} from "../../features/users/usersReducer/user.selector";

export function UserProfileMenu() {
    const dispatch = useDispatch();

    const handleSignOut = () => {
        // 0 is placeholder, logoutUser already knows currentUser
        dispatch(logoutUser(0));
    }

    const currUserId = useSelector(selectCurrUserId);
    const currUser = useSelector(selectUser(currUserId))

    const userMenu =
        <Menu>
            <Menu.Item key="0">
                <Link to={'/profile'}>View Profile</Link>
            </Menu.Item>
            {/*<Menu.Item key="1">*/}
            {/*    <Link to={"/myEvents"}>Publish Events</Link>*/}
            {/*</Menu.Item>*/}
            <Menu.Item key="1">
                <Link to={`/login`} onClick={handleSignOut}>Sign out</Link>
            </Menu.Item>
        </Menu>

    return (
        <div className={`p-2 rounded hover:bg-blue-50 items-center`}>
            <Dropdown overlay={userMenu} trigger={['click']}>
                <div className={`flex space-x-2 items-center`}>
                    <Avatar size="small" icon={<UserOutlined/>} />
                    <Text>{currUser.firstName} {currUser.lastName}</Text>
                    <DownOutlined />
                </div>
            </Dropdown>
        </div>
    )
}