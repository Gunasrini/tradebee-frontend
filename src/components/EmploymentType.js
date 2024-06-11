import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

function EmploymentType() {
    const [selectedEmpType, setSelectedEmpType] = useState('');
    const [empTypes, setEmpTypes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://api.binary-coders.in/user/loadEmployeeTypes')
            .then(res => res.json())
            .then(data => {
                setEmpTypes(data);
            });
    }, []);

    const handleCheckChange = (empType) => {
        setSelectedEmpType(empType);
    };

    const saveEmpType = (e) => {
        e.preventDefault();
        navigate("/loan-amount", { state: { emptype: selectedEmpType } });
    };

    return (
        <>
            <Header />
            <div className='text-center mb-4 pb-2'>
                <h2 className='register-cont'>Choose Employment Type</h2>
            </div>

            <div className='basic-info-wrap'>
                {empTypes.map((emp, index) => (
                    <div key={index} className='emptype col-6 mb-5'>
                        <div className="left-text">
                            <h6>{emp.emptype}</h6>
                            <p>{emp.emptypedesc}</p>
                        </div>
                        <label className='checkbox-wrap right-checkbox'>
                            <input
                                className='checkBox'
                                type="checkbox"
                                checked={selectedEmpType === emp.emptypeid}
                                onChange={() => handleCheckChange(emp.emptypeid)}
                            />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                ))}
            </div>

            <div className='text-center mt-5'>
                <button onClick={saveEmpType} className='btn btn-primary login-width' disabled={!selectedEmpType}>
                    Continue
                </button>
            </div>
        </>
    );
}

export default EmploymentType;