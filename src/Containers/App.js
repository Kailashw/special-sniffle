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
    this.state = { editorHtml: '', document: null, successMessage: false }
  }


  componentDidMount() {
    if (Object.keys(this.props).length) {
      fetch(BaseURL + '/Documents/' + this.props.match.params.id)
        .then(response => response.json())
        .then(json => {
          this.setState({
            editorHtml: json.editorHtml,
            document: json
          })
        })
    }
  }

  handleChange = (html) => {
    this.setState({ editorHtml: html });
  }

  handleClear = (html) => {
    this.setState({ editorHtml: '' });
  }

  // put operation to update the doc
  onSubmit = () => {
    fetch(BaseURL + '/Documents/' + this.props.match.params.id, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'PUT',
      body: JSON.stringify({
        "updatedAt": new Date().toISOString(),
        "isLocked": false,
        "updatedBy": localStorage.getItem('email'),
        "editorHtml": this.state.editorHtml
      })
    }).then(
      resp => resp.status >=200 && resp.status < 299 ? this.setState({successMessage:true}) : this.setState({successMessage:false})
    )
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.successMessage &&
          alert("Document updated Successfully.")
        }
        <div>
          <h1 style={h1Style}> {this.state.document && this.state.document.title} </h1>
          <Editor
            placeholder={'Go ahead and write something...'}
            editorHtml={this.state.editorHtml}
            handleChange={this.handleChange}
            handleClear={this.handleClear}
            onSubmit={this.onSubmit} />
        </div>
        <Footer />
      </div>
    );
  }
}

const h1Style = {
  display: "flex",
  justifyContent: "center"
}

export default App;
