import {Application, Status} from "../applicationsReducer/application.interface";
import {useSelector} from "react-redux";
import {selectEvent} from "../../events/eventsReducer/event.selector";
import {Tag} from "antd";

interface Props {
    application: Application,
    onViewApplication: () => void,
}

export function ApplicationCard({application, onViewApplication}: Props) {
    const event = useSelector(selectEvent(application.eventId));
    const { dateApplied, status } = application;

    function StatusTag() {
        switch (status) {
            case Status.pending:
                return <Tag color="default">Pending</Tag>
            case Status.accepted:
                return <Tag color="success">Accepted</Tag>
            case Status.rejected:
                return <Tag color="error">Rejected</Tag>
        }
    }

    const formattedDate: string = dateApplied.format('MMMM D, yyyy') + " at " + dateApplied.format('h:mm A')

    return (
        <div className={`hover:shadow-lg border border-gray-200 rounded-md p-5 mb-5`}>
            <div className={`flex justify-between`}>
                <div className={`space-y-4`}>
                    <div className={`space-y-1`}>
                        <p className={`text-gray-400 m-0`}>Applied {formattedDate}</p>
                        <p className={`text-gray-900 hover:text-blue-500 text-lg font-semibold`}>{event.name}</p>
                    </div>
                    <div>
                        <a onClick={onViewApplication}>View Application</a>
                    </div>
                </div>
                <div>
                    <StatusTag />
                </div>
            </div>
        </div>
    )
}