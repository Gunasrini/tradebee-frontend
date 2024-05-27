import otpValidation from '../assets/images/otp-validation.png'

export default function OTPValidationModal() {
    return (
        <div className="modal modal-lg" id="otpValidationModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <img src={otpValidation} />
                </div>
            </div>
        </div>
    )
}