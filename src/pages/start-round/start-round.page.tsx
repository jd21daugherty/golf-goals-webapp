import * as React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Button } from 'semantic-ui-react';
import { Col, Row } from 'react-bootstrap';
import PickACourseComponent from './components/pick-a-course/pick-a-course.component';
import StatBoxComponent from '../../components/stat-box/stat-box.component';
import './styles/start-round.page.css';

class StartARoundPage extends React.Component{
  constructor(props: any){
    super(props);
  }

  startRound(){
    console.log("clicked start round");
  }

  render(){
    return(
      <div>
        <Container content>
          <Row>   
          <Col md={3}><Header id="header" as="h1">Start a Round</Header></Col>
          <Col md={9}><div id="startroundbtn"><Link to="/RoundEntry"><Button primary>Start my Round!</Button></Link></div></Col>
        </Row>
        <Row><div id="pickacourse"><PickACourseComponent name="Josh" /></div></Row> 
        <Row>
          <Col md={6}><StatBoxComponent /></Col>  
          <Col md={6}></Col>
        </Row>       
        </Container>
      </div>
    )
  }
}



export default StartARoundPage;
