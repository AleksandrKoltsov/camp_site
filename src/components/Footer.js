import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        minHeight: '30vh',
        background: 'linear-gradient(#1565c0, #0d47a1, #212121);',
        color: 'white',
        boxShadow: '0 -10px 18px rgba(0,0,0,0.4), 0 10px 10px rgba(0,0,0,0.3)'
    },
    container: {
        display: 'flex',
    },
    header: {
        display: 'block',
        fontWeight: '600',
        color: '#fff',
        margin: '0, 2rem, 0, 2rem',
        border: '1px solid red',
        textAlign: 'center'
    },
    smallCont: {
        display: 'block',
        justifyContent: 'center',
        margin: '0 1rem 0 1rem',
        width: '20vw',
    },
    text: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        listStyleType: 'none',
        fontSize: '1rem',
        border: '1px solid red',
        '& a, a:link, a:visited, a:active': {
            color: 'rgba(255,255,255, 0.7)',
            textDecoration: 'none',
            fontWeight: '100'
        },
        '& a:hover':{
            color: 'rgba(255,255,255)',
            textDecoration: 'underline',
        }
    },
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Grid container spacing={2}>
                        <Grid item>
                            <Typography>
                                <span className={classes.header}>Проект</span>
                                <ul className={classes.text}>
                                    <li><a href="#">GitHub</a></li>
                                    <li><a href="#">Heroku</a></li>
                                    <li><a href="#">Google</a></li>
                                </ul>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography>
                                <span className={classes.header}>Підтримка</span>
                                <ul className={classes.text}>
                                    <li><a href="#">Зауваження</a></li>
                                    <li><a href="#">Питання</a></li>
                                    <li><a href="#">Сповістити про помилку</a></li>
                                    <li><a href="#">Отримати допомогу</a></li>
                                </ul>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography>
                            <div className={classes.text}>
                                <FacebookIcon />
                                <InstagramIcon />
                                <TelegramIcon />
                            </div>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Copyright />
                        </Grid>
                    </Grid>
                </Container>
            </footer>
        </div>
    );
}