import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function DesiredLoanAmount() {
    const [loanAmount, setLoanAmount] = useState('');
    const handleInputChange = (event) => {
        setLoanAmount(`${event.target.value}`);
    };
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
                    <Link to='/annual-turnover' className='btn btn-primary login-width'>Continue</Link>
                ) : (
                    <button className='btn btn-primary login-width' disabled>Continue</button>
                )}            </div>
        </>
    );
}

export default DesiredLoanAmount;
