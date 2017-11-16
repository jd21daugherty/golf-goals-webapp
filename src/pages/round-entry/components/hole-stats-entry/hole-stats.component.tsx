import * as React from 'react';
import './styles/hole-stats.component.css'

import FairwayEntryComponent from './components/fairway-entry.component';
import GirEntryComponent from './components/gir-entry.component';
import PitchChipEntryComponent from './components/pitchchip-entry.component';
import SandEntryComponent from './components/sand-entry.component';
import PuttsEntryComponent from './components/putts-entry.component';
import ScoreEntryComponent from './components/score-entry.component';

interface Props{
  par: number
}

const HoleStatsComponent = (props: Props) => (
  <div id="holestats">
    <div className="statentry"><ScoreEntryComponent par={props.par} /></div>
    <div className="statentry"><FairwayEntryComponent /></div>
    <div className="statentry"><GirEntryComponent /></div>
    <div className="statentry"><PitchChipEntryComponent /></div>
    <div className="statentry"><SandEntryComponent /></div>
    <div className="statentry"><PuttsEntryComponent /> </div>  
  </div>
)

export default HoleStatsComponent;
