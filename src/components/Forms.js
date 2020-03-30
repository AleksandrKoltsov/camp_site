import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function UserInfoOrder(props) {
    const classes = useStyles();
    console.log(props);
    return (
        <form className={classes.root}
              noValidate
              autoComplete="off"
        >
            <TextField id="standard-basic" label="Name" />

        </form>
    );
}
