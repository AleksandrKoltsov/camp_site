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
import Grid from '@material-ui/core/Grid';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles(theme => ({
  tile:{
    height: '100% !important',
  },
  gridList:{
    width:'100%',
    transform: 'translateZ(0)',
    height:'calc(100vh / 3)',
  },
  title: {
    color: 'white',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  textBlock:{
    color:'#221F1F',
  },
}));

const textForRows = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
];
const sliderForRows = [];

export default function SliderCards(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const {handleClickInfo, data} = props;
  sliderForRows.push(data.slice(0, Math.floor(data.length / 3)))
  sliderForRows.push(data.slice(Math.floor(data.length / 3), Math.floor((data.length * 2)/3)))
  sliderForRows.push(data.slice(Math.floor((data.length * 2)/3)))


  const handleStepChange = step => {
      setActiveStep(step);
  };

  return (
    <div>
    <Grid
    direction="column"
    container>
    {textForRows.map((e,i)=>{
      return (<Grid item container
        key={i}
        direction={i%2===0?"row-reverse":"row"}
        className={classes.row}
        >
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
      <AutoPlaySwipeableViews
          axis={i%2===0?'x':'x-reverse'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          className={classes.slider}

      >{sliderForRows[i].map((tile, index) => (
        <GridList
        className={classes.gridList}
        spacing={1}
        key={index}
        >
            <GridListTile cols={2} className={classes.tile} >
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
                  onClick={handleClickInfo}
                  data-id={tile.house}
                  >
                    <InfoIcon
                    className={classes.title}
                    />
                  </IconButton>
                }
              />
            </GridListTile>
            </GridList>
          ))}
        </AutoPlaySwipeableViews>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Typography className={classes.textBlock}>
          {e}
        </Typography>
      </Grid>
      </Grid>)})}
      </Grid>
    </div>)
  }
