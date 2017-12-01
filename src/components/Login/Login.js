import React, {Component} from 'react';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div id='Login'>
             <div className='Login-container'>
             <div className='button-container'>
             <div className ='Login-button'>
          <a style={{textDecoration: 'none', color:'#c6b38e'}} href={process.env.REACT_APP_LOGIN}>
          Login
          </a>
          </div>
          </div>
          </div>
            </div>
        )
    }
}

export default Login;