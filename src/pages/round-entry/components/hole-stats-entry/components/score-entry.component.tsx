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
    let scoreButtons = [];

    if(this.props.par == 3){     
      for(let i=1; i<6; i++){
        scoreButtons.push(<Button size="big" key={i}>{i}</Button>);
      }
    }

    if(this.props.par == 4){
      for(let i=2; i<7; i++){
        scoreButtons.push(<Button size="big" key={i}>{i}</Button>);
      }
    }

    if(this.props.par == 5){
      for(let i=2; i<8; i++){
        scoreButtons.push(<Button size="big" key={i}>{i}</Button>);
      }

    }

    scoreButtons.push(<Button size="big">+</Button>)

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
