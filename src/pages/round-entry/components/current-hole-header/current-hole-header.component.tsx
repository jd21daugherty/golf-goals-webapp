import * as React from 'react';
import './styles/current-hole-header.component.css';
import { Row, Col } from 'react-bootstrap';

interface Props {
    hole: number,
    par: number,
    coursename: string
}

const CurrentHoleHeaderComponent = (props: Props) => (
    <div id="currentholeheader">
        <Row>
            <Col md={12}>
            <div>
                <Col md={1}><div id="holenumber">{props.hole}</div></Col>
                <Col md={8}>
                    <Row><div id="coursename">{props.coursename}</div></Row>
                    <Row><div id="parindicator">Par: {props.par}</div></Row>
                    <Row><div id="yardage">300 Yards</div></Row>               
                </Col>
                <Col md={3}>
                    <div id="totalscore">E</div>
                </Col>
            </div>
            </Col>           
        </Row>
    </div>
)

export default CurrentHoleHeaderComponent