import * as React from 'react';
import { Dropdown } from 'semantic-ui-react'
import { Col } from 'react-bootstrap';

interface PickCourseProps{
  name: string
}

var courseOptions = [
  {key: 'lakehefnersouth', value: 'lakehefnersouth', text: 'Lake Hefner (South)'},
  {key: 'lakehefnernorth', value: 'lakehefnernorth', text: 'Lake Hefner (North)'}
]

class PickACourseComponent extends React.Component<PickCourseProps, any> {
  constructor(props: PickCourseProps){
    super(props);
  }

  render(){
    return(
      <div>
        <Col md={12}>
        <Col md={3}><div id="hellomessage">Hello {this.props.name}, pick a course</div></Col>
        <Col md={9}><div><Dropdown placeholder="Select a Course" fluid search selection options={courseOptions} /></div></Col>
        </Col>
      </div>
    )
  }

}

export default PickACourseComponent;
