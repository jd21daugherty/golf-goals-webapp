import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { Row, Col } from 'react-bootstrap';

const PitchChipEntryComponent = () => (
  <div>
    <Row>
    <Col md={2}><div>Greenside Chip Shots: </div></Col>
    <Col md={10}>
      <Button size="big" circular>1</Button>
      <Button size="big" circular>2</Button>
      <Button size="big" circular>3</Button>
      <Button size="big" circular>4</Button>
      <Button size="big" circular>5</Button>
      <Button size="big" circular>+</Button>
    </Col>
    </Row>    
  </div>
)

export default PitchChipEntryComponent;
