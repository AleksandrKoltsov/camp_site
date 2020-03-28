import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Typography from '@material-ui/core/Typography';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: "100%",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: 'white',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  textBlock:{
    color:'white',
  },
}));

export default function SliderCards(props) {//получаем массив данных для карточек
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = step => {
      setActiveStep(step);
  };

  return (
    <div className={classes.root}>
    <AutoPlaySwipeableViews
        axis={'x-reverse'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
    >{props.data.map((tile, index) => (
      <GridList cellHeight={400} spacing={1} className={classes.gridList} key={index}>
          <GridListTile>
            <img src={tile.img} alt={tile.title}/>
            <GridListTileBar
            subtitle={`от ${tile.price}`}
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton
                aria-label={`star ${tile.title}`}
                onClick={props.handleClickInfo}
                data-id={tile.id}
                >
                  <InfoIcon
                  className={classes.title}
                  />
                </IconButton>
              }
            />
          </GridListTile>
          <GridListTile className={classes.textBlock}>
          <Typography paragraph>
            Это описание Домика
          </Typography>
          <Typography>
            {tile.text}
          </Typography>
          </GridListTile>
          </GridList>
        ))}
      </AutoPlaySwipeableViews>
    </div>)
  }
