import React, { Component } from 'react';

import '../assets/css/App.css';
import Editor from '../Components/Editor'
import Footer from '../Components/Footer';
import Header from '../Components/Header';



const BaseURL = 'http://5c72fab9ba65bb0014ebf059.mockapi.io/userdocs'

// @TODO : pass 'saveText', 'isLocked' functions from here.
class App extends Component {

  constructor(props) {
    super()
    this.state = { editorHtml: '' }
  }


  componentDidMount(){
    fetch(`${BaseURL}`+'/Documents/'+`${this.props.match.params.id}`)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    editorHtml: json.editorHtml
                })
            })
  }

  handleChange = (html) => {
    this.setState({ editorHtml: html });
  }

  handleClear = (html) => {
    this.setState({ editorHtml: '' });
  }

  // put operation to update the doc
  onSubmit = () => {
      fetch( `${BaseURL}`+'/Documents/'+`${this.props.match.params.id}`, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'PUT',
      body: JSON.stringify({
        "updatedAt": new Date().toISOString(),
        "isLocked":false,
        "updatedBy": localStorage.getItem('email'),
        "editorHtml":this.state.editorHtml
      })
    })
  }

  render() {
    return (
      <div>
        <Header />
        <RenderHeader />
        <div>
          <Editor 
            placeholder={'Go ahead and write something...'} 
            editorHtml ={this.state.editorHtml} 
            handleChange={this.handleChange} 
            handleClear ={this.handleClear}
            onSubmit={this.onSubmit}/>
        </div>
        <Footer />
      </div>
    );
  }
}

// @TODO : please move this to center
const RenderHeader = () => {
  return (
    <div>
      <h2> Hi {localStorage.getItem('email')}, Hope you're having a good day.</h2>
    </div>
  )
}

export default App;
