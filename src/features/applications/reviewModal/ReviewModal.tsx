import {Button, Modal, Rate} from "antd";
import TextArea from "antd/es/input/TextArea";

interface Props {
    onOk: () => void;
}
export function ReviewModal({onOk}: Props) {
    return (
        <Modal visible={true} onOk={onOk}>
            <div className={`space-y-4`}>
                <p className={`text-lg font-bold m-0`}>Review Jane Doe</p>
                <Rate />
                <div className={`flex justify-between`}>
                    <Button>
                        Good Communication
                    </Button>
                    <Button>
                        Punctual
                    </Button>
                    <Button>
                        Accurate
                    </Button>
                    <Button>
                        High Value
                    </Button>
                    {/*<Button>*/}
                    {/*    Good Location*/}
                    {/*</Button>*/}
                    {/*<Button>*/}
                    {/*    Clean Location*/}
                    {/*</Button>*/}
                </div>
                <TextArea placeholder="Enter your review description" />
            </div>
        </Modal>
    )
}