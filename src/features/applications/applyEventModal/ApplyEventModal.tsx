import {Form, Input, Modal, Select} from "antd";
import {useState} from "react";
import TextArea from "antd/es/input/TextArea";
import {Application} from "../applicationsReducer/application.interface";
import {useDispatch, useSelector} from "react-redux";
import {addApplication} from "../applicationsReducer/application.actions";
import {selectUser} from "../../users/usersReducer/user.selector";
import {selectEvent} from "../../events/eventsReducer/event.selector";
import {useHistory} from "react-router-dom";

let idGenerator = 0;

// interface MatchProps {
//     match: any;
// }

interface Props {
    userId: string;
    eventId: string;
    onCancel: () => void;
}

export function ApplyEventModal({userId, eventId, onCancel} : Props) {
    const [performName, setPerformName] = useState("");
    const [performDescription, setPerformDescription] = useState("");

    const dispatch = useDispatch();

    const handleOnOk = () => {
        const id = idGenerator++;
        let newApplication: Application = {
            id: id.toString(),
            performName: performName,
            performDescription: performDescription
        }
        dispatch(addApplication(newApplication));
        onCancel()
    }

    const user = useSelector(selectUser(userId));
    const event = useSelector(selectEvent(eventId));
    console.log("user:", user)

    const history = useHistory();
    return (
        <Modal visible={true} onCancel={onCancel} onOk={handleOnOk}>
            <p className={`text-lg font-bold`}>Apply for {event.eventName}</p>
            <div className={`py-5 space-y-1`}>
                <p className={`m-0`}>Name: <b>{user.firstName} {user.lastName} </b></p>
                <p  className={`m-0`}>Email Address: <b>{user.email}</b></p>
            </div>
            <Form layout="vertical">
                <Form.Item label="Performance Name" name="performName">
                    <Input placeholder="Enter the name of your performance"
                           value={performName}
                           onChange={(e) => setPerformName(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label={"Performance Description"}>
                    <TextArea placeholder="Enter performance description"
                              value={performDescription}
                              onChange={(e) => setPerformDescription(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    {/*<Select>*/}
                    {/*    */}
                    {/*</Select>*/}
                </Form.Item>
            </Form>
        </Modal>
    )
}