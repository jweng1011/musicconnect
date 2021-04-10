import {useSelector} from "react-redux";
import {Button, Tag} from "antd";
import {selectApplication} from "../applicationsReducer/application.selector";
import {selectCurrUserId, selectUser} from "../../users/usersReducer/user.selector";
import {Status} from "../applicationsReducer/application.interface";

interface Props {
    appId: number;
    onStatusChangeRequest: (newStatus: Status, appId: number) => void;
}

export function ApplicantContent({appId, onStatusChangeRequest}: Props) {
    const application = useSelector(selectApplication(appId));
    const currUserId = useSelector(selectCurrUserId);
    const user = useSelector(selectUser(currUserId));

    function StatusTag() {
        switch (application.status) {
            case Status.pending:
                return <Tag color="default">Pending</Tag>
            case Status.accepted:
                return <Tag color="success">Accepted</Tag>
            case Status.rejected:
                return <Tag color="error">Rejected</Tag>
        }
    }

    const handleStatusChangeRequest = (newStatus: Status) => () => {
        onStatusChangeRequest(newStatus, appId);
    }

    return (
        <div className={`border border-gray-200 rounded-md p-5`} onClick={() => (console.log())}>
            <div className={`flex justify-between`}>
                <div>
                    <p>{user.firstName} {user.lastName}</p>
                    <p>{user.email}</p>
                    <p>{application.performName}</p>
                    <p>{application.performDescription}</p>
                </div>
                <div className={`flex flex-col justify-between text-right space-y-3`}>
                    <div>
                        <StatusTag />
                    </div>
                    <div className={`flex space-x-3`}>
                        {application.status === Status.pending ? <>
                            <Button onClick={handleStatusChangeRequest(Status.accepted)}>Accept</Button>
                            <Button onClick={handleStatusChangeRequest(Status.rejected)}>Reject</Button>
                        </> : null }

                    </div>
                    {/*{reviewSubmitted ? <Tag color="success">Review Submitted</Tag> :*/}
                    {/*    <Button onClick={() => {*/}
                    {/*        setReviewModalVisible(true)*/}
                    {/*        setReviewSubmitted(true)*/}
                    {/*    }}>Submit Review</Button>*/}
                    {/*}*/}
                </div>
            </div>
        </div>
    )
}