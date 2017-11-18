import * as React from 'react';
import { Card } from 'semantic-ui-react';
import StatsModel from '../../models/stats';
import './styles/stat-card.component.css';

const StatCardComponent = (props: StatsModel) => (
    <div id="card">
        <Card raised color="green">
            <Card.Content>
            <Card.Header>{props.header}</Card.Header>
                <Card.Meta>{props.meta}</Card.Meta>
                <Card.Description><div id="cardstat">{props.description}</div></Card.Description>
            </Card.Content>
        </Card>
  </div>
);

export default StatCardComponent;

