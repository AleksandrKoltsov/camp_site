import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: '200px',
        },
    },
    typography: {
        backgroundColor: '#fcf6d6',
        height: '100vh',
    },
    boxForm: {
        backgroundColor: 'white',
        margin: '7rem 2rem',
    },
}));

export function Forms(props) {
    // console.log(props);
    const classes = useStyles();

    function handleSubmit(){

    }

    return (
        <form className={classes.root} onSubmit={handleSubmit}>

            {/* Ф.И.О.*/}
            <TextField id="outlined-basic" label="Ф.И.О." variant="outlined" />
            {/*Дата заезда */}
            <TextField
                id="date"
                label="Заезд"
                type="date"
                defaultValue="2020-04-01"
                className={classes.root.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            {/* Дата отъезда */}
            <TextField
                id="date"
                label="Выезд"
                type="date"
                defaultValue="2020-04-01"
                className={classes.root.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            {/* Телефон */}
            <TextField id="outlined-basic" label="Телефон" variant="outlined"/>

            {/* Почта */}
            <TextField id="outlined-basic" label="Электронная почта" variant="outlined" />

            {/* Дата рождения */}
            <TextField
                id="date"
                label="День рождения"
                type="date"
                defaultValue="2020-04-01"
                className={classes.root.textField}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <div className={classes.root}>
                <Button variant="contained"
                        onClick={()=>{
                            props.handleOrder({
                                h: '15',
                                d: {
                                    cd: 'current date 08/04/2020',
                                    ad: 'arrival date 09/04/2020',
                                    dd: 'departure date 10/04/2020'
                                },
                                n: 'Vasya',
                                p: '380953333333',
                                e: 'Vasya@i.ua',
                                dob: '30.03.2020',
                                cid: '123321',
                                oid: '101',
                                hid: props.data,
                                dop: '01.04.2020',
                                am: '1000'
                            })
                        }}
                >Заказать</Button>
            </div>
        </form>
    );
}

export default function FormContainer(props) {
    const classes = useStyles();
    // console.log(props);
    return (
        <React.Fragment>
            <CssBaseline />
            {/*<Container maxWidth="sm, xs">*/}
                <Box component="div" m={15}>
                   <Forms data={props.data} handleOrder={props.handleClickOrder}/>
                </Box>
            {/*</Container>*/}
        </React.Fragment>
    );
}
