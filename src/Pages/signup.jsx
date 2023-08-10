import { useForm } from 'react-hook-form'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup=()=>{
    return(
        <>
<main>
            <div className='loginForm'>

           <Form >
            <h1>Sign Up</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" 
                    placeholder="Enter email"
                   />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Firs Name</Form.Label>
                    <Form.Control type="email" 
                    placeholder="Enter firs name"
                   />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="email" 
                    placeholder="Enter last name"
                   />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                     placeholder="Password"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="email" 
                    placeholder="Enter your Phone"
                   />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                   
                </Form.Group>
                <Button variant="primary" type="submit" className='bLogin'>
                   Login
                </Button>
             </Form>
             </div>
        </main>
        
        </>
    )

} 
export default Signup