import React, { Component } from 'react';
import '../assets/css/App.css';
import Editor from '../Components/Editor'

// @TODO : pass 'saveText', 'isLocked' functions from here.
class App extends Component {
  render() {
    return (
      <div>
        <RenderHeader/>
        <div>
          <Editor placeholder={'Go ahead and write something...'} onSubmit={onSubmit}/>
        </div>
      </div>
    );
  }
}


const onSubmit = () =>{
  alert('onSubmit Clicked')
}

// @TODO : please move this to center
const RenderHeader = () =>{
  return (
    <div>
        <h2> Hi {localStorage.getItem('email')}, Hope you're having a good day.</h2>
    </div>
  )
}

export default App;
