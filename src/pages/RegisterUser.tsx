import {Button, Divider} from "antd";
import {useState} from "react";
import {User, UserType} from "../features/users/usersReducer/user.interface";
import {useDispatch} from "react-redux";
import {addUser, loginUser} from "../features/users/usersReducer/user.actions";
import {useHistory} from "react-router-dom";
import {SelectUserType} from "../ui-components/createAccountSteps/SelectUserType";
import {AccountInfoForm} from "../ui-components/createAccountSteps/AccountInfoForm";

let idGenerator = 1;
export function RegisterUser() {
    const initialUserState: User = {
        firstName: "",
        lastName: "",
        email: "",
        appIds: [],
        eventIds: [],
        password: "",
        id: idGenerator++,
        userType: UserType.Musician,
        accessibility: [],
    }
    const [newUser, setNewUser] = useState<User>(initialUserState);
    const [step, setStep] = useState(1);

    const [requiredMark, setRequiredMarkType] = useState<boolean>();
    const onRequiredTypeChange = (requiredMark: boolean) => {
        setRequiredMarkType(requiredMark);
    }

    const dispatch = useDispatch();

    const handleOnOk = () => {

    }

    const history = useHistory();

    const RenderStep = () => {
        switch (step) {
            case 1:
                return <SelectUserType user={newUser} onFinish={handleOnEdit} onNext={handleNext}/>
            case 2:
                return <AccountInfoForm user={newUser} onBack={handleBack} />
            // case 3:
            //     return <CreateProfileForm user={newUser} onFinish={handleOnEdit} onBack={handleBack} onNext={handleNext} />
            // case 3:
            //     return <ConfirmCreateUser user={newUser} />
            default:
            return <SelectUserType user={newUser} onFinish={handleOnEdit} onNext={handleNext}/>
        }
    }

    const handleBack = () => {
        setStep(step - 1);
    }

    const handleNext = () => {
        setStep(step + 1);
    }

    const handleOnEdit = (user: User) => {
        setNewUser(user);
    }

    return (
        <div className={`max-w-lg m-auto py-28 space-y-10`}>
            <div>
                <p className={`pb-2 m-0 font-bold text-blue-400`}>CREATE AN ACCOUNT</p>
                <RenderStep />
            </div>
            {step === 3 ? null : <div className={`pt-10`}>
                <Divider orientation={"center"}>Already have an account?</Divider>
                <div className={`text-center`}>
                    <Button size={"middle"}
                            type={"link"}
                            onClick={() => history.push(`\login`)}
                    >
                        Sign in</Button>
                </div>
            </div>}
        </div>
    )
}