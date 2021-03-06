import {Button, Modal, Tag, Typography} from "antd";
import {Event} from "../eventsReducer/event.interface";
import {useDispatch, useSelector} from "react-redux";
import {selectEvent} from "../eventsReducer/event.selector";
import {NavBar} from "../../../ui-components/navBar/NavBar";
import React, {useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {TagsOutlined, TeamOutlined} from "@ant-design/icons";

const {Title} = Typography;

interface Props {
    eventId: number;
    closeModal: () => void;
    onApply: () => void;
}

export function EventListingModal({eventId, closeModal, onApply} : Props) {
    const event = useSelector(selectEvent(eventId));

    if (!event) {
        return <Title>Event not found!</Title>
    }

    const {name, description, musicGenre, audienceSize, startDate, endDate, accessibility} = event;

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
                       <Button key="submit" type="primary" onClick={onApply}>
                           Apply
                       </Button>,
                   ]}
            >
                <div className={`space-y-5`}>
                    <p className={`text-gray-600 m-0`}>{startDate.format('MMMM D, yyyy') + " at " + startDate.format('h:mm A')}</p>
                    {/*<p>{endDate.format('MM/DD/YYYY HH:mm')}</p>*/}
                    <div>
                        <p className={`text-lg font-bold m-0`}>{name}</p>
                        <p className={`m-0`}>{description}</p>
                    </div>
                    <div className={`space-y-2`}>
                        <div className={`flex items-center space-x-2`}>
                            <TagsOutlined />
                            <p className={`text-gray-700 m-0`}>{musicGenre ? musicGenre.map((x) => <Tag>{x}</Tag>) : null}</p>
                        </div>
                        <div className={`flex items-center space-x-2`}>
                            <TeamOutlined />
                            <p className={`text-gray-700 m-0`}>{audienceSize} people</p>
                        </div>
                    </div>
                    <div className={`pt-2 space-y-2`}>
                        <p className={`m-0`}>Hosted by Dummy User</p>
                        {Object.values(accessSettings).map((x) => (
                            <Tag color="purple">{x}</Tag>
                        ))}
                    </div>
                </div>
            </Modal>
    )
}