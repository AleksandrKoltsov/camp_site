import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        imgPath:
        'https://drive.google.com/uc?id=1QnThvRoMSy34uJpyOneLnS2JwgMaopKm&export=download',
    },
    {
        imgPath:
            'https://drive.google.com/uc?id=1BAdWLh87TgKSfjgg0V9IMcDN92haClzD&export=download',
    },
    {
        imgPath:
            'https://drive.google.com/uc?id=1EQf8oVc5BInmTQSA10Mb5rMc18tVWHHz&export=download',
    },
    {
        imgPath:
        'https://drive.google.com/uc?id=1igSFDPSvXZyx-7YOvyg3DfjmxqmfC_Y7&export=download',
    },
    {
        imgPath:
            'https://drive.google.com/uc?id=1l-BlVYJAxpo1loXzHQd9V1QhJKnx-nkO&export=download',
    },
];

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 1920,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        display: 'block',
        maxWidth: 1920,
        overflow: 'hidden',
        width: '100%',
    },
}));

function SwipeableTextMobileStepper() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStepChange = step => {
        setActiveStep(step);
    };

    return (
        <div className={classes.root}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {tutorialSteps.map((step, index) => (
                    <div key={index}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <video autoPlay className={classes.img} muted>
                                <source src={step.imgPath} />
                            </video>

                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
        </div>
    );
}

export default SwipeableTextMobileStepper;
