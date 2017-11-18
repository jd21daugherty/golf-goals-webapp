import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { Row, Col } from 'react-bootstrap';

const SandEntryComponent = () => (
    <div>
    <Row>
      <Col md={12}>
    <Col md={2}><div>Sand Shots: </div></Col>
    <Col md={5}>
      <Button size="big" circular>1</Button>
      <Button size="big" circular>2</Button>
      <Button size="big" circular>3</Button>
      <Button size="big" circular>4</Button>
      <Button size="big" circular>5</Button>
      <Button size="big" circular>+</Button>
    </Col>
    </Col>
    </Row>    
    </div>
)

export default SandEntryComponent;