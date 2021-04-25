import {User, UserType} from "../../features/users/usersReducer/user.interface";
import Title from "antd/es/typography/Title";
import {userInfo} from "os";
import {useHistory} from "react-router-dom";
import {Button} from "antd";

interface Props {
    user: User;
}
export function ConfirmCreateUser({user}: Props) {
    const history = useHistory();

    return (
        <div>
            <Title>Success! Welcome to Music Connect</Title>
            <p>Thanks for joining the {UserType[user.userType]} community!</p>
            <Button type="primary" onClick={() => history.push(`\events`)}>Find events</Button>
        </div>
    )
}