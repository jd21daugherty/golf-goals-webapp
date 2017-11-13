import * as React from 'react';
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
  <div>
    <ScoreEntryComponent par={props.par} />
    <FairwayEntryComponent />
    <GirEntryComponent />
    <PitchChipEntryComponent />
    <SandEntryComponent />
    <PuttsEntryComponent />   
  </div>
)

export default HoleStatsComponent;
