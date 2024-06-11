import { useState } from 'react';
import { Link, UNSAFE_LocationContext } from 'react-router-dom';
import Header from './Header';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function DesiredLoanAmount() {
    const [loanAmount, setLoanAmount] = useState('');
    const location=useLocation();
    const navigate=useNavigate();

    const emp_type=location.state?.emptype;
    const handleInputChange = (event) => {
        setLoanAmount(`${event.target.value}`);

    };

    const goAnnualTurnover=(e)=>{
        e.preventDefault();
        navigate('/annual-turnover',{state:{locan_amount:loanAmount,emp_type:location.state?.emptype}});
    }
    return (
        <>
            <Header />
            <div className='text-center mb-4 mt-5 pb-2'>
                <h2 className='register-cont'>Desired Loan Amount</h2>
            </div>
            {/* <div className='emptype col-6 mb-5'>
               
            </div> */}

            <div className='basic-info-wrap'>
                <input type='number' className='emptype col-6 mb-3 loan-amnt-txt'
                    value={loanAmount}
                    onChange={handleInputChange}
                    placeholder='Desired loan amount(In Rupees)' />
            </div>

            <div className='text-center mt-5'>
                {loanAmount !== '' ? (
                    <Link onClick={goAnnualTurnover} className='btn btn-primary login-width'>Continue</Link>
                ) : (
                    <button className='btn btn-primary login-width' disabled>Continue</button>
                )}            </div>
        </>
    );
}

export default DesiredLoanAmount;