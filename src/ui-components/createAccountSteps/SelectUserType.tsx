import {useState} from "react";
import {User, UserType} from "../../features/users/usersReducer/user.interface";
import Title from "antd/es/typography/Title";
import {Button} from "antd";

interface Props {
    user: User;
    onFinish: (user: User) => void;
    onNext: () => void;
}
export function SelectUserType({user, onFinish, onNext} : Props) {
    const [newUserType, setNewUserType] = useState<UserType>(UserType.Musician);
    const [selected, setSelected] = useState<boolean>(true);

    const handleOnSelect = (userType: UserType) => () => {
        setNewUserType(userType);
        if (userType === UserType.Musician) {
            setSelected(true);
        } else {
            setSelected(false);
        }
    }

    const handleOnClick = () => {
        onFinish(
            {...user,
                userType: newUserType,
            });
        onNext();
    }

    const selectedStyle = `w-1/2 p-10 ring-blue-500 ring rounded`;
    const defaultStyle = `w-1/2 p-10 ring-1 ring-gray-300 rounded`;

    const musicianStyle = selected ? selectedStyle : defaultStyle;
    const hostStyle = selected ? defaultStyle : selectedStyle;

    return (
            <div className={`space-y-10`}>
                <Title>Select your role</Title>
                <div className={`space-y-5`}>
                    <p>To start, please select your role.</p>
                    <div className={`flex space-x-3 justify-between`}>
                        <div className={musicianStyle} onClick={handleOnSelect(UserType.Musician)}>
                            <Title level={5}>Musician</Title>
                            <p>I'm here to find opportunities to perform.</p>
                        </div>
                        <div className={hostStyle} onClick={handleOnSelect(UserType.Host)}>
                            <Title level={5}>Host</Title>
                            <p>I'm here to find musicians to perform at my event.</p>
                        </div>
                    </div>
                </div>
                <Button type="primary" size="large" onClick={handleOnClick}>
                    Next
                </Button>
            </div>
    )
}