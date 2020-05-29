import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//rating
import Rating from '@material-ui/lab/Rating';
//

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
        marginTop: '1rem'
    },
    multi: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        marginTop: '1rem',
        width: '100%'
    }
}));

export default function SignInSide() {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid
                container
                xs={12}
                component={Paper}
                elevation={12}
                square
                justify="center"
            >
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Залиште свій відгук
                    </Typography>
                    <div className={classes.rating}>
                        <Rating name="size-large" defaultValue={5} size="large" max={10}/>
                    </div>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="П.І.Б."
                            name="name"
                            autoComplete="name"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="@ електронна адреса"
                            name="email"
                            autoComplete="email"
                        />
                        <TextField
                            className={classes.multi}
                            id="outlined-multiline-static"
                            label="Відгук"
                            multiline
                            required
                            rows={4}
                            variant="outlined"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >Відправити
                        </Button>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}