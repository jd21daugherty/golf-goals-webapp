import * as React from 'react';

interface PickCourseProps{
  name: string
}

class PickACourseComponent extends React.Component<PickCourseProps, any> {
  constructor(props: PickCourseProps){
    super(props);
  }

  render(){
    return(
      <div>Hello {this.props.name}, pick a course</div>
    )
  }

}

export default PickACourseComponent;
