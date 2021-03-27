import {Button, Card, Tag} from "antd";
import {Event} from "../eventsReducer/event.interface"
import {Typography} from "antd";
import {useState} from "react";
import {ApplyEventModal} from "../../applications/applyEventModal/ApplyEventModal";

const {Title} = Typography;

interface Props {
    onClick: () => void;
    event: Event
}
export function EventListingCard({onClick, event}: Props) {
    const {id, eventName, musicGenre, audienceSize, startDate, endDate, accessibility} = event;
    const [ApplyModalVisibility, setApplyModalVisibility] = useState<boolean>(false);

    const applyModal = <ApplyEventModal onCancel={() => setApplyModalVisibility(false)}
                                        userId={"1"}
                                        eventId={event.id}/>

    if (musicGenre) {
        console.log(musicGenre.map((x) => x))
    }

    let accessSettings: string[] = [];
    if (accessibility) {
        accessSettings = accessibility.map((x) => x);
    }

    return (
        <>
            {ApplyModalVisibility ? applyModal : null}
            <div className={`hover:shadow-lg border-2 border-gray-200 rounded-md p-5`} onClick={onClick}>
                <div className={`flex justify-between`}>
                    <div className={`space-y-4`}>
                        <div className={`space-y-1`}>
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
                        <Button type="link" onClick={() => setApplyModalVisibility(true)}>Apply</Button>
                    </div>
                </div>
            </div>
        </>
    )
}