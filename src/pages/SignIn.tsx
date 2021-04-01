import Title from "antd/es/typography/Title";
import {Button, Divider, Form, Input} from "antd";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginUser} from "../features/users/usersReducer/user.actions";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [requiredMark, setRequiredMarkType] = useState<boolean>();
    const onRequiredTypeChange = (requiredMark: boolean) => {
        setRequiredMarkType(requiredMark);
    }

    const history = useHistory();
    const dispatch = useDispatch();

    const handleOnSignIn = () => {
        dispatch(loginUser(email));
        history.push(`/events`);
    }

    const handleOnRegister = () => {
        history.push(`register`);
    }

    return (
        <div className={`max-w-sm m-auto py-28`}>
            <Title>Sign in</Title>
            <p className={`pb-10`}>Welcome back! Sign in with your email address to continue.</p>
            <Form layout="vertical"
                  requiredMark={requiredMark}
                  onValuesChange={onRequiredTypeChange}
                  initialValues={{requiredMark}}
            >
                <Form.Item label="Email Address"
                           rules={[{
                               required: true,
                               message: "Please enter your email",
                           }]}
                           name="email">
                    <Input placeholder="Email address"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label="Password"
                           rules={[{
                               required: true,
                               message: "Please enter your password",
                           }]}
                           name="password">
                    <Input.Password placeholder="Password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)} />
                </Form.Item>
            </Form>
            <div className={`pt-5 pb-20`}>
                <Button size={"large"}
                        type={"primary"}
                        onClick={handleOnSignIn}
                >
                    Sign in</Button>
            </div>
            <Divider orientation={"center"}>Don't have an account yet?</Divider>
            <div className={`text-center`}>
                {/*<Title level={5}>Don't have an account yet?</Title>*/}
                <Button size={"middle"}
                        type={"link"}
                        onClick={handleOnRegister}
                >
                    Register here!</Button>
            </div>
        </div>
    )
}