import * as React from 'react';
import HoleStatsComponent from './components/hole-stats-entry/hole-stats.component';
import CurrentHoleHeaderComponent from './components/current-hole-header/current-hole-header.component';

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
        <CurrentHoleHeaderComponent hole={this.state.onHole} par={this.state.par} />
        <HoleStatsComponent par={this.state.par} />
      </div>

    )
  }
}

export default RoundEntryPage;
