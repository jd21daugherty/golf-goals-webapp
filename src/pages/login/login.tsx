import * as React from 'react';

interface Props{
  name: string
}

class Login extends React.Component<Props, any> {
  render(){
    return(
        <h2>Login</h2>
    )
  }
}

export default Login
