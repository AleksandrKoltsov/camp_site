import React from 'react';
import Box from '@material-ui/core/Box';
import TransitionsModal from './fullCardComponent/Modal.js'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';

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
    console.log(props);
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
                    <Button variant="contained"
                            onClick={()=>{
                                props.handleClickForm({
                                    h: '15',
                                    d: '01.04.2020',
                                    n: 'Vasya',
                                    p: '380953333333',
                                    e: 'Vasya@i.ua',
                                    dob: '30.03.2020',
                                    cid: '123321',
                                    oid: '101',
                                    hid: props.data.id,
                                    dop: '01.04.2020',
                                    am: '1000',
                                })
                            }}
                    >Заказать</Button>
                </div>
                 {/*<Box component='div' m={2}>*/}
                {/*//     <form className={classes.root}*/}
                {/*//           noValidate*/}
                {/*//           autoComplete="off"*/}
                {/*//     >*/}
                {/*//         <TextField id="outlined-basic" label="Name" />*/}
                {/*//         <TextField id="outlined-basic" label="e-mail" />*/}
                {/*//         <TextField id="outlined-basic" label="tel." />*/}
                {/*//         <form className={classes.container} noValidate>*/}
                {/*//             <TextField*/}
                {/*//                 id="date"*/}
                {/*//                 label="Birthday"*/}
                {/*//                 type="date"*/}
                {/*//                 defaultValue="2017-05-24"*/}
                {/*//                 className={classes.textField}*/}
                {/*//                 InputLabelProps={{*/}
                {/*//                     shrink: true,*/}
                {/*//                 }}*/}
                {/*//             />*/}
                {/*//             <TextField*/}
                {/*//                 id="date"*/}
                {/*//                 label="Check in"*/}
                {/*//                 type="date"*/}
                {/*//                 defaultValue="2017-05-24"*/}
                {/*//                 className={classes.textField}*/}
                {/*//                 InputLabelProps={{*/}
                {/*//                     shrink: true,*/}
                {/*//                 }}*/}
                {/*//             />*/}
                {/*//             <TextField*/}
                {/*//                 id="date"*/}
                {/*//                 label="Check out"*/}
                {/*//                 type="date"*/}
                {/*//                 defaultValue="2017-05-24"*/}
                {/*                className={classes.textField}*/}
                {/*                InputLabelProps={{*/}
                {/*                    shrink: true,*/}
                {/*                }}*/}
                {/*            />*/}
                {/*        </form>*/}
                {/*    </form>*/}
                {/*</Box>*/}
            </Box>
        );
}
{/*function UserInfoOrder(props) {*/}
{/*    console.log(props);*/}
{/*}*/}
