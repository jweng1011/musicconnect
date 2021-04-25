import {Button, Checkbox, Form, Input} from "antd";
import {useState} from "react";
import {User, UserType} from "../../features/users/usersReducer/user.interface";
import Title from "antd/es/typography/Title";
import {AccessibilityTypes} from "../../features/events/eventsReducer/event.interface";
import {addUser, loginUser} from "../../features/users/usersReducer/user.actions";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

interface Props {
    user: User;
    onBack: () => void;
}
export function AccountInfoForm({user, onBack} : Props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accessibility, setAccessibility] = useState<string[]>([]);

    const [requiredMark, setRequiredMarkType] = useState<boolean>();
    const onRequiredTypeChange = (requiredMark: boolean) => {
        setRequiredMarkType(requiredMark);
    }

    const dispatch = useDispatch();
    const history = useHistory();

    const handleOnNext = () => {
        const newUser = {
            ...user,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            accessibility: accessibility,
        };
        dispatch(addUser(newUser));
        dispatch(loginUser(newUser.id));
        newUser.userType === UserType.Musician ?
            history.push(`/events`) :
            history.push(`/eventDashboard`);
    }

    const accessibilityOptions = Object.keys(AccessibilityTypes).map(key => {
        return key;
    })

    return (
        <div className={`space-y-10`}>
            <Title>Tell us about yourself</Title>
            <div>
                <p className={`pb-2`}>Please fill out the following information.</p>
                <Form layout="vertical"
                      requiredMark={requiredMark}
                      onValuesChange={onRequiredTypeChange}
                      initialValues={{requiredMark}}
                >
                    <Form.Item label="First Name"
                               rules={[{
                                   required: true,
                                   message: "Please enter your first name",
                               }]}
                               name="firstName">
                        <Input placeholder="Enter first name"
                               value={firstName}
                               onChange={(e) => setFirstName(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label="Last Name"
                               rules={[{
                                   required: true,
                                   message: "Please enter your last name",
                               }]}
                               name="lastName">
                        <Input placeholder="Enter last name"
                               value={lastName}
                               onChange={(e) => setLastName(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label="Email Address"
                               rules={[{
                                   required: true,
                                   message: "Please enter your email address",
                               }]}
                               name="email">
                        <Input placeholder="Enter email address"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item label="Password"
                               rules={[{
                                   required: true,
                                   message: "Please create a password",
                               }]}
                               name="password"
                    >
                        <Input.Password placeholder="Create password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                    </Form.Item>
                    <Form.Item label={user.userType === UserType.Host ? "What accessibility accommodations do you offer?" : null}
                               name="accessibility">
                        {user.userType === UserType.Host ? <Checkbox.Group value={accessibility} options={accessibilityOptions}
                                                                           onChange={(checkedValues) => {
                                                                               setAccessibility(Object.values(checkedValues).map((x) => x.toString()));
                                                                           }}
                        /> : null}
                    </Form.Item>
                </Form>
            </div>
            <div className={`space-x-3`}>
                <Button type="ghost" size="large" onClick={onBack}>
                    Back
                </Button>
                <Button type="primary" size="large"  onClick={handleOnNext}>
                    Create Account
                </Button>
            </div>
        </div>
    )
}