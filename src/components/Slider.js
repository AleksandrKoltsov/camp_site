import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 1920,
        maxHeight:'100vh',
        overflow: 'hidden',
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

const tutorialSteps = [
  {
      imgPath:
      'https://drive.google.com/uc?export=download&id=1l-BlVYJAxpo1loXzHQd9V1QhJKnx-nkO#.mp4',
          // 'https://www.videvo.net/videvo_files/converted/2016_01/preview/Forest_15_3b_Videvo.mov47209.webm',
  },
    {
        imgPath:
        'https://drive.google.com/uc?export=download&id=1QnThvRoMSy34uJpyOneLnS2JwgMaopKm#.mp4',
            // 'https://www.videvo.net/videvo_files/converted/2016_11/preview/GOPR6239_1.mov34724.webm',
    },
    {
        imgPath:
        'https://drive.google.com/uc?export=download&id=1EQf8oVc5BInmTQSA10Mb5rMc18tVWHHz#.mp4',
            // 'https://cdn.videvo.net/videvo_files/video/free/2019-05/small_watermarked/190416_10_Drone1_04_preview.webm',
    },
    {
        imgPath:
        'https://drive.google.com/uc?export=download&id=1BAdWLh87TgKSfjgg0V9IMcDN92haClzD#.mp4',
            // 'https://www.videvo.net/videvo_files/converted/2017_12/preview/171124_B1_HD_001.mp494977.webm',
    },
    {
        imgPath:
        'https://drive.google.com/uc?export=download&id=1igSFDPSvXZyx-7YOvyg3DfjmxqmfC_Y7#.mp4',
            // 'https://www.videvo.net/videvo_files/converted/2015_05/preview/Barley_3_Videvo.mov94814.webm',
    },
];

function SwipeableTextMobileStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStepChange = step => {
          setActiveStep(step);
    };

    return (
        <div className={classes.root}>
            <AutoPlaySwipeableViews
                axis={'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {tutorialSteps.map((step, index) => (
                  <video
                  key={index}
                  autoPlay
                  loop
                  src={step.imgPath}
                  muted
                  className={classes.img}
                  >
                  </video>
                ))}
            </AutoPlaySwipeableViews>
        </div>
    );
}

export default SwipeableTextMobileStepper;
