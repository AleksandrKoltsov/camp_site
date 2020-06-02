import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';


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
        margin: '0 0 0 0'
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
    const classes = useStyles();

    const renderStar = (rat) => {
        console.log(rat);
        let str = [];
        for(let i = 1, star = rat; i < 10; i++){

            if(star > 0) {
                str.push(<span key={i}><StarIcon color='primary' fontSize='small' /></span>);
                star--;
            }else {
                str.push(<span key={i}><StarBorderIcon color='primary' fontSize='small' /></span>);
            }
        }
        console.log(str);
        return str;
    };

    return (
        <Box
            className={classes.paper}
            component={Paper}
        >
            <CssBaseline />
                <span className={classes.name}>{props.item.name}</span>
                <span className={classes.star}>{renderStar(props.item.rating)}</span>
                <span className={classes.date}>{props.item.date}</span>
                <span className={classes.text}>{props.item.review}</span>
        </Box>
    );
}