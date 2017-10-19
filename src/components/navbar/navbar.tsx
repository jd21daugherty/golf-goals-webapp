import * as React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

interface Props {

}


class CustomNavbar extends React.Component<Props, any>{
  constructor(props: any){
    super(props);
  }

  render(){
      return(
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Golf Goals</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem><Link to="/">Home</Link></NavItem>
            <NavItem><Link to="/StartRound">Start a Round</Link></NavItem>
            <NavDropdown eventKey={3} title="Profile" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>My Stats</MenuItem>
              <MenuItem eventKey={3.2}>Settings</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Log Out</MenuItem>
            </NavDropdown>
        </Nav>
        </Navbar>

      </div>
      )
  }


}

export default CustomNavbar;
