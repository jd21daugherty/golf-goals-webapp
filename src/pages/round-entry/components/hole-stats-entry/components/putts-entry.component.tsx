import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Button } from 'semantic-ui-react';

const PuttsEntryComponent = () => (
  <div>
    <Row>
      <Col md={12}>
    <Col md={2}><div>Putts: </div></Col>
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

export default PuttsEntryComponent;
