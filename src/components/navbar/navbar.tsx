import * as React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button, Icon } from 'semantic-ui-react';

interface Props {

}
interface State { 
  activeItem: string 
}

class CustomNavbar extends React.Component<Props, State>{
  constructor(props: any){
    super(props);
    this.state = {
      activeItem: 'home'
    }
  }

  navItemClicked(name: string){
    this.setState({
      activeItem: name
    });
  }
 
  render(){

     return(
      <div>
        <Menu pointing secondary size="massive">
          <Menu.Item name='home' active={this.state.activeItem == 'home'} onClick={() => this.navItemClicked('home')}><Link to="/"><Icon name='home' size='large' /> Home</Link></Menu.Item>
          <Menu.Item name='start round' active={this.state.activeItem == 'start round'} onClick={() => this.navItemClicked('start round')}><Link to="/StartRound">Start Round</Link></Menu.Item>
          <Menu.Item name='practice entry' active={this.state.activeItem == 'practice entry'} onClick={() => this.navItemClicked('practice entry')}><Link to="/PracticeEntry">Practice Entry</Link></Menu.Item>
          <Menu.Item name='profile' active={this.state.activeItem == 'profile'} onClick={() => this.navItemClicked('profile')}><Link to="/Profile">Profile</Link></Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item name='log in' active={this.state.activeItem == 'log in'} onClick={() => this.navItemClicked('log in')}><Link to="/Login"><Button primary>Log In</Button></Link></Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
      )
  }


}

export default CustomNavbar;
