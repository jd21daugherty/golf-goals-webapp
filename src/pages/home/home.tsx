import * as React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';

const Home = () => (
  <div>
    <Jumbotron>
    <h1>Golf Goals</h1>
    <p>You've seen stats, but never like this. You have goals, but dont know how to get there. Learn what you need to practice and when to reach your golf goals. Try it out today for free!</p>
    <p><Button bsStyle="primary">Sign Up!</Button></p>
    <p><Button bsStyle="primary">Learn More</Button></p>
  </Jumbotron>
  </div>
)

export default Home;
