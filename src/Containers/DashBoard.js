import React from "react";

class DashBoard extends React.Component {

    constructor(props) {
        super()
    }

    // clicking on selected document should push it's id to history.
    onClick = (e) =>{
        return ''
    }

    render() {
        return (
            <>  Hi {localStorage.getItem('email')}, please chose one of the documents from below to edit.</>
            /**
             * List of Documents Component to Follow
             */
        )

    }
}

export default DashBoard
