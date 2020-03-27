import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        imgPath:

            'https://www.videvo.net/videvo_files/converted/2016_01/preview/Forest_15_3b_Videvo.mov47209.webm',
    },
    {
        imgPath:
            'https://www.videvo.net/videvo_files/converted/2016_11/preview/GOPR6239_1.mov34724.webm',
    },
    {
        imgPath:
            'https://cdn.videvo.net/videvo_files/video/free/2019-05/small_watermarked/190416_10_Drone1_04_preview.webm',
    },
    {
        imgPath:
            'https://www.videvo.net/videvo_files/converted/2017_12/preview/171124_B1_HD_001.mp494977.webm',
    },
    {
        imgPath:
            'https://www.videvo.net/videvo_files/converted/2015_05/preview/Barley_3_Videvo.mov94814.webm',
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
