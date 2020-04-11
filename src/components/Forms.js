import React, { useState }  from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import MomentUtils from '@date-io/moment';
import { DatePicker } from '@material-ui/pickers';

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
        marginTop: theme.spacing(8),
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

export default function SignUp() {
    const classes = useStyles();
    const [selectedDate, handleDateChange] = useState(new Date());
    let [state, setState] = useState();

    state = {
        name: '',
        errors: {
            name: false
        }
    }

    function handleSubmit (e) {
        e.preventDefault();
        console.log(state);
    }

    function handleChange (e) {
        setState({
            [e.target.name]: e.target.value
        })
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <form className={classes.form} onSubmit={()=>handleSubmit()}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="fname"
                                name="Name"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="Ф.И.О."
                                autoFocus
                                value={state.name}
                                onChange={(e)=> handleChange(e)}
                                error={state.errors.name}

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
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <DatePicker
                                id="birdth"
                                label="Дата рождения"
                                value={selectedDate}
                                onChange={handleDateChange}
                                orientation="portrait"
                                // disabled={true}
                                disableFuture={true}
                                inputVariant="outlined"
                                format="DD/MM/YYYY"
                            />

                        </Grid>
                        <Grid item xs={4}>
                            <DatePicker
                                id="arrivalDate"
                                label="Дата заезда"
                                value={selectedDate}
                                onChange={handleDateChange}
                                orientation="portrait"
                                disabled={true}
                                disableFuture={true}
                                inputVariant="outlined"
                                format="DD/MM/YYYY"
                            />

                        </Grid>
                        <Grid item xs={4}>
                            <DatePicker
                                id="departureDate"
                                label="Дата выезда"
                                value={selectedDate}
                                onChange={handleDateChange}
                                orientation="portrait"
                                disabled={true}
                                disableFuture={true}
                                inputVariant="outlined"
                                format="DD/MM/YYYY"
                            />

                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        // type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Оформить
                    </Button>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}
//
// export default function FormContainer(props) {
//     // console.log(props);
//     let  [value, setValue] = useState('');
//
//     value = {
//         name: '',
//         // tel: '',
//         // mail: '',
//         // arDate: '',
//         // dpDate: '',
//         // dob: '',
//         errors: {
//             name: '',
//             // tel: '',
//             // mail: '',
//             // arDate: '',
//             // dpDate: '',
//             // dob: '',
//         }
//     };
//     const classes = useStyles();
//     // console.log(props);
//
//     function handleSubmit(props){
//         console.log(props);
//         // console.log(ev);
//         // ev.preventDefault();
//         // console.log(ev, props);
//         let errors = {};
//
//         if (!value.name) errors.name = 'Имя не может быть пустым';
//         // if (!value.tel) errors.tel = 'поле не может быть пустым';
//         // if (!value.mail) errors.mail = 'поле не может быть пустым';
//
//         if (errors.name) {
//             setValue({errors});
//             return;
//         }
//         // props.handleOrder({
//         //     h: '15',
//         //     d: {
//         //         cd: 'current date 08/04/2020',
//         //         ad: 'arrival date 09/04/2020',
//         //         dd: 'departure date 10/04/2020'
//         //     },
//         //     n: 'Vasya',
//         //     p: '380953333333',
//         //     e: 'Vasya@i.ua',
//         //     dob: '30.03.2020',
//         //     cid: '123321',
//         //     oid: '101',
//         //     hid: props.data,
//         //     dop: '01.04.2020',
//         //     am: '1000'
//         // })
//     }
//
//     return (
//         {/*<Box component="div" m={15}>*/}
//         {/*    <CssBaseline />*/}
//         {/*    <form className={classes.root} noValidate autoComplete="off">*/}
//         {/*         Ф.И.О.*/}
//         {/*        <TextField*/}
//         {/*            error={false}*/}
//         {/*            id="outlined-basic"*/}
//         {/*            label="Ф.И.О."*/}
//         {/*            variant="outlined"*/}
//         {/*            helperText={false}*/}
//         {/*            errorText={value.errors.name}*/}
//         {/*            onChange={(event, name)=> setValue({name})}*/}
//         {/*            placeholder="Ф.И.О."*/}
//         {/*        />*/}
//         {/*        /!*Дата заезда *!/*/}
//         {/*        <TextField*/}
//         {/*            id="date"*/}
//         {/*            label="Заезд"*/}
//         {/*            type="date"*/}
//         {/*            defaultValue="2020-04-01"*/}
//         {/*            className={classes.root.textField}*/}
//         {/*            onChange={(event, dpDate)=> setValue({dpDate})}*/}
//         {/*            InputLabelProps={{*/}
//         {/*                shrink: true,*/}
//         {/*            }}*/}
//         {/*        />*/}
//         {/*        /!* Дата отъезда *!/*/}
//         {/*        <TextField*/}
//         {/*            id="date"*/}
//         {/*            label="Выезд"*/}
//         {/*            type="date"*/}
//         {/*            defaultValue="2020-04-01"*/}
//         {/*            className={classes.root.textField}*/}
//         {/*            onChange={(event, arDate)=> setValue({arDate})}*/}
//         {/*            InputLabelProps={{*/}
//         {/*                shrink: true,*/}
//         {/*            }}*/}
//         {/*        />*/}
//         {/*        /!* Телефон *!/*/}
//         {/*        <TextField*/}
//         {/*            id="outlined-basic"*/}
//         {/*            label="Телефон"*/}
//         {/*            variant="outlined"*/}
//         {/*            onChange={(event, tel)=> setValue({tel})}*/}
//         {/*            placeholder={'+380ХХХХХХХХХ'}*/}
//         {/*        />*/}
//
//         {/*        /!* Почта *!/*/}
//         {/*        <TextField*/}
//         {/*            id="outlined-basic"*/}
//         {/*            label="Электронная почта"*/}
//         {/*            variant="outlined"*/}
//         {/*            onChange={(event, mail)=> setValue({mail})}*/}
//         {/*            placeholder={'example@mail.com'}*/}
//         {/*        />*/}
//
//         {/*        /!* Дата рождения *!/*/}
//         {/*        <TextField*/}
//         {/*            id="date"*/}
//         {/*            label="День рождения"*/}
//         {/*            type="date"*/}
//         {/*            defaultValue="2020-04-01"*/}
//         {/*            className={classes.root.textField}*/}
//         {/*            onChange={(event, dob)=> setValue({dob})}*/}
//         {/*            InputLabelProps={{*/}
//         {/*                shrink: true,*/}
//         {/*            }}*/}
//         {/*        />*/}
//         {/*        <div className={classes.root}>*/}
//         {/*            <Button variant="contained"*/}
//         {/*                    label="Заказать"*/}
//         {/*                    onClick={(props)=>handleSubmit(props)}*/}
//         {/*                    >*/}
//         {/*                Заказать*/}
//         {/*            </Button>*/}
//         {/*        </div>*/}
//         {/*       <Forms data={props.data} handleOrder={props.handleClickOrder}/>*/}
//         {/*    </form>*/}
//         {/*</Box>*/}
//     );
// }
