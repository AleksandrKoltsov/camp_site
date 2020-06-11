import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
      imgPath1:'https://drive.google.com/uc?export=download&id=1WA6wnPzefEUHLcPUhHDKZJwcBuItTDAJ#.mp4',
      imgPath2:'https://drive.google.com/uc?export=download&id=1IPbvqylwMpnOUXcnVv7HipN0BV-KxzuE#.mp4',
      imgPath3:'https://drive.google.com/uc?export=download&id=1SQKLkfI0fLal1owsQDfr322uv7tZrG7a#.mp4',
          // 'https://www.videvo.net/videvo_files/converted/2016_01/preview/Forest_15_3b_Videvo.mov47209.webm',
  },
    {
        imgPath1:'https://drive.google.com/uc?export=download&id=1qWTRzhoMS5omhC6i8XFVMTuLscxeuQ8F#.mp4',
        imgPath2:'https://drive.google.com/uc?export=download&id=1Iwk1KIz9o4buHpp3mPGKC0G5fiIU-D07#.mp4',
        imgPath3:'https://drive.google.com/uc?export=download&id=1zns24o0pQBnAtfOhHpxkSC9ZImaOzflX#.mp4',
            // 'https://www.videvo.net/videvo_files/converted/2016_11/preview/GOPR6239_1.mov34724.webm',
    },
    {
        imgPath1:'https://drive.google.com/uc?export=download&id=1Ivgl408v3hqGqGUxr2JXyuzraFPsA83n#.mp4',
        imgPath2:'https://drive.google.com/uc?export=download&id=1vcNN-QJ0UaryFmZQs-3i6qTih13sWqVB#.mp4',
        imgPath3:'https://drive.google.com/uc?export=download&id=1FiGMGBlQxTJUSdDCBe42CkVolIsw4vY1#.mp4',
            // 'https://cdn.videvo.net/videvo_files/video/free/2019-05/small_watermarked/190416_10_Drone1_04_preview.webm',
    }
];

function SwipeableTextMobileStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStepChange = ({target}) => {
      let step = activeStep + 1;
      if(step >= tutorialSteps.length){
          step = 0;
      }
      setActiveStep(step);
      target.currentTime = 0;
    };

    return (
        <div className={classes.root}>
            <AutoPlaySwipeableViews
                axis={'x'}
                index={activeStep}
                enableMouseEvents
            >
                {tutorialSteps.map((step, index) => (
                          <video key={index}
                            autoPlay
                            muted
                            className={classes.img}
                            onEnded={handleStepChange}
                            >
                            <source src={step.imgPath1} type="video/mp4" />
                            <source src={step.imgPath2} type="video/mp4" />
                            <source src={step.imgPath3} type="video/mp4" />
                          </video>
                ))}
            </AutoPlaySwipeableViews>
        </div>
    );
}

export default SwipeableTextMobileStepper;
