import React from 'react';
import {withRouter} from 'react-router-dom'
import App from './App';

class Logout extends React.Component{
    constructor(props){
        super()
    }

    render(){
        // clear localstorage.
        localStorage.clear()
        this.props.history.push('/login')
        return <App />
    }
}

export default withRouter(Logout)