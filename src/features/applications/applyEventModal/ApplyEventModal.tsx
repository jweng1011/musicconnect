import {Form, Input, Modal, Select} from "antd";
import {useState} from "react";
import TextArea from "antd/es/input/TextArea";
import {Application, Status} from "../applicationsReducer/application.interface";
import {useDispatch, useSelector} from "react-redux";
import {addApplication} from "../applicationsReducer/application.actions";
import {selectCurrUserId, selectUser} from "../../users/usersReducer/user.selector";
import {selectEvent} from "../../events/eventsReducer/event.selector";
import {useHistory} from "react-router-dom";
import {addApplicationToEvent} from "../../events/eventsReducer/event.actions";

let idGenerator = 0;

interface Props {
    eventId: string;
    closeModal: () => void;
}

export function ApplyEventModal({eventId, closeModal} : Props) {
    const [performName, setPerformName] = useState("");
    const [performDescription, setPerformDescription] = useState("");

    const dispatch = useDispatch();

    const currUserId = useSelector(selectCurrUserId);
    const user = useSelector(selectUser(currUserId))
    const event = useSelector(selectEvent(eventId));

    const handleOnOk = () => {
        const id = idGenerator++;
        let newApplication: Application = {
            id: id.toString(),
            status: Status.pending,
            userId: currUserId,
            performName: performName,
            performDescription: performDescription
        }
        dispatch(addApplication(newApplication));
        dispatch(addApplicationToEvent(id.toString(), eventId));
        closeModal()
    }

    const history = useHistory();
    return (
        <Modal visible={true} onCancel={closeModal} onOk={handleOnOk}>
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