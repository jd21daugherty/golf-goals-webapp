import * as React from 'react';
import { Header } from 'semantic-ui-react';
import { Row, Col } from 'react-bootstrap';
import StatCardComponent from '../stat-card/stat-card.component';
import StatsModel from '../../models/stats';
import './styles/stat-box.component.css'

var stats: Array<StatsModel> = [
    {
        header: 'Average Score',
        description: '75',
        meta: '% Changed: 30%'
    },
    {
        header: 'Greens In Regulation',
        description: '10',
        meta: '% Changed: 30%'
    },
    {
        header: 'Fairways In Regulation',
        description: '71%',
        meta: '% Changed: 30%'
    },
    {
        header: 'Iron Accuracy',
        description: '68%',
        meta: '% Changed: 30%'
    },
    {
        header: 'Putts Per Round',
        description: '30.3',
        meta: '% Changed: 30%'
    },
    {
        header: 'Pitch/Chip/Sand Shots',
        description: '7.4',
        meta: '% Changed: 30%'
    },
    {
        header: 'Number of Birdies',
        description: '2.4',
        meta: '% Changed: 30%'
    },
    {
        header: 'Number of Pars',
        description: '10.3',
        meta: '% Changed: 30%'
    }
];


const StatBoxComponent = () => (
    <div>       
    <Row><div id="header"><Header as="h2">Current Stats</Header></div></Row>
    <Row>
        <div>          
               {stats.map((stats: StatsModel) => <Col md={6}><StatCardComponent {...stats}/></Col> )}                           
        </div>
    </Row>
    </div>
);
    

export default StatBoxComponent;