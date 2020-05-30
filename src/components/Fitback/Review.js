import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(4, 4),
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        padding: '1rem',
    },
    name: {
        fontWeight: '800',
        fontSize: '1.3rem'
    },
    star: {
        margin: '0 0 0.5rem 0'
    },
    text: {
        textIndent: '1.5rem',
        textAlign: 'justify'
    }
}));

export default function Review (props) {
    const classes = useStyles();
    const renderStar = (props) => {
        return (
            <div>
                тут будут звезды полные и пустые
            </div>
        );
    };
    return (
        <Box
            className={classes.paper}
            component={Paper}
        >
            <CssBaseline />
                <span className={classes.name}>Aleks Petrov</span>
                <div className={classes.star}>тут будут звезды</div>
                <span className={classes.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aliquam animi architecto blanditiis corporis cumque delectus deleniti dicta dolore exercitationem explicabo fugiat harum hic inventore ipsum, iure laboriosam libero nemo nisi nulla, odit officiis placeat praesentium provident quidem ratione reiciendis reprehenderit repudiandae rerum sit suscipit temporibus tenetur vel veniam veritatis voluptas! Esse eveniet id laudantium nisi placeat recusandae sit?
                </span>
        </Box>
    );
}