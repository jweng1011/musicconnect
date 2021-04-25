import {Button, Card, Tag} from "antd";
import {Event} from "../eventsReducer/event.interface"
import {Typography} from "antd";
import {TagsOutlined, TeamOutlined} from "@ant-design/icons";
import {useState} from "react";
import {ApplyEventModal} from "../../applications/applyEventModal/ApplyEventModal";
import {ApplicantsModal} from "../../applications/applicantsModal/ApplicantsModal";

const {Title} = Typography;

interface Props {
    onClick: () => void;
    event: Event
}

export function HostEventListingCard({onClick, event}: Props) {
    const {id, name, musicGenre, audienceSize, startDate, endDate, accessibility, description} = event;
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
            <div className={`border-b border-gray-200 py-5`} onClick={() => (console.log())}>
                <div className={`flex justify-between`}>
                    <div className={`space-y-4`}>
                        <div className={`space-y-1`}>
                            {/*<p className={`text-gray-600 font-bold m-0 pb-5`}>PAST EVENT</p>*/}
                            <p className={`text-gray-500 m-0`}>{startDate.format('MMMM D, yyyy') + " at " + startDate.format('h:mm A')}</p>
                            {/*<p>{endDate.format('MM/DD/YYYY HH:mm')}</p>*/}
                            <p className={`text-blue-600 hover:text-blue-400 text-base font-semibold`}>{name}</p>
                        </div>
                        <div className={`space-y-2`}>
                            <div className={`flex items-center space-x-2`}>
                                <TeamOutlined />
                                <p className={`text-gray-700 m-0`}>{audienceSize} people</p>
                            </div>
                            <div className={`flex items-center space-x-2`}>
                                <TagsOutlined />
                                <p className={`text-gray-700 m-0`}>{musicGenre ? musicGenre.map((x) => <Tag>{x}</Tag>) : null}</p>
                            </div>
                            <div>
                                {Object.values(accessSettings).map((x) => (
                                    <Tag color="green">{x}</Tag>
                                ))}
                            </div>
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