import React from 'react';
import Box from '@material-ui/core/Box';
import TransitionsModal from './fullCardComponent/Modal.js'
// import UserInfoOrder from './Forms'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



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
        }
    },
}));

export default function FullCard (props) {
    // console.log (props);
        // const arrMini = props.mini;
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
                            data={props.id}
                            // handleClick={()=>UserInfoOrder()}
                    >Заказать</Button>
                </div>
            </Box>
        );
}
// export function UserInfoOrder(props, ev) {
//     // ev.preventDefault();
//     const classes = useStyles();
//     // console.log(props);
//     return (
//         <form className={classes.root}
//               noValidate
//               autoComplete="off"
//         >
//             <TextField id="standard-basic" label="Name" />
//
//         </form>
//     );
// }