import {Button, Modal, Tag, Typography} from "antd";
import {Event} from "../eventsReducer/event.interface";
import {useDispatch, useSelector} from "react-redux";
import {selectEvent} from "../eventsReducer/event.selector";
import {NavBar} from "../../../ui-components/navBar/NavBar";
import React, {useState} from "react";
import {useHistory, useParams} from "react-router-dom";

const {Title} = Typography;

interface Props {
    eventId: string;
    closeModal: () => void;
    showApplyModal: () => void;
}

export function EventListingModal({eventId, closeModal, showApplyModal} : Props) {
    const event = useSelector(selectEvent(eventId));

    if (!event) {
        return <Title>Event not found!</Title>
    }

    const {eventName, eventDescription, musicGenre, audienceSize, startDate, endDate, accessibility} = event;

    let accessSettings: string[] = [];
    if (accessibility) {
        accessSettings = accessibility.map((x) => x);
    }

    return (
            <Modal visible={true}
                   onOk={closeModal}
                   onCancel={closeModal}
                   footer={[
                       <Button key="cancel" onClick={closeModal}>
                           Close
                       </Button>,
                       <Button key="submit" type="primary" onClick={showApplyModal}>
                           Apply
                       </Button>,
                   ]}
            >
                <div className={`space-y-3`}>
                    <p className={`text-gray-600 m-0`}>{startDate.format('MMMM D, yyyy') + " at " + startDate.format('h:mm A')}</p>
                    {/*<p>{endDate.format('MM/DD/YYYY HH:mm')}</p>*/}
                    <p className={`text-lg font-bold m-0`}>{eventName}</p>
                    <p className={`m-0`}>{eventDescription}</p>
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
    )
}