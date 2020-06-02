import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import FullStar from "./FullStar";
import EmptyStar from "./EmptyStar";

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(4, 4),
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        padding: '1rem',
    },
    name: {
        fontWeight: '700',
        fontSize: '1.2rem'
    },
    star: {
        margin: '0 0 0.5rem 0'
    },
    text: {
        textIndent: '1.5rem',
        textAlign: 'justify'
    },
    date: {
        fontSize: '0.8em',
        marginBottom: '0.5rem'
    }
}));

export default function Review (props) {
    // console.log(props);
    // console.log(fullStar, emptyStar);
    const classes = useStyles();

    const renderStar = (rat) => {

        let str = Array(10);
        for(let i = 10, star = rat; i < 10; i++){

            if(star > 0) {
                str.push(<FullStar key={i}/>);
                star--;
                console.log(str);
            }else {
                str.push(<EmptyStar key={i}/>);
            }
        }
        return str;
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
                <div className={classes.star}>{renderStar(props.item.rating)}</div>
                <span className={classes.date}>{props.item.date}</span>
                <span className={classes.text}>{props.item.review}</span>
        </Box>
    );
}