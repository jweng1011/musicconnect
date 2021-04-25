import {Button, Card, Tag} from "antd";
import {Event} from "../eventsReducer/event.interface"
import {Typography} from "antd";
import {TeamOutlined, TagsOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {useState} from "react";
import {ApplyEventModal} from "../../applications/applyEventModal/ApplyEventModal";

const {Title} = Typography;

interface Props {
    onClick: () => void;
    event: Event
    onApply: () => void;
}
export function EventListingCard({onClick, event, onApply}: Props) {
    const {id, name, musicGenre, audienceSize, startDate, endDate, accessibility} = event;

    if (musicGenre) {
        console.log(musicGenre.map((x) => x))
    }

    let accessSettings: string[] = [];
    if (accessibility) {
        accessSettings = accessibility.map((x) => x);
    }

    return (
        <>
            <div className={`border-b border-gray-200 py-5`}>
                <div className={`flex justify-between`}>
                    <div className={`space-y-4`}>
                        <div className={`space-y-1`}>
                            <p className={`text-gray-500 m-0`}>{startDate.format('MMMM D, yyyy') + " at " + startDate.format('h:mm A')}</p>
                            {/*<p>{endDate.format('MM/DD/YYYY HH:mm')}</p>*/}
                            <p onClick={onClick} className={`text-blue-600 hover:text-blue-400 text-base font-semibold`}>{name}</p>
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
                            <div className={`pt-2 space-y-2`}>
                                <p className={`m-0`}>Hosted by Dummy User</p>
                                {Object.values(accessSettings).map((x) => (
                                    <Tag color="purple">{x}</Tag>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <Button type="link" onClick={onApply}>Apply</Button>
                    </div>
                </div>
            </div>
        </>
    )
}