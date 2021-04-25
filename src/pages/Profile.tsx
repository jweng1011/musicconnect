import {NavBar} from "../ui-components/navBar/NavBar";
import {selectCurrUserId, selectUser} from "../features/users/usersReducer/user.selector";
import {useSelector} from "react-redux";
import Title from "antd/es/typography/Title";

export function Profile() {
    const userId = useSelector(selectCurrUserId);
    const user = useSelector(selectUser(userId));

    return (
        <>
            <NavBar/>
            <div className={`max-w-3xl m-auto py-16 space-y-3`}>
                <Title level={2}>{user.firstName} {user.lastName}</Title>
                <p>{user.email}</p>
            </div>
        </>
    )
}