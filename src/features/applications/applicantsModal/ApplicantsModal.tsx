import {Button, Form, Input, Modal, Select, Tag} from "antd";
import {useState} from "react";
import TextArea from "antd/es/input/TextArea";
import {Application} from "../applicationsReducer/application.interface";
import {useDispatch, useSelector} from "react-redux";
import {addApplication} from "../applicationsReducer/application.actions";
import {selectUser} from "../../users/usersReducer/user.selector";
import {selectEvent} from "../../events/eventsReducer/event.selector";
import {useHistory} from "react-router-dom";
import {Event} from "../../events/eventsReducer/event.interface"
import {ApplicantConfirmation} from "../applicantConfirmation/ApplicantConfirmation";
import {CheckCircleOutlined} from '@ant-design/icons';
import {ReviewModal} from "../reviewModal/ReviewModal";

interface Props {
    onCancel: () => void;
    event: Event;
}

export function ApplicantsModal({event, onCancel} : Props) {
    const [request, setRequest] = useState<boolean>(false);
    const [confirmVisible, setConfirmVisible] = useState<boolean>(false);
    const [reviewModalVisible, setReviewModalVisible] = useState(false);
    const [reviewSubmitted, setReviewSubmitted] = useState(false);

    const ApplicantConfirm = () => (
        <p>Are you sure you want to {request ? "accept" : "reject"} this applicant?</p>
    )

    const handleAccept = () => {
        setRequest(true)
        setConfirmVisible(true)
    }

    const handleReject = () => {
        setRequest(false)
        setConfirmVisible(true)
    }

    const handleOnCancel = () => {
        if (confirmVisible) {
            setConfirmVisible(false);
        } else {
            onCancel();
        }
    }
    return (
        <Modal visible={true} onCancel={handleOnCancel} onOk={onCancel}>
            {/*{confirmVisible ? <p>Are you sure you want to {request ? "accept" : "reject"} this applicant?</p> :*/}
            {reviewModalVisible ? <ReviewModal onOk={() => setReviewModalVisible(false)} /> :
                <>
                    <p className={`text-lg font-bold`}>Applicants for {event.eventName}</p>
                    <div className={`hover:shadow-lg border-2 border-gray-200 rounded-md p-5`} onClick={() => (console.log())}>
                        <div className={`flex justify-between`}>
                            <div>
                                <p>Jane Doe</p>
                                <p>jane.doe@tufts.edu</p>
                                <p>Performance Name</p>
                                <p>Performance Description</p>
                            </div>
                            <div className={`flex flex-col space-y-3`}>
                                {/*<Button onClick={handleAccept}>Accept</Button>*/}
                                {/*<Button onClick={handleReject}>Reject</Button>*/}
                                <div>
                                    <Tag color="success">
                                        Accepted</Tag>
                                </div>
                                {reviewSubmitted ? <Tag color="success">Review Submitted</Tag> :
                                    <Button onClick={() => {
                                        setReviewModalVisible(true)
                                        setReviewSubmitted(true)
                                    }}>Submit Review</Button>
                                }
                            </div>
                        </div>
                    </div>
                </>
            }
        </Modal>
    )
}