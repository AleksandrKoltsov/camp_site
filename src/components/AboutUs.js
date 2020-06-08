import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

export default function AboutUs() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="lg">
            <CssBaseline />
            <div className={classes.paper}>
                <h1>Про нас</h1>
                <hr/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ipsa iste magni maxime, natus soluta veritatis. A accusantium ad asperiores debitis dicta dolorem, doloribus enim expedita illum, ipsam ipsum molestiae nesciunt non obcaecati odit quas quo. A ab accusamus ad aliquam aperiam autem commodi cupiditate deserunt eveniet ex exercitationem explicabo fugit id illum impedit molestias odio perspiciatis quae quasi quia quis quos rem reprehenderit repudiandae rerum, tempora temporibus ullam velit veniam voluptate? Incidunt obcaecati quisquam quos? Commodi cupiditate dolore dolores, dolorum eligendi fuga harum illo impedit ipsam iure minus, nesciunt nulla omnis optio placeat quasi qui reiciendis rem totam ut velit veritatis vero. Accusantium aut commodi consequuntur dolore explicabo itaque neque nulla quaerat totam voluptates! Amet autem cumque cupiditate, dicta dignissimos dolor earum error facere hic in iste labore libero magni minus nemo neque numquam pariatur perspiciatis possimus quidem repellat sapiente ullam vero. Dicta nobis odio quidem! Debitis deserunt et labore numquam provident quia sapiente, similique. Ad amet animi culpa cumque, debitis delectus dignissimos dolores eos error esse est eveniet expedita, harum illo in iste iure iusto laborum laudantium minus modi molestias, nesciunt nostrum nulla numquam obcaecati praesentium quibusdam quisquam ratione reprehenderit repudiandae saepe tenetur totam ullam unde veritatis voluptas.!
                </p>
                <img src="https://lh3.googleusercontent.com/proxy/_qviZ3i-aeA72alsNkDFWI9BnNXeSyCwJX_EaC6zwakRzFHNarKiBpXenSeD3I4Crpm7ebPGxEpGHpOGZaQQ1J0MzZBgoD8rxmJV5FOZwl3s" alt="дубрава"/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis delectus deserunt dignissimos distinctio ea ex iure libero nisi non optio placeat provident quam quisquam quos vero vitae, voluptas. A est et, id ipsum iste, laudantium maiores molestiae nihil numquam, perferendis quos tempore voluptatem! Alias beatae consequuntur dicta doloremque eveniet, exercitationem, perspiciatis, sed sequi totam velit voluptates voluptatum? Ad aut culpa eius exercitationem incidunt minima repellendus sit soluta voluptas. Ex, maiores, vero! Animi at deserunt expedita inventore ipsam nam porro velit. Harum, ipsam modi omnis provident quos voluptates? Autem beatae commodi cum delectus deleniti, eaque est incidunt ipsum maxime minima minus molestiae numquam perferendis porro provident quis reiciendis repudiandae saepe sequi sint, sunt temporibus tenetur ullam, vel vero? Accusamus ad adipisci alias asperiores aspernatur atque aut consectetur corporis cumque cupiditate debitis deserunt doloremque eligendi eum excepturi explicabo illo ipsa labore magni, necessitatibus odio officiis quis quisquam saepe sapiente sint sit suscipit tempora tenetur vero. A ab alias, amet assumenda cumque debitis dignissimos eius ex explicabo iste itaque labore magnam maiores modi nemo nobis nostrum placeat quasi qui quod quos ratione, repellat reprehenderit repudiandae sint ullam vero. Culpa deleniti eos excepturi expedita iste magnam modi pariatur perferendis, quidem vel veritatis voluptatibus?
                </p>
            </div>
        </Container>
    );
}