import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
//old components
import TransitionsModal from './fullCardComponent/Modal.js'
import StaticDateRangePickerExample from "./DatePicker";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
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
        // marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    mainText: {
        textAlign: 'justify',
    },
    mainTextHeader: {
        textAlign: 'center',
    },
    dataPicCont: {
        textAlign: 'center',
        justifyContent: 'center',
        margin: '5rem 0 0 0',
        height: '65vh'
    },
}));

export default function FullCard (props) {
    const classes = useStyles();
// Начал делать деструктуризацию пропса - чтоб было понятно что компонент получает
// добавил хендлер - чтоб передать датапикеру
    const {changedDate, handleChangedDate} = props;

    const handleDate = (arr) =>{

    };

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={12} sm={4} md={7} className={classes.image}>
                <TransitionsModal img={props.data.img} mini={props.data.mini}/>
            </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} square>
                <div className={classes.paper}>
                    <Box className={classes.form}>
                        <h2 className={classes.mainTextHeader}>{props.data.title}</h2>
                        <Grid className={classes.dataPicCont}>
                            <StaticDateRangePickerExample
                                handleChangedDate={handleChangedDate}
                                date={changedDate}
                                componentHandler={handleDate}
                                disabledDates={props.data.booked}
                            />
                        </Grid>
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
                    </Box>
                </div>
            </Grid>
            <Grid item xs={12}>
                <div className={classes.paper}>
                    <Box component="div" m={1}>
                        <p className={classes.mainText}>{props.data.text}</p>
                    </Box>
                </div>
            </Grid>
        </Grid>
    );
}
