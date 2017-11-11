import * as React from 'react';
import './App.css';
import CustomNavbar from './components/navbar/navbar';
import { BrowserRouter, Route} from 'react-router-dom';
// Components
import HomePage from './pages/home/home.page';
import LoginPage from './pages/login/login.page';
import ProfilePage from './pages/profile/profile.page';
import StartARoundPage from './pages/start-round/start-round.page';
import PracticeEntryPage from './pages/practice-entry/practice-entry.page';
import RoundEntryPage from './pages/round-entry/round-entry.page';

class App extends React.Component<any,any> {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <CustomNavbar />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Login" component={LoginPage} />
          <Route exact path="/Profile" component={ProfilePage} />
          <Route exact path="/StartRound" component={StartARoundPage} />
          <Route exact path="/PracticeEntry" component={PracticeEntryPage} />
          <Route exact path="/RoundEntry" component={RoundEntryPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
