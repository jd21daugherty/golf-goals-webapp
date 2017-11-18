import * as React from 'react';
import { Form, Checkbox, Button} from 'semantic-ui-react';

const SignInFormComponent = () => (
    <div>
    <Form>
        <Form.Field>
            <label>Username</label>
            <input placeholder='Username' />
        </Form.Field>
        <Form.Field>
            <label>Password</label>
            <input placeholder='Password' />
        </Form.Field>
        <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Login</Button>
        <Button type='submit'>Sign Up</Button>
    </Form>
    </div>
)

export default SignInFormComponent;