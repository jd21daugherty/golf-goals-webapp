import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { Row, Col } from 'react-bootstrap';

const FairwayEntryComponent = () => (
  <div>
    <Row>
    <Col md={2}><div>Fairway In Regulation: </div></Col>
    <Col md={10}>
      <Button size="big" content='Missed Left' icon='arrow left' labelPosition='left' />
      <Button size="big" icon='bullseye' />
      <Button size="big" content='Missed Right' icon='arrow right' labelPosition='right' />
    </Col>
    </Row>
  </div>
)

export default FairwayEntryComponent;
