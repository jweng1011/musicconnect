import {Button, Form, Input} from "antd";
import {useState} from "react";
import Title from "antd/es/typography/Title";
import {User} from "../usersReducer/user.interface";
import {useDispatch} from "react-redux";
import {addUser} from "../usersReducer/user.actions";
import {useHistory} from "react-router-dom";

let idGenerator = 0;
export function RegisterUser() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const [requiredMark, setRequiredMarkType] = useState<boolean>();
    const onRequiredTypeChange = (requiredMark: boolean) => {
        setRequiredMarkType(requiredMark);
    }

    const appIds: string[] = [];
    const eventIds: string[] = [];
    const dispatch = useDispatch();



    const handleOnOk = () => {
        let id = 1;
        let newUser: User = {
            firstName,
            lastName,
            email,
            appIds,
            eventIds,
            id: id.toString(),
        }
        dispatch(addUser(newUser));
        // history.push(`/${id}`)
        history.push(`/`)
        console.log(id);
    }

    const history = useHistory();

    return (
        <div className={`max-w-sm m-auto py-28`}>
            <Title>Sign up</Title>
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
            </Form>
            <div className={`pt-5`}>
                <Button size={"large"}
                        type={"primary"}
                        onClick={handleOnOk}
                >
                    Create Account</Button>
            </div>
        </div>
    )
}