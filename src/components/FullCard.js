import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//old components
import TransitionsModal from './fullCardComponent/Modal.js'
import InlineDatePicker from "./DatePicker";

// function Copyright() {
//     return (
//         <Typography variant="body2" color="textSecondary" align="center">
//             {'Copyright © '}
//             <Link color="inherit" href="https://material-ui.com/">
//                 Your Website
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(0, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    mainText:{
        textAlign: 'justify',
    },
    mainTextHeader: {
        textAlign: 'center',
    },
}));

export default function FullCard (props) {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image}>
                <TransitionsModal img={props.data.img}
                                  mini={props.data.mini}
                />
            </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Box className={classes.form} noValidate>
                        <Box component="span" m={1}>
                            <h2 className={classes.mainTextHeader}>{props.data.title}</h2>
                            <p className={classes.mainText}>{props.data.text}</p>
                        </Box>
                        <Box>
                            <InlineDatePicker />
                        </Box>
                        <Button
                            // type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={props.handleClickForm}
                        >
                            Оформить
                        </Button>
                        {/*<Box mt={5}>*/}
                        {/*    <Copyright />*/}
                        {/*</Box>*/}
                    </Box>
                </div>
            </Grid>
        </Grid>
    );
}






// import React from 'react';
// import Box from '@material-ui/core/Box';
//
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Container from "@material-ui/core/Container";
// import CssBaseline from "@material-ui/core/CssBaseline";
//date-picker

//-----------------------
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//             width: '25ch',
//         },
//         mainText:{
//             textAlign: 'justify',
//         },
//         mainTextHeader: {
//             textAlign: 'center',
//         },
//
//     },
//     paper: {
//         marginTop: theme.spacing(15),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     container: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
// }));
//
// export default function FullCard (props) {
//     console.log(props);
//     const classes = useStyles();
//     return (
//     <Container component="main" maxWidth="xs=12">
//         <CssBaseline />
//         <div className={classes.paper}>
//             <Box component="div" m={2}>
//                 <TransitionsModal img={props.data.img}
//                                 mini={props.data.mini}
//                 />
//                 <Box component="span" m={1}>
//                    <h2 className={classes.mainTextHeader}>{props.data.title}</h2>
//                     <p className={classes.mainText}>{props.data.text}</p>
//                 </Box>
//                 <Box>
//                     <InlineDatePicker />
//                 </Box>
//                 <div className={classes.root}>
//                     <Button variant="contained" onClick={props.handleClickForm}>
//                         Оформить
//                     </Button>
//                 </div>
//             </Box>
//         </div>
//     </Container>
//     );
// }









