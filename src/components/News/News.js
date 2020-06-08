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
        margin: theme.spacing(2, 2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    header: {
        textAlign: 'center'
    },
}));

export default function News (props) {

    const data = [
        {id: 1, title: 'Новина №1', img: 'https://vgorode.ua/img/article/5180/26_main-v1583945938.jpg', text: 'Тут має бути якась цікава новина', date: new Date().toString()},
        {id: 2, title: 'Новина №2', img: 'https://vgorode.ua/img/article/5180/26_main-v1583945938.jpg', text: 'Тут має бути якась цікава новина', date: new Date().toString()},
        {id: 3, title: 'Новина №3', img: 'https://vgorode.ua/img/article/5180/26_main-v1583945938.jpg', text: 'Тут має бути якась цікава новина', date: new Date().toString()},
        {id: 4, title: 'Новина №4', img: 'https://vgorode.ua/img/article/5180/26_main-v1583945938.jpg', text: 'Тут має бути якась цікава новина', date: new Date().toString()},
        {id: 5, title: 'Новина №5', img: 'https://vgorode.ua/img/article/5180/26_main-v1583945938.jpg', text: 'Тут має бути якась цікава новина', date: new Date().toString()},
        {id: 6, title: 'Новина №6', img: 'https://vgorode.ua/img/article/5180/26_main-v1583945938.jpg', text: 'Тут має бути якась цікава новина', date: new Date().toString()},

    ];
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
                    {data.map((el) => {
                        return (
                            <Post key={el.id} item={el} />
                     )}).reverse()}
                </div>
            </Grid>
        </Grid>
    );
}
