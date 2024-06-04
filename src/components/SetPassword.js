import { Col, Form, FormGroup, Input, Button } from 'reactstrap';
import Header from './Header';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';

function SetPassword() {
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);

    const location=useLocation();
    const user_id=location.state?.userid;
    console.log("user id:", user_id);
    const navigate=useNavigate();


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleRepeatPasswordVisibility = () => {
        setShowRepeatPassword(!showRepeatPassword);
    };
    const setPasswordOnClick = async () => {
        if (password !== repeatPassword) {
            setError("Passwords don't match");
            return;
        }
        // const uid = 7;
        const setPasswordUrl = `https://api.binary-coders.in/user/setPassword/${user_id}`; // Replace with your actual API endpoint
        try {
            const response = await fetch(setPasswordUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    password: password,
                    reenterPassword:repeatPassword
                }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Password set successfully:', data);
                // Redirect or show success message
                Swal.fire({
                    icon: 'success',
                    title: 'Password Saved Successfuliy!',
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/');
                    }
                });
            } else {
                setError('Failed to set password');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <>
            <Header />
            <Col lg={4} className='mx-auto mt-5'>
                <div className='text-center mb-4 pb-2'>
                    <h2 className='register-cont'>Set Password</h2>
                </div>
                <Form className='form login-form'>
                    <FormGroup className='mb-4 input-field-with-icon'>
                    <span className='input-icon curserpoint' onClick={togglePasswordVisibility}>
                    {showPassword ? <i className="far fa-eye"></i> : <i className="far fa-eye-slash"></i>}
                </span>                        
                <Input type={showPassword?'text':'password'} placeholder='Set Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                    </FormGroup>
                    <FormGroup className='mb-4 input-field-with-icon'>
                    <span className='input-icon curserpoint' onClick={toggleRepeatPasswordVisibility}>
                    {showRepeatPassword ? <i className="far fa-eye"></i> : <i className="far fa-eye-slash"></i>}
                </span>                        
                <Input type={showRepeatPassword?'text':'password'} placeholder='Repeat Password' value={repeatPassword} onChange={(e)=>setRepeatPassword(e.target.value)} />
                    </FormGroup>
                    {error && <div className="text-danger mb-3">{error}</div>}
                    <div className='text-center mt-5'>
                        <Button onClick={setPasswordOnClick} color='primary login-width'>Set Password</Button>
                    </div>
                </Form>
            </Col>
        </>
    )
}

export default SetPassword;
