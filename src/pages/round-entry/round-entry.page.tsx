import * as React from 'react';
import HoleStatsComponent from './components/hole-stats-entry/hole-stats.component';
import CurrentHoleHeaderComponent from './components/current-hole-header/current-hole-header.component';
import { Col } from 'react-bootstrap';
import { Button, Icon } from 'semantic-ui-react';
//import StateModel from '../../models/state';
import { connect } from 'react-redux';
import { incrementHole, decrementHole } from '../../services/round-entry/actions/change-hole.actions';


class RoundEntryPage extends React.Component<any, any>{
  constructor(props: any){
    super(props);
  }

  render(){
    return(
      <div>
      <Col md={1}>
      <Button onClick={this.props.decrementHole} className="switchHoleBtn" size="massive">
        <Button.Content>
          <Icon name="triangle left" />
        </Button.Content>
      </Button>
      </Col>
      <Col md={10}>
        <CurrentHoleHeaderComponent 
        hole={this.props.onHole} 
        par={4} 
        coursename={this.props.selectedCourse} />
        <HoleStatsComponent par={4} />
      </Col>
      <Col md={1}>
      <Button onClick={this.props.incrementHole} className="switchHoleBtn" size="massive">
        <Button.Content>
          <Icon name="triangle right" />
        </Button.Content>
      </Button>
      </Col>
    </div>
    )
  }
      
}

const mapStateToProps = (state: any) => ({
  onHole: state.currentHoleState.currentHole,
  selectedCourse: state.startRoundState.name,
  selectedTeeLength: state.startRoundState.tee
});

const mapDispatchToProps = (dispatch: any) => ({
  incrementHole: () => {
      dispatch(incrementHole());
  },
  decrementHole: () => {
      dispatch(decrementHole());
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(RoundEntryPage);
