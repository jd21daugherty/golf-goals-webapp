import * as React from 'react';
import HoleStatsComponent from './components/hole-stats-entry/hole-stats.component';

class RoundEntryPage extends React.Component<any,any>{
  constructor(props: any){
    super(props);
  }

  render(){
    return(
      <div>
        <h3>Enter your round</h3>
        <HoleStatsComponent />
      </div>

    )
  }
}

export default RoundEntryPage;
