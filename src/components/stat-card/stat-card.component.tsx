import * as React from 'react';
import { Card } from 'semantic-ui-react';
import StatsModel from '../../models/stats';

const StatCardComponent = (props: StatsModel) => (
    <div>
        <Card raised>
            <Card.Content>
            <Card.Header>{props.header}</Card.Header>
                <Card.Meta>{props.meta}</Card.Meta>
                <Card.Description>{props.description}</Card.Description>
            </Card.Content>
        </Card>
  </div>
);

export default StatCardComponent;