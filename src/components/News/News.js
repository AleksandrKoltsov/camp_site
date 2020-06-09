import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Post from "./Post.js";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        margin: theme.spacing(4, 4),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    header: {
        textAlign: 'center'
    },
}));

export default function News (props) {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item
                  xs={12}
                  className={classes.header}
            >
                <h1>Тут мають бути дуже важливі новини</h1>
            </Grid>
            <Grid item
                  className={classes.paper}
                  xs={12}
            >
                <div>
                    {props.data.map((el) => {
                        return (
                            <Post key={el.id} item={el} />
                     )}).reverse()}
                </div>
            </Grid>
        </Grid>
    );
}
