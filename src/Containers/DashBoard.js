import React from "react";
import { Button, Paper, List, ListSubheader } from "@material-ui/core";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import withStyles from '@material-ui/core/styles/withStyles';

// fetch api for docs.
const DocsApiCall = 'http://5c72fab9ba65bb0014ebf059.mockapi.io/userdocs/Documents'

// Temporary Code to style my CSS forLgin Screen
const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

class DashBoard extends React.Component {

    constructor(props) {
        super()
        this.state = {
            documents: null
        }
    }

    //api call to get all documents.
    componentDidMount() {
        fetch(DocsApiCall)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    documents: json
                })
            })
    }

    // clicking on selected document should push it's id to history.
    onClick = (id) => {
        this.props.history.push(`/editor/${id}`)
    }

    render() {
        const { documents } = this.state
        return (
            <>
                <Header />
                <Paper>
                    <h2> Hi {localStorage.getItem('email')}, please chose one of the documents from below to edit. </h2>
                    {documents && documents.length > 0 && 
                        DocumentList(documents, this.onClick)}
                </Paper>
                <Footer />
            </>
        )

    }
}

// @TODO : this code is not happy. it need a better UI ofcourse :-P
const DocumentList = (documents, fn) => {
    return (
        <div>
            {documents.map((list) => {
                return (
                    <List key={list.id} subheader={
                            <ListSubheader> <Button onClick={() => fn(list.id)} > {list.name} </Button></ListSubheader>
                            }>
                    </List>
                )
            })}
        </div>)
}

export default withStyles(styles)(DashBoard);
