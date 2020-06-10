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
        fontSize: '1rem'
    },
}));

export default function AboutUs() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="lg">
            <CssBaseline />
            <div className={classes.paper}>
                    <span><b>Про нас:</b></span>
                    <h3>Расположение:</h3>
                    <p>База отдыха «Дубрава» ЮМЗ находится в Новомосковском районе Днепропетровской области, в селеХащевое</p>
                    <h3>База отдыха «Дубрава» размещение:</h3>
                <p>На территории базы отдыха Дубрава построены двухэтажные кирпичные домики:</p><br/>
                        <strong>трехместные:</strong> санузел, душ или ванна;<br/>
                        <strong>четырехместные:</strong> санузел, душ или ванна.<br/>
                        Не все домики имеют подачу горячей воды и отопление. Возле домиков есть столы и мангалы.<br/>
                        <p>Работает с мая по сентябрь.</p>
                    <h3>База отдыха «Дубрава» инфраструктура :</h3>
                    <ul>
                        <li>сауна,</li>
                        <li>футбольная площадка,</li>
                        <li>два бадминтонных корта,</li>
                        <li>баскетбольная площадка,</li>
                        <li>стол для пинг-понга,</li>
                        <li>спортивный комплекс,</li>
                        <li>бассейн,</li>
                        <li>пляж,</li>
                        <li>летняя эстрада,</li>
                        <li>видео-зал,</li>
                        <li>массажный кабинет,</li>
                        <li>стоматологический кабинет,</li>
                        <li>паркинг.</li>
                    </ul>
                    <h3>База отдыха «Дубрава» дополнительные услуги:</h3>
                    <ul>
                        <li>прогулки на лодках,</li>
                        <li>прогулки на катамаранах,</li>
                        <li>прокат спортинвентаря,</li>
                        <li>прокат пляжного инвентаря,</li>
                        <li>прокат бытовой техники,</li>
                        <li>рыбалка.</li>
                    </ul>
                    <p>Есть открытый бассейн, корты, спортплощадка, столовая. По территории дорожки асфальтированные,
                        фонарики.</p>
                        <p>База отдыха «Дубрава» работает с мая по сентябрь</p><br/>
            </div>
        </Container>
    );
}