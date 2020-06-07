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
        flexDirection: 'row',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        minHeight: '30vh',
        // backgroundColor: '#0d47a1',
        background: 'linear-gradient(#3241A2, #3241A2, #212121 100%);',
        color: 'white',
        boxShadow: '0 -10px 18px rgba(0,0,0,0.4), 0 10px 10px rgba(0,0,0,0.3)',
        '& a, a:link, a:visited, a:active': {
            color: 'rgba(255,255,255, 0.7)',
            textDecoration: 'none',
            fontWeight: '100',
        },
        '& a:hover':{
            color: 'rgba(255,255,255)',
            textDecoration: 'underline',
        }
    },
    container: {
        boxSizing: 'borderbox',
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'space-around',
        alignContent: 'flex-start',
        width: '100%',
    },
    smallCont: {
        // margin: '1rem',
        padding: '0.8rem',
        flex: '0 1 auto',
        flexDirection: 'column',
        alignItems: 'center',
        // alignSelf: 'stretch',
        '& smallCont:nth-child(1)': {
            flex: '0 1 30vw',
        },
        '& smallCont:nth-child(2)': {
            flex: '0 1 30vw',
        },
        '& smallCont:nth-child(3)': {
            flex: '0 1 30vw',
        },
    },
    header: {
        display: 'block',
        fontSize: '1.1rem',
        fontWeight: '600',
        color: '#fff',
        margin: '0, 2rem, 0, 2rem',
        padding: '0 0 0 2.5rem',
        // border: '1px solid red',
        // textAlign: 'center'
    },
    text: {
        listStyleType: 'none',
        fontSize: '1rem',
        // border: '1px solid red',
    },
    copyright: {
        display: 'block',
        textAlign: 'center',
        width: '96.5vw',
        // border: '1px solid red',
    },
    soc: {
        padding: '2rem',
    },
}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <footer className={classes.footer}>
                <Grid container spacing={2} className={classes.container}>
                    <Grid container className={classes.smallCont}>
                        <span className={classes.header}>Проект</span>
                        <ul className={classes.text}>
                            <li><a href="#">GitHub</a></li>
                            <li><a href="#">Heroku</a></li>
                            <li><a href="#">Google</a></li>
                        </ul>
                    </Grid>
                    <Grid container className={classes.smallCont}>
                        <span className={classes.header}>Підтримка</span>
                        <ul className={classes.text}>
                            <li><a href="#">Зауваження</a></li>
                            <li><a href="#">Питання</a></li>
                            <li><a href="#">Сповістити про помилку</a></li>
                            <li><a href="#">Отримати допомогу</a></li>
                        </ul>
                    </Grid>
                    <Grid container className={classes.smallCont}>
                        <div className={classes.soc}>
                            <a href=""><FacebookIcon  fontSize='large'/></a>
                            <a href=""><InstagramIcon fontSize='large'/></a>
                            <a href=""><TelegramIcon fontSize='large'/></a>
                        </div>
                    </Grid>
                </Grid>
                    <Grid item className={classes.copyright}>
                        <Copyright />
                    </Grid>
            </footer>
        </div>
    );
}