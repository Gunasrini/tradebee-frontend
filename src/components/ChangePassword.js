import { Col, Form, FormGroup, Input, Button } from 'reactstrap'

function ChangePassword() {
    return (
        <>
            <Col lg={4} className='mx-auto mt-5'>
                <div className='text-center mb-4 pb-2'>
                    <h2 className='register-cont'>Change Password</h2>
                </div>
                <Form className='form login-form'>
                    <FormGroup className='mb-4 input-field-with-icon'>
                        <span className='input-icon'><i className="far fa-eye-slash"></i></span>
                        <Input type='text' placeholder='New Password' />
                    </FormGroup>
                    <FormGroup className='mb-4 input-field-with-icon'>
                        <span className='input-icon'><i className="far fa-eye-slash"></i></span>
                        <Input type='text' placeholder='Confirm New Password' />
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