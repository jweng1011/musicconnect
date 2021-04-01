import {Button, Card, Tag} from "antd";
import {Event} from "../eventsReducer/event.interface"
import {Typography} from "antd";
import {useState} from "react";
import {ApplyEventModal} from "../../applications/applyEventModal/ApplyEventModal";
import {ApplicantsModal} from "../../applications/applicantsModal/ApplicantsModal";

const {Title} = Typography;

interface Props {
    onClick: () => void;
    event: Event
}
export function ListingCard({onClick, event}: Props) {
    const {id, eventName, musicGenre, audienceSize, startDate, endDate, accessibility} = event;
    const [ApplicantsModalVisibility, setApplicantsModalVisibility] = useState<boolean>(false);

    const applicantsModal = <ApplicantsModal onCancel={() => setApplicantsModalVisibility(false)}
                                        event={event} />

    if (musicGenre) {
        console.log(musicGenre.map((x) => x))
    }

    let accessSettings: string[] = [];
    if (accessibility) {
        accessSettings = accessibility.map((x) => x);
    }

    return (
        <>
            {ApplicantsModalVisibility ? applicantsModal : null}
            <div className={`hover:shadow-lg border-2 border-gray-200 rounded-md p-5`} onClick={() => (console.log())}>
                <div className={`flex justify-between`}>
                    <div className={`space-y-4`}>
                        <div className={`space-y-1`}>
                            {/*<p className={`text-gray-600 font-bold m-0 pb-5`}>PAST EVENT</p>*/}
                            <p className={`text-gray-600 m-0`}>{startDate.format('MMMM D, yyyy') + " at " + startDate.format('h:mm A')}</p>
                            {/*<p>{endDate.format('MM/DD/YYYY HH:mm')}</p>*/}
                            <p className={`text-lg font-bold`}>{eventName}</p>
                        </div>
                        <div className={`space-y-2`}>
                            <p className={`text-gray-700 m-0`}>Genre(s): {musicGenre ? musicGenre.map((x) => <Tag>{x}</Tag>) : null}</p>
                            <p className={`text-gray-700`}>Audience Size: {audienceSize}</p>
                            {Object.values(accessSettings).map((x) => (
                                <Tag color="purple">{x}</Tag>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Button type="link" onClick={() => setApplicantsModalVisibility(true)}>View Applicants</Button>
                    </div>
                </div>
            </div>
        </>
    )
}