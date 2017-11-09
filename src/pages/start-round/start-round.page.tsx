import * as React from 'react';
import { Link } from 'react-router-dom';

import PickACourseComponent from './components/pick-a-course/pick-a-course.component';
import { Button } from 'react-bootstrap';

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
        <h2>Start a Round</h2>
        <PickACourseComponent name="Josh" />
        <Link to="/RoundEntry"><Button bsStyle="primary">Start my Round!</Button></Link>
      </div>
    )
  }
}

export default StartARoundPage;
