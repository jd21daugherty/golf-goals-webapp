import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'semantic-ui-react';

interface Props{
  par: number
}

class ScoreEntryComponent extends React.Component<Props, any>{
  constructor(props: any){
    super(props)
  }
  render(){
    let scoreButtons;

    if(this.props.par == 3){
      scoreButtons = 
      <div>
        <Button size="big">1</Button>
        <Button size="big">2</Button>
        <Button size="big">3</Button>
        <Button size="big">4</Button>
        <Button size="big">5</Button>
      </div>
    }

    if(this.props.par == 4){
      scoreButtons = 
      <div>
        <Button size="big">2</Button>
        <Button size="big">3</Button>
        <Button size="big">4</Button>
        <Button size="big">5</Button>
        <Button size="big">6</Button>
        <Button size="big">+</Button>
      </div>
    }

    if(this.props.par == 5){
      scoreButtons = 
      <div>
        <Button size="big">2</Button>
        <Button size="big">3</Button>
        <Button size="big">4</Button>
        <Button size="big">5</Button>
        <Button size="big">6</Button>
        <Button size="big">7</Button>
        <Button size="big">+</Button>
      </div>
    }

    return(
      <div>
        <Row>
          <Col md={12}>
          <Col md={2}><div>Enter Score: </div></Col>
          <Col md={5}>
            {scoreButtons}
          </Col>
          </Col>
        </Row>           
      </div>
    )
  }
}

export default ScoreEntryComponent;
