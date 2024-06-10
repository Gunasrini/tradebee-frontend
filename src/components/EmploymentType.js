import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function EmploymentType() {
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isContinueEnabled, setIsContinueEnabled] = useState(false);

    const handleCheck1Change = () => {
        setIsChecked1(!isChecked1);
        setIsChecked2(false);
        setIsContinueEnabled(!isChecked1);
    };

    const handleCheck2Change = () => {
        setIsChecked2(!isChecked2);
        setIsChecked1(false);
        setIsContinueEnabled(!isChecked2);
    };

    return (
        <>
            <Header />
            <div className='text-center mb-4 pb-2'>
                <h2 className='register-cont'>Choose Employment Type</h2>
            </div>
            <div className='basic-info-wrap'>
                <div className='emptype col-6 mb-5' style={{ borderColor: isChecked1 ? "#3276E8" : "#BBBBBB" }}>
                    <div className="left-text">
                        <h6>Self-Employed Business</h6>
                        <p>Run a Business</p>
                    </div>
                    <label className="checkbox-wrap right-checkbox">
                        <input className='checkBox' type="checkbox" checked={isChecked1} onChange={handleCheck1Change} />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className='emptype col-6' style={{ borderColor: isChecked2 ? "#3276E8" : "#BBBBBB" }}>
                    <div className="left-text">
                        <h6>Self-Employed Professional</h6>
                        <p>Pursue a Profession (e.g., Doctor, C.A., Lawyer, etc)</p>
                    </div>
                    <label className="checkbox-wrap right-checkbox">
                        <input className='checkBox' type="checkbox" checked={isChecked2} onChange={handleCheck2Change} />
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
            <div className='text-center mt-5'>
                {isContinueEnabled ? (
                    <Link to="/loan-amount" className='btn btn-primary login-width'>Continue</Link>
                ) : (
                    <button className='btn btn-primary login-width' disabled>Continue</button>
                )}            </div>
        </>
    );
}

export default EmploymentType;
