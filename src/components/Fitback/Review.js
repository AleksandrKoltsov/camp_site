import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import  { fullStar, emptyStar } from './stars.js'

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(4, 4),
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        padding: '1rem',
    },
    name: {
        fontWeight: '800',
        fontSize: '1.3rem'
    },
    star: {
        margin: '0 0 0.5rem 0'
    },
    text: {
        textIndent: '1.5rem',
        textAlign: 'justify'
    }
}));

export default function Review (props) {
    console.log(props);
    const classes = useStyles();

    const renderStar = (rat) => {
        let star = rat;
        let str = '';
        for(let i = 10; i < 10; i++){
            if(star > 0) {
                str += fullStar;
                star--;
            }else {
                str += emptyStar
            }
        }
        console.log(str);
        return (
            <span>
                {str}
            </span>
        );
    };

    // const formatDate = () => {
    //     let date = new Date();
    //     let dd = date.getDate();
    //     if (dd < 10) dd = "0" + dd;
    //
    //     let mm = date.getMonth() + 1;
    //     if (mm < 10) mm = "0" + mm;
    //
    //     let yyyy = date.getFullYear();
    //
    //     return dd + "." + mm + "." + yyyy;
    // };

    return (
        <Box
            className={classes.paper}
            component={Paper}
        >
            <CssBaseline />
                <span className={classes.name}>{props.item.name}</span>
                <div className={classes.star}>{renderStar(props.item.rating)}&nbsp;{props.item.date}</div>
                <span className={classes.text}>{props.item.review}</span>
        </Box>
    );
}