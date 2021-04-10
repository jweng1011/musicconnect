import {Button, Form, Input, Modal, Select, Tag} from "antd";
import {useState} from "react";
import TextArea from "antd/es/input/TextArea";
import {Application, Status} from "../applicationsReducer/application.interface";
import {useDispatch, useSelector} from "react-redux";
import {addApplication, changeAppStatus} from "../applicationsReducer/application.actions";
import {selectUser} from "../../users/usersReducer/user.selector";
import {selectEvent} from "../../events/eventsReducer/event.selector";
import {useHistory} from "react-router-dom";
import {Event} from "../../events/eventsReducer/event.interface"
import {ApplicantConfirmation} from "../applicantConfirmation/ApplicantConfirmation";
import {CheckCircleOutlined} from '@ant-design/icons';
import {ReviewModal} from "../reviewModal/ReviewModal";
import {ApplicantContent} from "../applicantContent/ApplicantContent";

interface Props {
    onCancel: () => void;
    event: Event;
}

export function ApplicantsModal({event, onCancel} : Props) {
    const [statusChange, setStatusChange] = useState<boolean>(false);
    const [confirmVisible, setConfirmVisible] = useState<boolean>(false);
    const [currAppId, setCurrAppId] = useState<number>(0);

    const dispatch = useDispatch();

    const handleOnSubmitStatusChange = () => {
        if (statusChange) {
            dispatch(changeAppStatus(Status.accepted, currAppId))
        } else {
            dispatch(changeAppStatus(Status.rejected, currAppId))
        }
        setConfirmVisible(false);
    }

    const handleOnStatusChangeRequest = (newStatus: Status, appId: number) => {
        if (newStatus === Status.accepted) {
            setStatusChange(true);
        } else {
            setStatusChange(false);
        }
        setConfirmVisible(true);
        setCurrAppId(appId);
    }

    const handleOnCancel = () => {
        if (confirmVisible) {
            setConfirmVisible(false);
        } else {
            onCancel();
        }
    }

    const ApplicantConfirm = (
        <Modal visible={true}
               onCancel={() => setConfirmVisible(false)}
               onOk={handleOnSubmitStatusChange}
        >Are you sure you want to {statusChange ? "accept" : "reject"} this applicant?</Modal>
    )

    const appIds = event.appIds;

    return (
        <>
            {confirmVisible ? ApplicantConfirm : null }
            <Modal visible={true} onCancel={handleOnCancel} onOk={onCancel}>
                <div className={`space-y-5`}>
                    <p className={`text-lg font-bold`}>Applicants for {event.name}</p>
                    {appIds.map((value) => (
                        <ApplicantContent appId={value} onStatusChangeRequest={handleOnStatusChangeRequest}/>
                    ))}
                </div>
            </Modal>
        </>
    )
}