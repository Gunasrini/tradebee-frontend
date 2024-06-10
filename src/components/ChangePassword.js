import { Col, Form, FormGroup, Input, Button } from 'reactstrap'
import Header from './Header'
import eyeSlash from '../assets/images/icons/eye-slash.svg';

function ChangePassword() {
    return (
        <>  
        <Header/>
            <Col lg={4} className='mx-auto mt-5'>
                <div className='text-center mb-4 pb-2'>
                    <h2 className='register-cont'>Change Password</h2>
                </div>
                <Form className='form login-form'>
                    <FormGroup className='mb-4 input-field-with-icon'>
                        <span className='input-icon'><img src={eyeSlash}/></span>
                        <Input type='password' placeholder='New password' />
                    </FormGroup>
                    <FormGroup className='mb-4 input-field-with-icon'>
                        <span className='input-icon'><img src={eyeSlash}/></span>
                        <Input type='password' placeholder='Confirm new password' />
                    </FormGroup>
                    <div className='text-center mt-5'>
                        <Button type="submit" color="primary login-width">Set Password</Button>
                    </div>
                </Form>
            </Col>
        </>
    )
}

export default ChangePassword