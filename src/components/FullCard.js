import React from 'react';
import Box from '@material-ui/core/Box';
import TransitionsModal from './fullCardComponent/Modal.js'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
//date-picker
import DatePicker from "./DatePicker";
//-----------------------

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        mainText:{
            textAlign: 'justify',
        },
        mainTextHeader: {
            textAlign: 'center',
        },

    },
    paper: {
        marginTop: theme.spacing(15),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

export default function FullCard (props) {
    console.log(props);
    const classes = useStyles();
    return (
    <Container component="main" maxWidth="xs=12">
        <CssBaseline />
        <div className={classes.paper}>
            <Box component="div" m={2}>
                <TransitionsModal img={props.data.img}
                                mini={props.data.mini}
                />
                <Box component="span" m={1}>
                   <h2 className={classes.mainTextHeader}>{props.data.title}</h2>
                    <p className={classes.mainText}>{props.data.text}</p>
                </Box>
                <Box>
                    <DatePicker />
                </Box>
                <div className={classes.root}>
                    <Button variant="contained" onClick={props.handleClickForm}>
                        Оформить
                    </Button>
                </div>
            </Box>
        </div>
    </Container>
    );
}

