import * as React from 'react';
import './App.css';
import CustomNavbar from './components/navbar/navbar';
import { BrowserRouter, Route} from 'react-router-dom';
// Components
import Home from './pages/home/home';
import Login from './pages/login/login';
import StartRound from './pages/start-round/start-round';

class App extends React.Component<any,any> {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <CustomNavbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/StartRound" component={StartRound} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
