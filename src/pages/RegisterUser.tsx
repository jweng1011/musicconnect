import {Button, Divider, Form, Input, Radio} from "antd";
import {useState} from "react";
import Title from "antd/es/typography/Title";
import {User} from "../features/users/usersReducer/user.interface";
import {useDispatch} from "react-redux";
import {addUser, loginUser} from "../features/users/usersReducer/user.actions";
import {useHistory} from "react-router-dom";

let idGenerator = 1;
export function RegisterUser() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [userType, setUserType] = useState(UserType.Regular);

    const [requiredMark, setRequiredMarkType] = useState<boolean>();
    const onRequiredTypeChange = (requiredMark: boolean) => {
        setRequiredMarkType(requiredMark);
    }

    const appIds: number[] = [];
    const eventIds: number[] = [];
    let id: number;
    const dispatch = useDispatch();

    const handleOnOk = () => {
        idGenerator++;
        id = idGenerator;
        let newUser: User = {
            firstName,
            lastName,
            email,
            appIds,
            eventIds,
            password,
            // id: id.toString(),
            id,
            // userType,
        }
        dispatch(addUser(newUser));
        dispatch(loginUser(id));
        // console.log("id of new user is:", id.toString());
        history.push(`/events`)
    }

    const history = useHistory();

    return (
        <div className={`max-w-sm m-auto py-28`}>
            <Title>Create an account</Title>
            <p className={`pb-10`}>Please fill out the following information.</p>
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
                {/*<Form.Item label="Please select your role:"*/}
                {/*           rules={[{*/}
                {/*               required: true,*/}
                {/*               message: "Please select user type",*/}
                {/*           }]}*/}
                {/*           name="userType"*/}
                {/*           >*/}
                {/*    <Radio.Group>*/}
                {/*        <Radio.Button value="host">Host</Radio.Button>*/}
                {/*        <Radio.Button value="regular">Musician</Radio.Button>*/}
                {/*    </Radio.Group>*/}
                {/*</Form.Item>*/}
            </Form>
            <div className={`pt-5 pb-20`}>
                <Button size={"large"}
                        type={"primary"}
                        onClick={handleOnOk}
                >
                    Create Account</Button>
            </div>
            <Divider orientation={"center"}>Already have an account?</Divider>
            <div className={`text-center`}>
                <Button size={"middle"}
                        type={"link"}
                        onClick={() => history.push(`\login`)}
                >
                    Sign in</Button>
            </div>
        </div>
    )
}