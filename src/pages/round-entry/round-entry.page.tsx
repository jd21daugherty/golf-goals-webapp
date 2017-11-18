import * as React from 'react';
import HoleStatsComponent from './components/hole-stats-entry/hole-stats.component';
import CurrentHoleHeaderComponent from './components/current-hole-header/current-hole-header.component';
import { Col } from 'react-bootstrap';
import { Button, Icon } from 'semantic-ui-react';

interface State {
  onHole: number,
  par: number
}

class RoundEntryPage extends React.Component<any,State>{
  constructor(props: any){
    super(props);

    this.state = {
      onHole: 1,
      par: 4
    }
  }

  incrementHole(){
    let hole: number = this.state.onHole;
    hole ++;

    this.setState({
      onHole: hole
    });
  }

  render(){
    return(
      <div>
        <Col md={1}>
        <Button className="switchHoleBtn" size="massive">
          <Button.Content>
            <Icon name="triangle left" />
          </Button.Content>
        </Button>
        </Col>
        <Col md={10}>
          <CurrentHoleHeaderComponent 
          hole={this.state.onHole} 
          par={this.state.par} 
          coursename="Lake Hefner (South)" />
          <HoleStatsComponent par={this.state.par} />
        </Col>
        <Col md={1}>
        <Button className="switchHoleBtn" size="massive">
          <Button.Content>
            <Icon name="triangle right" />
          </Button.Content>
        </Button>
        </Col>
      </div>

    )
  }
}

export default RoundEntryPage;
