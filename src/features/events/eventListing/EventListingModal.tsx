import {Button, Modal, Tag, Typography} from "antd";
import {Event} from "../eventsReducer/event.interface";
import {useDispatch, useSelector} from "react-redux";
import {selectEvent} from "../eventsReducer/event.selector";
import {NavBar} from "../../../ui-components/navBar/NavBar";
import React from "react";
import {useHistory} from "react-router-dom";

const {Title} = Typography;

interface MatchProps {
    match: any;
}

export function EventListingModal({match}: MatchProps) {
    const {id} = match.params;
    console.log("id:", id);
    const event = useSelector(selectEvent(id));
    console.log("event is:", event);

    const history = useHistory();

    if (!event) {
        return <Title>Event not found!</Title>
    }

    const {eventName, eventDescription, musicGenre, audienceSize, startDate, endDate, accessibility} = event;

    let accessSettings: string[] = [];
    if (accessibility) {
        accessSettings = accessibility.map((x) => x);
    }

    return (
        <>
            <NavBar/>
            <Modal visible={true}
                   onCancel={() => history.push(`/`)}
                   footer={[
                       <Button key="back">
                           Close
                       </Button>,
                       <Button key="submit" type="primary">
                           Apply
                       </Button>,
                   ]}
            >
                <div className={`space-y-3`}>
                    <p className={`text-gray-600 m-0`}>{startDate.format('MMMM D, yyyy') + " at " + startDate.format('h:mm A')}</p>
                    {/*<p>{endDate.format('MM/DD/YYYY HH:mm')}</p>*/}
                    <p className={`text-lg font-bold m-0`}>{eventName}</p>
                    <p className={`m-0`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className={`space-y-2`}>
                        <p className={`text-gray-700 m-0`}>Genre(s): {musicGenre ? musicGenre.map((x) =>
                            <Tag>{x}</Tag>) : null}</p>
                        <p>Audience Size: {audienceSize}</p>
                        {Object.values(accessSettings).map((x) => (
                            <Tag color="purple">{x}</Tag>
                        ))}
                    </div>
                </div>
            </Modal>
        </>

    )
    //
    //
    // let accessSettings: string[] = [];
    // if (accessibility) {
    //     accessSettings = accessibility.map((x) => x);
    // }
    //
    // return (
    //     <>
    //         <Title level={4}>{eventName}</Title>
    //         <p>{eventDescription}</p>
    //         <p>{musicGenre}</p>
    //         <p>Audience Size: {audienceSize}</p>
    //         <p>Date: {startDate} - {endDate}</p>
    //         {Object.values(accessSettings).map((x) => (
    //             <Tag>{x}</Tag>
    //         ))}
    // //     </>
    // // )
}