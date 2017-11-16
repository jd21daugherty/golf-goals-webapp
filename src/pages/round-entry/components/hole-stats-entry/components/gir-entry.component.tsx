import * as React from 'react';
import { Row, Col} from 'react-bootstrap';
import { Button } from 'semantic-ui-react';

const GirEntryComponent = () => (
  <div>
    <Row>
      <Col md={12}>
        <Col md={2}><div>Green In Regulation: </div></Col>
        <Col md={5}>
          <Button size="big" content='Missed Left' icon='arrow left' labelPosition='left' />
          <Button size="big" icon='bullseye' />
          <Button size="big" content='Missed Right' icon='arrow right' labelPosition='right' />
        </Col>
      </Col>
    </Row>
  </div>
)

export default GirEntryComponent;
