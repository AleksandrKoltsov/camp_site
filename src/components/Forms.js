import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {DatePicker} from '@material-ui/pickers';
import onValidation from './Validator.js';
import { v4 as uuidv4 } from 'uuid';
// new
import StaticDateRangePickerExample from "./DatePicker";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(15),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function FormContainer (props) {
    // console.log(props);
    const classes = useStyles();
    const [selectedDate, handleDateChange] = useState(new Date());
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    // new
    const {changedDate, handleChangedDate, data} = props;
    const [date, handleDate] = useState(changedDate);
    const handleDateRange = (range) =>{
      const cd = new Date();
      const ad = range[0].toDate();
      const dd = range[1].toDate();
      handleDate({cd,ad,dd});
    }
    const [errorText, setErrorText] = useState({name: '', phone: '', email: ''});
    const [errorState, setErrorState] = useState({name: false, phone: false, email: false});


    const handleSubmit = (e) => {
        e.preventDefault();
        const oid = uuidv4(); // получаю uuid заказа
        const cid = uuidv4(); // получаю uuid клиента
        // console.log(oid);
        const resultValid = onValidation(name, phone, email);
        console.log(resultValid);
        if (resultValid.name && resultValid.phone && resultValid.email) {
            setErrorState({name: false, phone: false, email: false});
            setErrorText({name: '', phone: '', email: ''});
            props.handleClickOrder({
                h: '15',
                d: {
                    cd: new Date(),
                    ad: new Date(date.ad).toString(),//new
                    dd: new Date(date.dd).toString(),//new
                },
                n: name,
                p: phone,
                e: email,
                dob: new Date(selectedDate).toString(),
                cid: `client-customer-${cid}-${Date.now()}`,
                oid: `client-order-${oid}-${Date.now()}`,
                hid: props.id,
                dop: '01.04.2020',
                am: '1000'
            });
        }
        if (!resultValid.name) {
            setErrorState({name: true});
            setErrorText({name: 'Упс! Ошибочка!'});
        }
        if (!resultValid.phone) {
            setErrorState({phone: true});
            setErrorText({phone: 'Упс! Ошибочка!'});
        }
        if (!resultValid.email) {
                setErrorState({email: true});
                setErrorText({email: 'Упс! Ошибочка!'});
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="fname"
                                name="n"
                                variant="outlined"
                                required
                                fullWidth
                                error={errorState.name}
                                helperText={errorText.name}
                                id="firstName"
                                label="Ф.И.О."
                                autoFocus
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Тел."
                                name="lastName"
                                autoComplete="lname"
                                error={errorState.phone}
                                placeholder="+380XXXXXXXXX"
                                helperText={errorText.phone}
                                value={phone}
                                onChange={(e)=>setPhone(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="E-mail"
                                name="email"
                                autoComplete="email"
                                error={errorState.email}
                                helperText={errorText.email}
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                        <DatePicker
                             disableFuture
                             label="Date of birth"
                             value={selectedDate}
                             onChange={date => handleDateChange(date)}
                             renderInput={props => <TextField {...props} />}
                           />
                        </Grid>
                        <Grid item xs={12}>
                        <StaticDateRangePickerExample
                        handleChangedDate={handleChangedDate}
                        date={changedDate}
                        componentHandler={handleDateRange}
                        disabledDates={data.booked}
                        />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="Я хочу получать новости и промоакции на свою почту"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="оплатить сейчас"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        // onClick={handleChange(props)}
                    >
                        Забронировать
                    </Button>
                </form>
            </div>
            <Box mt={5}>
                {/*<p>*/}
                {/*    {JSON.stringify(`name:{${name}} <br/> phohe:{${phone}} <br/>  email:{${email}} <br/> date:{${selectedDate}}`, null, 2)}*/}
                {/*</p>*/}
                <Copyright />
            </Box>
        </Container>
    );
}
