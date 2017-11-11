import * as React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';


const HomePage = () => (
  <div>
    <Jumbotron>
    <h1>Golf Goals</h1>
    <p>You've seen stats, but never like this. You have goals, but dont know how to get there. Learn what you need to practice and when to reach your golf goals. Try it out today for free!</p>
    <Link to="/Login"><Button primary> Sign up!</Button></Link>
    <Button>Learn More</Button>
  </Jumbotron>
  </div>
)

export default HomePage;
