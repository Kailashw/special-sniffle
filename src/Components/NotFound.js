import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import withStyles from '@material-ui/core/styles/withStyles';


const styles = theme => ({
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
      }
})

class NotFound extends Component {
    constructor(props){
        super()
    }

    render() {
        const { classes } = this.props;
        return (
            <Paper className ={classes.paper}>
                <article>
                    The resource you're looking for is Not Found !!
                </article>
            </Paper>
        );
    }
}

export default withStyles(styles)(NotFound)