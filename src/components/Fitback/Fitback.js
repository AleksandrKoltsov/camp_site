import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import onValidation from '../Validator.js';
import Box from '@material-ui/core/Box';
import Review from "./Review.js";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        margin: theme.spacing(8, 4),
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
    rating: {
        display: 'flex',
        flexDirection: 'column',
        '& > * + *': {
            marginTop: theme.spacing(1),
        },
        padding: '1rem'
    },
    multi: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        marginTop: '1rem',
        width: '100%'
    },
    review: {
        height: '100vh',
        overflowY: 'scroll',
    }
}));

export default function Fitback (props) {
    const data = props.data;
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [rate, setRate] = useState(5);

    const [errorText, setErrorText] = useState({name: '', email: '', text: ''});
    const [errorState, setErrorState] = useState({name: false,  email: false, text: false});

    const handleSubmit = (e) => {
        e.preventDefault();

        const resultValid = onValidation('rev',name, email);
        // console.log(resultValid);
        if (resultValid.name && resultValid.email) {
            setErrorState({name: false, email: false});
            setErrorText({name: '', email: ''});

            props.handleReview({
                rating: rate,
                name: name,
                email: email,
                review: text,
                date: new Date().toLocaleString('uk-UA')
            });

            setRate(5);
            setName( '');
            setEmail('');
            setText('');
        }

        if (!resultValid.name) {
            setErrorState({name: true});
            setErrorText({name: 'Упс! Помилочка!'});
        }
        if (!resultValid.email) {
            setErrorState({email: true});
            setErrorText({email: 'Упс! Помилочка!'});
        }
    };

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item
                  xs={12}
                  sm={4}
                  md={4}
                 component={Paper}
                 // elevation={12}
                 square
                 justify="center"
                 ml={2}
            >
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5">
                            Залиште свій відгук
                        </Typography>
                        <div className={classes.rating}>
                            <Rating
                                name="size-large"
                                defaultValue={5}
                                size="large"
                                max={10}
                                value={rate}
                                onChange={(e)=>setRate(e.target.value)}
                            />
                        </div>
                        <div className={classes.form}>
                            <Box mt={1}>
                            <TextField
                                autoComplete="fname"
                                name="n"
                                variant="outlined"
                                required
                                fullWidth
                                error={errorState.name}
                                helperText={errorText.name}
                                id="firstName"
                                label="П.І.Б."
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                            />
                            </Box>
                            <Box mt={2}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Електронна адреса"
                                name="email"
                                autoComplete="email"
                                error={errorState.email}
                                helperText={errorText.email}
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                            </Box>
                            <Box mt={1}>
                            <TextField
                                name="t"
                                fullWidth
                                error={errorState.text}
                                helperText={errorText.text}
                                value={text}
                                onChange={(e)=>setText(e.target.value)}
                                className={classes.multi}
                                id="outlined-multiline-static"
                                label="Відгук"
                                multiline
                                required
                                rows={5}
                                variant="outlined"
                            />
                            </Box>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >Відправити
                            </Button>
                        </div>
                    </div>
                </form>
            </Grid>
            <Grid item
                className={classes.review}
                xs={12}
                sm={8}
                md={8}
                component={Paper}
                // elevation={12}
                square
                justify="center"
            >
                <div>
                    {data.map((el, i) => {
                       return (
                           <Review key={i} item={el} />
                    )}).reverse()}
                </div>
            </Grid>
        </Grid>
    );
}
