import React from "react";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import {Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Paper from '@material-ui/core/Paper';
import Box from "@material-ui/core/Box";


const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(0, 0),
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        width: '100vw',
        height: '100vh',
        fontSize: '2em',
    },
    check: {
        marginLeft: '1rem'
    },
    green: {
        color: 'green'
    },
    red: {
        color: 'red'
    }
}));

export default function Message (props) {
    const classes = useStyles();
    const {state} = props;
    return (
            <Grid
                className={classes.paper}
                container
                direction="row"
                justify="center"
                alignItems="center"
                component={Paper}
            >
                <CssBaseline/>
                {state ?
                    <Box xs={12} justify="center" alignItems="center" className={classes.green}>
                        <span>Операція виконана успішно</span>
                        <span className={classes.check}><CheckCircleIcon fontSize={'large'}/></span>
                    </Box>
                    :
                    <Box xs={12} justify="center" alignItems="center" className={classes.red}>
                        <span>Виникла помилочка, спробуйте ще!</span>
                        <span className={classes.check}><CancelIcon fontSize={'large'}/></span>
                    </Box>
                }
            </Grid>
    );
}