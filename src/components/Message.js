import React from "react";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(0, 0),
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        width: '100vw',
        height: '100vh',
        color: 'green',
        fontSize: '2em',
    },
    check: {
        marginLeft: '1rem'
    },

}));

export default function Message () {
    const classes = useStyles();

    return (
        <Grid
            className={classes.paper}
            container
            direction="row"
            justify="center"
            alignItems="center"
            component={Paper}
        >
            <CssBaseline />
            <Grid container xs={12}  justify="center" alignItems="center">
                <span>Операція виконана успішно</span>
                <span className={classes.check}><CheckCircleIcon fontSize={'large'}/></span>
            </Grid>
        </Grid>
    );
}