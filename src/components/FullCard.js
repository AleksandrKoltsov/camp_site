import React from 'react';
import Box from '@material-ui/core/Box';
import TransitionsModal from './fullCardComponent/Modal.js'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import FormContainer from  './Forms'

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
        const classes = useStyles();
        return (
            <Box component="div" m={2}>
                <TransitionsModal img={props.data.img}
                                mini={props.data.mini}
                />
                <Box component="span" m={1}>
                   <h2 className={classes.mainTextHeader}>{props.data.title}</h2>
                    <p className={classes.mainText}>{props.data.text}</p>
                </Box>
                <div className={classes.root}>
                    <Button variant="contained" onClick={props.handleClickForm}>
                        Оформить
                    </Button>
                </div>
            </Box>
        );
}
{/*function UserInfoOrder(props) {*/}
{/*    console.log(props);*/}
{/*}*/}
