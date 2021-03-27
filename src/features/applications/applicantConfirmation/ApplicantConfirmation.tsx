
interface Props {
    request: boolean;
}
export function ApplicantConfirmation({request} : Props) {
    return (
        <div>
            <p>Are you sure you want to {request ? "accept" : "reject"} this applicant?</p>
        </div>
    )
}