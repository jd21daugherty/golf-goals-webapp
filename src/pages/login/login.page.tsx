import * as React from 'react';
import './styles/login.page.css';

import SignInFormComponent from './components/sign-in-form/sign-in-form.component';
import SignInWithServiceComponent from './components/sign-in-with-service/sign-in-with-service.component';
import {Col, Row} from 'react-bootstrap';

interface Props{
  name: string
}

class LoginPage extends React.Component<Props, any> {
  render(){
    return(
      <div>
        <h4 id="sign-in-header">Sign Up or Login to start using Golf Goals!</h4>
        <div id="sign-in-form">
          <Row>
            <Col md={6}><SignInFormComponent /></Col>
            <Col md={6}><SignInWithServiceComponent/></Col>
          </Row>
        </div>
      </div> 
    )  
  }
}

export default LoginPage
