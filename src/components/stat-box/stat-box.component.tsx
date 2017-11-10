import * as React from 'react';
import { Header, Card } from 'semantic-ui-react';
import { Row } from 'react-bootstrap';
import StatCardComponent from '../stat-card/stat-card.component';
import StatsModel from '../../models/stats';
import './styles/stat-box.component.css'



var stats: Array<StatsModel> = [
    {
        header: 'Average Score',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: '% Changed: 30%'
    },
    {
        header: 'Greens In Regulation',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: '% Changed: 30%'
    },
    {
        header: 'Fairways In Regulation',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: '% Changed: 30%'
    },
    {
        header: 'Iron Accuracy',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: '% Changed: 30%'
    },
    {
        header: 'Putts Per Round',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: '% Changed: 30%'
    },
    {
        header: 'Pitch/Chip/Sand Shots',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: '% Changed: 30%'
    },
    {
        header: 'Number of Birdies',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: '% Changed: 30%'
    },
    {
        header: 'Number of Pars',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        meta: '% Changed: 30%'
    }
];


const StatBoxComponent = () => (
    <div>       
    <Row><div id="header"><Header as="h2">Current Stats</Header></div></Row>
    <Row>
        <div>
            <Card.Group itemsPerRow={2}>
               {stats.map((stats: StatsModel) => <StatCardComponent {...stats}/> )}                
            </Card.Group>
        </div>
    </Row>
</div>
);
    

export default StatBoxComponent;