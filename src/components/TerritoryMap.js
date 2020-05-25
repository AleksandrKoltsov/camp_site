import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextMap from './territoryMapComponents/TextMap';
import HouseMap from './territoryMapComponents/HouseMap';
import RoadMap from './territoryMapComponents/RoadMap';
import IconButton from '@material-ui/core/IconButton';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Modal from '@material-ui/core/Modal';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Box from '@material-ui/core/Box';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import StaticDateRangePickerExample from './DatePicker';
import isWithinInterval from "date-fns/isWithinInterval";
import DescriptionAlerts from "./Alert";


const useStyles = makeStyles(theme => ({
  territory: {
      fill: '#ecdc99',
      stroke: '#000000',
      strokeWidth: '0.26385584px',
      strokeLinecap: 'butt',
      strokeLinejoin: 'miter',
      strokeOpacity: 1,
      fillOpacity: 1,
  },
  road: {
      fill: 'none',
      stroke: '#ff8b00',
      strokeWidth: 4.5,
      strokeLinecap: 'butt',
      strokeLinejoin: 'miter',
      strokeOpacity: 1,
      strokeMiterlimit: 4,
      strokeDasharray: 'none',
  },
  river: {
      fill: '#18dcea',
      stroke: '#000000',
      strokeWidth: '0.26385584px',
      strokeLinecap: 'butt',
      strokeLinejoin: 'miter',
      strokeOpacity: 1,
      fillOpacity: 1,
  },
    house1: {
        fill: '#008080',
        stroke: '#000000',
        strokeWidth: 0.9909,
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeMiterlimit: 4,
        strokeDasharray: 'none',
        strokeOpacity: 1,
    },
    house2: {
        fill: '#008080',
        stroke: '#000000',
        strokeWidth: '0.25435415px',
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeOpacity: 1,
    },
    flowRoot: {
        fill: 'black',
        fillOpacity: 1,
        stroke: 'none',
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '74.66666667px',
        lineHeight: '1.25',
        letterSpacing: '0px',
        wordSpacing: '0px',
    },
    house3: {
        fill: '#008080',
        stroke: '#000000',
        strokeWidth: '0.25435415px',
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeOpacity: 1,
    },
    fullScreenBtn:{
      color:'white',
    },
    card: {
      backgroundColor:'transparent',
    },
    cardActions: {
      background:'rgba(0,0,0,0.3)',
      justifyContent:'flex-end',
    },
    cardContent:{
      padding:0,
      // margin:'100px',
    },
    bottomNavigation:{
      backgroundColor:'rgba(0,0,0,0.3)',
      color:'white',
    },
    fullScreen:{
      width:"100vw",
      height:"100vh",
      spacing:3,

    },
    textField: {
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TerritoryMap(props){
    const classes = useStyles();
    const theme = useTheme();
    const {data, date, handleChangedDate, handleClickInfo} = props;
    const [error, setError] = React.useState(<div></div>);
    const [errorMessage, setErrorMessage] = React.useState('Нажаль будинок зайнятий');

    const handleError = (ev)=>{
      const house = ev.target.dataset.id;
      setError(<DescriptionAlerts title='Error'
      message={`Нажаль обраний Вами будинок №${house} зарезервований у вказані дати.`}
      isOpen={true}/>);
    }
    const [houses, setHouses] = React.useState(<HouseMap
      booked={[]}
      handleError={handleError}
      handleClick={handleClickInfo}
      id={'starFree'}/>);
    const [isOpen, setIsOpen] = React.useState(false);
    const [button, setButton] = React.useState(<FullscreenIcon/>);
    const getBookedHouses = (start, end, arr)=>{

      return arr.map(({house,booked})=>{
        const isBook = booked.some(({ad,dd})=>{
          return isWithinInterval(new Date(ad), {start, end})||
          isWithinInterval(new Date(dd), {start, end})||
          isWithinInterval(start, {start:new Date(ad), end:new Date(dd)})||
          isWithinInterval(end, {start:new Date(ad), end:new Date(dd)})
        });
        if(isBook){
          return house;
        }
      });
    }
    const showBookedHouses = (date)=>{
      const start = date[0].toDate();
      const end = date[1].toDate();
      setError(<div></div>)
      setHouses(<HouseMap
        handleError={handleError}
         booked={getBookedHouses(start, end, data)}
         handleClick={handleClickInfo}
         id={'starFree'}/>)
    }

    const rangePicker = (
      <StaticDateRangePickerExample
      date = {date}
      handleChangedDate = {handleChangedDate}
      componentHandler = {showBookedHouses}
      disabledDates = {[]}/>
    );

    const body = (
      <svg id="svgTerritoryMap" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1575.8614 598.57491">
      <g transform="translate(645.05564,176.91246)">
      <path
      className={classes.territory}
      d="m -643.70728,43.863335 42.11598,-38.9876951 59.54326,-125.6269599 13.07047,-7.21995 155.39344,60.647494 98.75469,-46.207594 143.77522,47.651598 26.14099,2.887972 75.518281,-18.77184 113.277465,-18.77184 97.302394,-31.76773 85.68425,-4.33198 103.11153,-37.54368 24.68866,67.86744 78.42287,64.979443 v 5.775952 l 97.30243,33.211728 50.82959,28.879772 65.35238,1.443996 14.52277,8.663927 20.33183,115.519042 49.37736,-11.55193 62.44785,-17.32783 69.70918,14.43988 -24.6887,166.0586 43.56827,56.31555 10.16593,60.64752 h -13.07047 l -59.54329,-95.30323 c -18.48113,-2.19375 -29.78091,-22.23832 -40.6637,-43.31964 L 794.04499,279.23338 611.05834,201.25802 186.994,113.17474 l -206.223016,-4.33197 -123.443394,24.54778 -129.25245,43.31967 -90.04104,67.86744 -94.39789,18.77185 -21.78413,-127.07095 -59.54329,50.5396 -75.51829,-67.86746 z"
      id="path21" />
      <path
      className={classes.river}
      d="m -643.70728,43.863335 4.35683,181.942505 c 158.95559,238.71457 432.02037,26.6118 397.92335,50.53955 89.10092,-48.79267 157.670447,-75.43966 210.57989,-85.19526 212.03215,-19.2007 424.06427,6.25211 636.09646,90.97122 101.22082,43.31317 194.86162,87.70299 242.52991,138.62287 h 71.16148 l -59.54329,-95.30323 c -18.7772,-1.45776 -29.37238,-23.25392 -40.6637,-43.31964 L 794.04499,279.23338 611.05834,201.25802 186.994,113.17474 l -206.223016,-4.33197 -123.443394,24.54778 -129.25245,43.31967 -90.04104,67.86744 -94.39789,18.77185 -21.78413,-127.07095 -59.54329,50.5396 -75.51829,-67.86746 z"
      id="path23" />

      <path
      className={classes.house1}
      d="m -447.70195,-29.58095 18.96093,90.371231 c 2.77209,5.023904 6.66917,7.357479 12.00055,6.261306 l 37.68172,-7.096133 c 8.00946,-1.591736 6.39204,-6.403175 6.48034,-10.644165 l -18.48087,-89.327704 c -2.07558,-2.994126 -2.99736,-6.65714 -10.56048,-6.470035 l -40.3219,7.513562 c -4.60887,2.128578 -5.58846,5.609755 -5.76029,9.391938 z"
      id="path1625"

      />
      <path
      className={classes.house2}
      d="m 353.13546,98.136214 18.27433,-16.276897 -5.93912,-11.268641 16.4469,-15.859555 -3.65487,-4.590947 -2.28431,2.086774 -12.10675,-14.920504 -19.64492,-4.695265 -4.9112,-5.842989 6.05337,-5.529972 -11.87832,-15.9639053 -13.13469,10.9555903 3.0838,4.48663 -14.39105,11.790325 -5.25385,-13.251095 -7.99504,3.756214 -0.91368,1.46077 -2.05587,-3.338876 -32.43698,15.546538 -24.55612,-1.878108 -0.57109,-2.921478 -5.93917,3.338847 h 4.11178 l -0.22833,10.120887 -5.02542,0.626035 37.80502,9.077515 40.43198,-18.989735 22.72868,30.258374 z"
      id="path1627"
      />
      <path
      className={classes.house3}
      d="m 380.61811,113.69792 -14.16056,-10.19214 5.57838,-9.800148 7.72394,5.880119 3.00375,-5.096066 18.88076,13.328165 -3.86201,5.88007 z"
      id="path1761"
      />
      <path
      className={classes.house3}
      d="m 451.4208,107.03382 -1.7164,5.09608 6.43659,1.56802 -3.43287,9.80011 18.88072,7.44813 6.43662,-18.03226 -16.30606,-6.27206 z"
      id="path1763"
      />
         <flowRoot
      id="flowRoot2902"
          className={classes.flowRoot}><flowRegion
       id="flowRegion2904"><rect
         id="rect2906"
         width="24.187506"
         height="80.092522"
         x="9345.9873"
         y="3294.4202" /></flowRegion><flowPara
       id="flowPara2908" /></flowRoot>
       {<RoadMap />}
      {<TextMap />}
      {houses}
      </g>
      </svg>
    )

      const handleOpen = () => {
       if(isOpen){
         setButton(<FullscreenIcon/>)
         setIsOpen(!isOpen);
         return;
      }
        setButton(<FullscreenExitIcon/>);
        setIsOpen(!isOpen)
        return;
     };

      return (<div>
    {error}
    <Card className={classes.card}>
    <CardContent className={classes.cardContent}>
    <Grid
    container
    justify="space-around"
    alignItems="stretch">
    <Grid item xs={12} sm={12} md={8} lg={9} xl={10}>
    {body}
    </Grid>
    <Grid item xs={12} sm={12} md={4} lg={3} xl={2}>
    {rangePicker}
    </Grid>
    </Grid>
    </CardContent>
    <CardActions
    className={classes.cardActions}>
    <IconButton className={classes.fullScreenBtn} onClick={handleOpen}>
    {button}
    </IconButton>
    </CardActions>
    </Card>
    <Dialog fullScreen open={isOpen} onClose={handleOpen} TransitionComponent={Transition}>
    <Box className={classes.fullScreen}>
    {body}
    </Box>
    <BottomNavigation className={classes.bottomNavigation}>
          <BottomNavigationAction width="100%" label="Close" onClick={handleOpen} icon={<FullscreenExitIcon />} />
        </BottomNavigation>
    </Dialog>
    </div>);
}
