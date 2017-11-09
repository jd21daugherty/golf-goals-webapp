import * as React from 'react';
import FairwayEntryComponent from './components/fairway-entry.component';
import GirEntryComponent from './components/gir-entry.component';
import MissedGreenEntryComponent from './components/missedgreen-entry.component';
import PitchChipSandEntryComponent from './components/pitchchipsand-entry.component';
import PuttsEntryComponent from './components/putts-entry.component';
import ScoreEntryComponent from './components/score-entry.component';

const HoleStatsComponent = () => (
  <div>
    <FairwayEntryComponent />
    <GirEntryComponent />
    <MissedGreenEntryComponent />
    <PitchChipSandEntryComponent />
    <PuttsEntryComponent />
    <ScoreEntryComponent />
  </div>
)

export default HoleStatsComponent;
