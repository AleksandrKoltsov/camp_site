import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

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
            width: 200,
        },
    },
}));

export function Forms() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
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
            <TextField id="outlined-basic" label="Телефон" variant="outlined" />

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

        </form>
    );
}








export  function FormContainer(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
                <Box component="span" m={2}>
                   <Forms />
                </Box>
            </Container>
        </React.Fragment>
    );
}
