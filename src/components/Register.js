import { Col, Form, FormGroup, Input, Button } from 'reactstrap'
import Header from './Header'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


function Register() {
    const [fullname, setFullname] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [CompanyName, setCompanyName] = useState('');
    const navigate = useNavigate();

    const CreateUser = () => {
        fetch('https://api.binary-coders.in/user/create', {
            mode: 'no-cors',
            method: 'POST',
            body: JSON.stringify({
                name: fullname,
                mn: mobileNumber,
                mid: email,
                cname: CompanyName,
                lu: 0
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json()) // Convert the response to JSON
            .then(data => {
                console.log("data", data);
                Swal.fire({
                    icon: 'success',
                    title: 'User Creation Successfully!',
                }).then((result) => {
                    if (result.isConfirmed) {
                        setFullname('');
                        setEmail('');
                        setCompanyName('');
                        setMobileNumber('');
                        navigate('/set-password', { state: { userid: data.uid } }); // Access data.uid
                    }
                });
            })
            .catch(err => console.log(err));
    }



    return (
        <>
            <Header />
            <Col lg={4} className='mx-auto'>
                <div className='text-center mb-4 pb-2'>
                    <h2 className='register-cont'><span className='text-primary'>You'll never worry</span> <br /> about money again</h2>
                </div>
                <Form className='form register-form'>
                    <FormGroup className='mb-4'>
                        <Input type='text' value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder='Full Name' />
                    </FormGroup>
                    <FormGroup className='mb-4 mobile-number-field'>
                        <Input type='text' placeholder='+91' />
                        <Input type='text' value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder='Mobile Number' />
                    </FormGroup>
                    <FormGroup className='mb-4'>
                        <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Official Email ID' />
                    </FormGroup>
                    <FormGroup className='mb-4'>
                        <Input type='text' value={CompanyName} onChange={(e) => setCompanyName(e.target.value)} placeholder='Company Name' />
                    </FormGroup>
                    <div className='remember-me mb-5'>
                        <label><input type='checkbox' /> I agree to  <a href='#' className='btn text-primary p-0 ps-1'> terms & conditions</a></label>
                        <label className='ms-auto'><input type='checkbox' />Inform me about latest news and tips</label>
                    </div>
                    <div className='text-center'>
                        <Link className='btn btn-primary login-width' onClick={CreateUser}>Create Account</Link>
                    </div>
                </Form>
            </Col>
        </>
    )
}

export default Register