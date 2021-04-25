import {Button, Checkbox, Form} from "antd";
import {useState} from "react";
import {User, UserType} from "../../features/users/usersReducer/user.interface";
import {AccessibilityTypes} from "../../features/events/eventsReducer/event.interface";
import Title from "antd/es/typography/Title";

interface Props {
    user: User;
    onFinish: (user: User) => void;
    onBack: () => void;
    onNext: () => void;
}

export function CreateProfileForm({user, onFinish, onBack, onNext}: Props) {
    const [requiredMark, setRequiredMarkType] = useState<boolean>();
    const onRequiredTypeChange = (requiredMark: boolean) => {
        setRequiredMarkType(requiredMark);
    }

    const [accessibility, setAccessibility] = useState<string[]>([]);
    const accessibilityOptions = Object.keys(AccessibilityTypes).map(key => {
        return key;
    })

    const HostForm =
        <Form layout="vertical"
              requiredMark={requiredMark}
              onValuesChange={onRequiredTypeChange}
              initialValues={{requiredMark}}>
            <Form.Item label="What accessibility accomodations do you offer?"
                       name="accessibility">
                <Checkbox.Group value={accessibility} options={accessibilityOptions}
                                onChange={(checkedValues) => {
                                    setAccessibility(Object.values(checkedValues).map((x) => x.toString()));
                                }}
                />
            </Form.Item>
        </Form>;

    const MusicianForm =
        <Form layout="vertical"
                               requiredMark={requiredMark}
                               onValuesChange={onRequiredTypeChange}
                               initialValues={{requiredMark}}>
        <Form.Item label="Music Genre(s)"
                   name="accessibility">
            <Checkbox.Group value={accessibility} options={accessibilityOptions}
                            onChange={(checkedValues) => {
                                setAccessibility(Object.values(checkedValues).map((x) => x.toString()));
                            }}
            />
        </Form.Item>
    </Form>;

    const handleOnNext = () => {
        onFinish({...user, accessibility: accessibility})
        onNext();
    }
    return (
        <div className={`space-y-10`}>
            <Title>Make your profile</Title>
            <div>
                <p className={`pb-2`}>Please fill out the following information.</p>
                {user.userType === UserType.Musician ? MusicianForm : HostForm}
            </div>
            <div className={`space-x-3`}>
                <Button type="ghost" size="large" onClick={onBack}>
                    Back
                </Button>
                <Button type="primary" size="large"  onClick={handleOnNext}>
                    Next
                </Button>
            </div>
        </div>
    )
}