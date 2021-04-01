import {Input, Modal, Typography, Form, DatePicker, Slider, Button, Checkbox, Select} from "antd";
import {useState} from "react";
import moment from "moment";
import {AccessibilityTypes, EventType, MusicGenreType} from "../eventsReducer/event.interface";
import {useDispatch, useSelector} from "react-redux";
import {Event} from "../eventsReducer/event.interface"
import {addEvent} from "../eventsReducer/event.actions";
import {RangeValue} from "rc-picker/lib/interface";
import {addEventToUser} from "../../users/usersReducer/user.actions";

const {Title} = Typography;
const {TextArea} = Input;
const {RangePicker} = DatePicker;
const {Option} = Select;

interface Props {
    onCancel: () => void;
}

let idGenerator = 0;

//visible state
export function CreateEventModal({onCancel}: Props) {
    const [eventName, setEventName] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [location, setLocation] = useState("");

    // what if time is unknown, or tbd?
    const [startDate, setStartDate] = useState<moment.Moment | null>(moment());
    const [endDate, setEndDate] = useState<moment.Moment | null>(moment());

    // whats the difference between event space and audience size?
    const [audienceSize, setAudienceSize] = useState<number>(1);
    const [accessibility, setAccessibility] = useState<string[]>([]);

    const [musicGenre, setMusicGenre] = useState<string[]>([]);

    const [requiredMark, setRequiredMarkType] = useState<boolean>();
    const onRequiredTypeChange = (requiredMark: boolean) => {
        setRequiredMarkType(requiredMark);
    }

    const dispatch = useDispatch();

    const onAudienceChange = (value: any) => {
        setAudienceSize(value);
    }

    const appIds: string[] = [];
    const handleOnOk = () => {
        // add error checking
        if (startDate === null || endDate === null) {
            throw new Error(
                "Didn't disable ok button when either `start` or `end` is null!"
            )
        }
        let newId = idGenerator++;
        const newEvent: Event = {
            id: newId.toString(),
            appIds,
            eventName,
            eventDescription,
            location,
            startDate,
            endDate,
            musicGenre,
            audienceSize,
            accessibility,
        };
        dispatch(addEvent(newEvent));
        dispatch(addEventToUser(newId.toString()));
        onCancel();
    }

    const accessibilityOptions = Object.keys(AccessibilityTypes).map(key => {
        return key;
    })

    return (
        <Modal visible={true} onCancel={onCancel} onOk={handleOnOk}>
            <Title level={3}>Create An Event</Title>
            <Form layout="vertical"
                  requiredMark={requiredMark}
                  onValuesChange={onRequiredTypeChange}
                  initialValues={{requiredMark}}
            >
                <Form.Item label="Event Name"
                           name="eventName"
                           rules={[{
                               required: true,
                               message: "Please enter an event name",
                           }]}
                >
                    <Input placeholder="Enter event name" onChange={(e) => {
                        setEventName(e.target.value)
                    }}/>
                </Form.Item>
                <Form.Item label="Event Description"
                           name="eventDescription"
                           rules={[{
                               required: true,
                               message: "Please enter an event description",
                           }]}
                >
                    <TextArea placeholder="Enter event description" onChange={(e) => {
                        setEventDescription(e.target.value)
                    }}/>
                </Form.Item>
                <Form.Item label="Location"
                           name="location"
                           rules={[{
                               required: true,
                               message: "Please enter the event location",
                           }]}
                >
                    <Input placeholder="Enter event location" onChange={(e) => {
                        setLocation(e.target.value)
                    }}/>
                </Form.Item>
                <Form.Item label="Date & Time"
                           name="date"
                           rules={[{
                               required: true,
                               message: "Please enter the event's date",
                           }]}
                >
                    <RangePicker showTime onChange={(dateRange: RangeValue<moment.Moment>) => {
                        if (dateRange === null) {
                            return;
                        }
                        setStartDate(dateRange[0]);
                        setEndDate(dateRange[1])
                    }}/>
                </Form.Item>
                <Form.Item label="Audience Size"
                           name="audienceSize"
                           rules={[{
                               required: true,
                               message: "Please enter an estimated audience size",
                           }]}
                >
                    <Slider defaultValue={audienceSize} max={500} min={1} onAfterChange={onAudienceChange}/>
                </Form.Item>
                <Form.Item label="Music Genre(s)"
                           name="musicGenre"
                           rules={[{
                               required: true,
                               message: "Please enter preferred music genres",
                           }]}
                >
                    <Select mode="multiple" value={musicGenre}
                            onChange={
                                (value, options) => {
                                    setMusicGenre(value);
                                }}>
                        {Object.keys(MusicGenreType).map(key => (<Option value={key}>{key}</Option>))}
                    </Select>
                </Form.Item>
                <Form.Item label="Accessibility"
                           name="accessibility">
                    <Checkbox.Group value={accessibility} options={accessibilityOptions}
                        onChange={(checkedValue) => {
                            console.log(Object.values(checkedValue).map((x) => x.toString()))
                            setAccessibility(Object.values(checkedValue).map((x) => x.toString()));
                        }}
                    />
                </Form.Item>
            </Form>
        </Modal>
    )
}