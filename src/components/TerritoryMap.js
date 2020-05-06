import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextMap from './territoryMapComponents/TextMap.js';
import HouseMap from './territoryMapComponents/HouseMap.js';
import RoadMap from './territoryMapComponents/RoadMap.js';
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
      margin:'100px',
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

export default function TerritoryMap(){
    const classes = useStyles();
    const theme = useTheme();
    const txt = getTextPath();
    const roads = getRoadPath();
    const houses = getHousesPath();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
    const [state, setState] = React.useState({
        button:(<FullscreenIcon/>),
        isOpen:false,
  })

const date = (
<div>
<Typography>
Выберите желаемые даты
</Typography>
  <TextField
    id="arrival"
    label="Arrival"
    type="date"
    defaultValue="2017-05-24"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
  <TextField
    id="departure"
    label="Departure"
    type="date"
    defaultValue="2017-05-24"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
  </div>
);

const body = (
  <svg id="svgTerritoryMap" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1575.8614 598.57491" onClick={(ev)=>console.log(ev.target)}>
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
   {
   roads.map((e,i)=>{return <RoadMap data={e} key={e.id}/>;})
  }{
   txt.map((e,i)=>{return <TextMap data={e} key={e.id}/>;})
  }{
   houses.map((e,i)=>{return <HouseMap data={e} key={e.id}/>;})
  }</g>
  </svg>
)

  const handleOpen = () => {
    console.log(window.screen.orientation);
   let button;
   state.isOpen?button = (<FullscreenIcon/>):button = (<FullscreenExitIcon/>);
   setState({...state, button:button, isOpen:!state.isOpen, isRotate:state.isOpen?0:90,});
 };

  return (<div>
<Card className={classes.card}>
<CardContent className={classes.cardContent}>
<Grid  container direction="row">
<Grid item xs={9}>
{body}
</Grid>
<Grid item xs={1}>
{date}
</Grid>
</Grid>
</CardContent>
<CardActions
className={classes.cardActions}>
<IconButton className={classes.fullScreenBtn} onClick={handleOpen}>
{state.button}
</IconButton>
</CardActions>
</Card>
<Dialog fullScreen open={state.isOpen} onClose={handleOpen} TransitionComponent={Transition}>
<Box className={classes.fullScreen}>
{body}
</Box>
<BottomNavigation className={classes.bottomNavigation}>
      <BottomNavigationAction width="100%" label="Close" onClick={handleOpen} icon={<FullscreenExitIcon />} />
    </BottomNavigation>
</Dialog>
</div>);
}


function getRoadPath(){
  return [
    {
    className:'road',
    d:"m -522.39966,-97.563426 40.61393,217.438836",
    id:"path963",
  },
    {
    className:"road",
    d:"m -565.91462,111.61822 84.12889,8.25719",
    id:"path965",
  },
    {
      className:"road",
    d:"m -541.25614,173.547 59.47041,-53.67159",
    id:"path967",
  },
    {
      className:"road",
    d:"m -362.84489,73.084762 -118.94084,46.790648 v 0",
    id:"path969",
  },
    {
      className:"road",
    d:"m -481.78573,119.87541 15.95547,4.12856 14.50501,101.83844 17.40595,27.5239",
    id:"path971",
  },
    {
      className:"road",
    d:"m -214.89408,40.056084 c 25.61857,23.771015 8.90142,35.865125 21.75746,53.671613 h -7.2525 c -48.89932,13.053103 -104.0036,2.557826 -162.45577,-20.642935 l 13.05449,-22.019094 z",
    id:"path973",
  },
    {
      className:"road",
    d:"M -200.38912,93.727697 65.052048,52.441848",
    id:"path975",
  },
    {
      className:"road",
    d:"M -214.89408,40.056084 18.636094,23.541757 -7.4728779,-23.248881",
    id:"path977",
  },
    {
      className:"road",
    d:"M 18.636094,23.541757 65.052048,52.441848 V 73.084762 L 51.323849,103.52803",
    id:"path979",
  },
    {
      className:"road",
    d:"M 65.052048,52.441848 79.557013,9.7797959 51.99756,-35.634637",
    id:"path981",
  },
    {
      className:"road",
    d:"m 51.323849,103.52803 135.482061,4.21203 427.881,84.44653 173.25651,73.98807 30.28091,3.64407",
    id:"path985",
  },
    {
      className:"road",
    d:"m 854.53889,216.38398 c 14.44783,-18.58701 12.87411,-44.87211 7.58318,-73.4472 -51.82457,-13.19312 -126.41016,34.06867 -153.20978,22.58918 L 684.41471,52.441848",
    id:"path987",
  },
    {
      className:"road",
    d:"M 708.91229,165.52596 C 591.06897,105.15823 585.43077,147.51244 537.91439,151.52787 l 66.72293,-64.681142",
    id:"path989",
  },
    {
      className:"road",
    d:"m 611.71385,133.8043 16.13142,-19.43368",
    id:"path991",
  },
    {
      className:"road",
    d:"M 604.63732,86.846728 539.36489,59.322832 C 520.31695,110.6097 519.41507,77.118209 506.00347,132.26116",
    id:"path993",
  },
    {
      className:"road",
    d:"m 506.00347,132.26116 -37.71299,15.13814 c -75.46789,-27.55453 -57.58454,6.58028 -130.54484,-24.77152",
    id:"path999",
  },
    {
      className:"road",
    d:"m 436.20356,84.983957 c -16.95739,30.748293 1.31557,49.780583 32.08692,62.415343",
    id:"path1003",
  },
    {
      className:"road",
    d:"M 337.74564,122.62778 269.57226,90.975293 259.41877,64.827598",
    id:"path1005",
  },
    {
      className:"road",
    d:"M 269.57226,90.975293 170.93839,66.203803 65.052048,52.441848",
    id:"path1007",
  },
    {
      className:"road",
    d:"M 170.93839,66.203803 173.83941,42.808467 127.42345,-3.9821397",
    id:"path1009",
  },
    {
      className:"road",
    d:"m 173.83941,42.808467 65.27237,-44.0382189 68.17342,-8.2571612 1.45051,-56.4240129 -24.65846,-53.671594",
    id:"path1011",
  },
    {
      className:"road",
    d:"m 308.73571,-65.910926 31.91095,-13.761967 -1.45048,-13.761939 7.25247,-15.138148 21.75747,15.138148",
    id:"path1013",
  },
    {
      className:"road",
    d:"m 364.49214,-150.29138 13.84639,52.548296 -10.13241,4.308252 -7.30378,53.592211 14.3592,69.57783 -67.97634,-39.2221221",
    id:"path1015",
  },
    {
      className:"road",
    d:"M 364.49214,-18.434075 332.18396,4.920732",
    id:"path1017",
  },
    {
      className:"road",
    d:"m -418.08415,94.44748 39.48779,66.17195 30.2569,4.86559 6.66679,34.05908 7.21297,12.43543",
    id:"path1021",
  },
    {
      className:"road",
    d:"m -451.32525,225.84241 18.8819,-16.56712",
    id:"path1023",
  },
    {
      className:"road",
    d:"m -370.62543,241.37043 36.16573,-29.3909 59.45469,-43.57518 c 1.41658,0.0567 2.2384,-1.68978 3.58979,-1.94621 0.50291,-0.0954 1.02569,0 1.53851,0",
    id:"path1025",
  },
    {
      className:"road",
    d:"m -269.87671,166.45814 96.41174,-30.16662 28.71842,-9.73117 127.694272,-24.81448 68.376127,1.78216",
    id:"path1027",
  },
    {
      className:"road",
    d:"m 818.22433,269.81873 36.31456,-53.43475",
    id:"path1670",
  },
];
}


function getHousesPath(){
  return [
  {
className:"star",
id:"path1054-10-3",
 d:"m -291.61788,88.445538 -4.29696,0.518385 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1539.623,-223.76957)" },
  {

 className:"star",
  id:"path1054",
  d:"m -500.7357,48.175126 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
  transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)"},
     {
 className:"star",
id:"path1054-6",
d:"m -481.32482,38.957627 -4.29696,0.518385 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106312 z",
transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)"},
     {
 className:"star",
 id:"path1054-1",
 d:"m -479.97588,55.530686 -4.29697,0.518385 -1.82084,-3.926469 3.17162,-2.945076 3.78101,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)"},
     {
 className:"star",
 id:"path1054-8",
 d:"m -494.04369,61.697404 -4.29697,0.518385 -1.82084,-3.926469 3.17162,-2.945077 3.78101,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)"},
     {
 className:"star",
 id:"path1054-7",
 d:"m -499.70629,102.31466 -4.29696,0.51838 -1.82085,-3.926468 3.17162,-2.945076 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)"},
     {
 className:"star",
  id:"path1054-9",
  d:"m -492.96141,107.11625 -4.29697,0.51839 -1.82085,-3.92647 3.17162,-2.94508 3.78102,2.10632 z",
  transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)"},
     {
 className:"star",
 id:"path1054-2",
 d:"m -477.66332,69.213109 -4.29696,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-0",
 d:"m -444.90264,57.265077 -4.29696,0.518384 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-3",
 d:"m -437.76384,56.218507 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-4",
 d:"m -434.49346,63.576905 -4.29696,0.518385 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106311 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-06",
 d:"m -427.40758,62.623048 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-15",
 d:"m -423.25145,70.049565 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-37",
 d:"m -416.30187,69.163846 -4.29696,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-45",
 d:"m -413.37212,55.673432 -4.29697,0.518385 -1.82085,-3.926469 3.17163,-2.945076 3.78101,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-25",
 d:"m -402.60704,62.282365 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-30",
 d:"m -401.51689,69.368207 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-20",
 d:"m -398.0421,55.400895 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-04",
 d:"m -390.95629,54.378892 -4.29696,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-22",
 d:"m -386.18694,60.033967 -4.29697,0.518385 -1.82084,-3.926469 3.17162,-2.945077 3.78101,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-5",
 d:"m -379.23735,59.148209 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-94",
 d:"m -375.42186,65.48462 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-91",
 d:"m -373.24156,53.561311 -4.29697,0.518385 -1.82085,-3.92647 3.17162,-2.945076 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-77",
 d:"m -365.95134,59.148209 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-59",
 d:"m -364.58867,66.506638 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-12",
 d:"m -360.5688,52.607407 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-88",
 d:"m -353.68733,51.721696 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-50",
 d:"m -349.05428,58.807588 -4.29697,0.518384 -1.82084,-3.926469 3.17162,-2.945076 3.78101,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-96",
 d:"m -341.96843,54.106355 -4.29697,0.518385 -1.82085,-3.92647 3.17162,-2.945076 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-56",
 d:"m -335.08693,46.816102 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-11",
 d:"m -339.03868,62.350511 -4.29697,0.518384 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-598",
 d:"m -325.68453,61.73729 -4.29696,0.518385 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-48",
 d:"m -317.78105,60.44275 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-10",
 d:"m -291.61788,88.445538 -4.29696,0.518385 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-304",
 d:"m -303.47307,87.423543 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-44",
 d:"m -323.23174,86.810368 -4.29696,0.518385 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-63",
 d:"m -333.11107,88.309308 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-17",
 d:"m -348.03227,90.830235 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-21",
 d:"m -364.45241,94.441296 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-78",
 d:"m -379.71428,95.122617 -4.29697,0.518385 -1.82085,-3.92647 3.17162,-2.945076 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-57",
 d:"m -394.56731,99.755704 -4.29697,0.518386 -1.82085,-3.92647 3.17163,-2.945077 3.78101,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-85",
 d:"m -412.21385,104.32061 -4.29697,0.51839 -1.82085,-3.92647 3.17162,-2.945076 3.78102,2.106316 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-97",
 d:"m -428.29332,105.47887 -4.29697,0.51839 -1.82085,-3.92647 3.17162,-2.945079 3.78102,2.106309 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-53",
 d:"m -420.25359,105.20637 -4.29697,0.51839 -1.82084,-3.92647 3.17162,-2.945078 3.78101,2.106308 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
     {
 className:"star",
 id:"path1054-883",
 d:"m -404.65105,102.95794 -4.29697,0.51839 -1.82085,-3.92647 3.17162,-2.945077 3.78102,2.106312 z",
 transform:"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)" },
];
}
function getTextPath(){
return [
  {
  className:"text" ,
   x:"41.197899",
   y:"160.40532",
   id:"text2307",
   text:"р.САМАРА",
  },
    {
   className:"text",
   x:"-465.45053",
   y:"-51.404594",
   id:"text2337",
   text:'СПОРТПЛОЩАДКА',
  },
      {
   className:'text',
   x:"99.343437",
   y:"84.90287",
   id:"text2896",
   text:"2",
  },
    {
   className:"text",
   x:"138.79243",
   y:"87.789375",
   id:"text2900",
   text:"1",
  },
     {
   className:"text",
   x:"32.567165",
   y:"83.308212",
   id:"text2900-8",
   text:"3",
  },
      {
   className:"text",
   x:"-1.1087945",
   y:"87.79834",
   id:"text2900-2",
   text:"4",
  },
      {
   className:"text",
   x:"-50.500202",
   y:"95.174973",
   id:"text2900-88",
   text:"5",
  },
      {
   className:"text",
   x:"-105.66463",
   y:"107.04174",
   id:"text2900-3",
   text:"6",
  },
      {
   className:"text",
   x:"-156.65965",
   y:"108.32464",
   id:"text2900-80",
   text:"7",
  },
      {
   className:"text",
   x:"-206.69252",
   y:"123.07793",
   id:"text2900-7",
   text:"8",
  },
      {
   className:"text",
   x:"-242.93425",
   y:"133.34106",
   id:"text2900-9",
   text:"8а",
  },
      {
   className:"text",
   x:"-265.38492",
   y:"137.51047",
   id:"text2900-6",
   text:"9",
  },
      {
   className:"text",
   x:"-323.11511",
   y:"140.39697",
   id:"text2900-65",
   text:"9б",
  },
      {
   className:"text",
   x:"-539.60345",
   y:"145.20784",
   id:"text2900-658",
   text:"36",
  },
      {
   className:"text",
   x:"-562.05408",
   y:"130.77528",
   id:"text2900-1",
   text:"37",
  },
      {
   className:"text",
   x:"47.320446",
   y:"2.1651804",
   id:"text2900-87",
   text:"10",
  },
      {
   className:"text",
   x:"21.341845",
   y:"6.3345847",
   id:"text2900-62",
   text:"11",
  },
      {
   className:"text",
   x:"-10.409774",
   y:"-39.208145",
   id:"text2900-93",
   text:"12",
  },
      {
   className:"text",
   x:"-33.501862",
   y:"-16.436779",
   id:"text2900-78",
   text:"15",
  },
      {
   className:"text",
   x:"-23.559435",
   y:"8.2589254",
   id:"text2900-5",
   text:"14",
  },
      {
   className:"text",
   x:"-57.235397",
   y:"-2.3249478",
   id:"text2900-25",
   text:"16",
  },
      {
   className:"text",
   x:"-72.309395",
   y:"-23.492695",
   id:"text2900-99",
   text:"17",
  },
      {
   className:"text",
   x:"-95.722214",
   y:"-21.247631",
   id:"text2900-935",
   text:"18",
  },
      {
   className:"text",
   x:"-113.68272",
   y:"-1.3627775",
   id:"text2900-81",
   text:"19",
  },
      {
   className:"text",
   x:"-108.87186",
   y:"21.408587",
   id:"text2900-782",
   text:"20",
  },
      {
   className:"text",
   x:"-145.1136",
   y:"18.201353",
   id:"text2900-34",
   text:"22",
  },
      {
   className:"text",
   x:"-137.41626",
   y:"-19.32329",
   id:"text2900-20",
   text:"21",
  },
      {
   className:"text",
   x:"-158.26328",
   y:"-1.3627774",
   id:"text2900-96",
   text:"23",
  },
      {
   className:"text",
   x:"-181.35538",
   y:"0.56156313",
   id:"text2900-207",
   text:"24",
  },
      {
   className:"text",
   x:"-197.39154",
   y:"-15.795332",
   id:"text2900-19",
   text:"25",
  },
      {
   className:"text",
   x:"-221.12508",
   y:"-12.908821",
   id:"text2900-67",
   text:"26",
  },
      {
   className:"text",
   x:"-236.19907",
   y:"8.579649",
   id:"text2900-64",
   text:"27",
  },
      {
   className:"text",
   x:"-232.99184",
   y:"29.426672",
   id:"text2900-58",
   text:"28",
  },
      {
   className:"text",
   x:"-272.76157",
   y:"-12.267374",
   id:"text2900-0",
   text:"29",
  },
      {
   className:"text",
   x:"-282.70395",
   y:"29.426672",
   id:"text2900-4",
   text:"30",
  },
      {
   className:"text",
   x:"-305.79605",
   y:"32.313183",
   id:"text2900-89",
   text:"31",
  },
      {
   className:"text",
   x:"-320.54938",
   y:"9.221096",
   id:"text2900-70",
   text:"32",
  },
      {
   className:"text",
   x:"-343.64142",
   y:"11.786883",
   id:"text2900-13",
   text:"33",
  },
      {
   className:"text",
   x:"-354.86676",
   y:"-10.343034",
   id:"text2900-26",
   text:"34",
  },
      {
   className:"text",
   x:"-378.27954",
   y:"-7.4565225",
   id:"text2900-02",
   text:"35",
  },
      {
   className:"text",
   x:"-565.58209",
   y:"-35.038738",
   id:"text2900-94",
   text:"54",
  },
      {
   className:"text",
   x:"-500.47519",
   y:"-63.262402",
   id:"text2900-03",
   text:"57",
  },
      {
   className:"text",
   x:"-496.30576",
   y:"-12.908821",
   id:"text2900-86",
   text:"56",
  },
      {
   className:"text",
   x:"-542.81067",
   y:"6.3345852",
   id:"text2900-76",
   text:"53",
  },
      {
   className:"text",
   x:"-488.6084",
   y:"29.426672",
   id:"text2900-75",
   text:"55",
  },
      {
   className:"text",
   x:"-295.8772",
   y:"139.10374",
   id:"text2900-6-8",
   text:"9а",
  },
      {
   className:"text",
   x:"545.92352",
   y:"42.428532",
   id:"text2900-675",
   text:'1а',
  },
{
 className:"text",
  x:"171.83917",
 y:"35.448444",
 id:"text1631",
 transform:"scale(1.0462537,0.95579111)",
 text:"ВЫСТАВОЧНЫЙ",
   },
    {
 className:"text",
 x:"202.15883",
 y:"46.455204",
 id:"text1635",
 transform:"scale(1.0462537,0.95579109)",
 text:"ЗАЛ",
},
    {
 className:"text",
 x:"230.56377",
 y:"65.658348",
 id:"text1639",
 transform:"scale(1.0462537,0.95579111)",
 text:"ОРГКОМИТЕТ",
},
    {
 className:"text",
 x:"332.02753",
 y:"127.55008",
 id:"text1715",
 transform:"scale(1.0462537,0.95579109)",
 text:"АДМИНИСТРАЦИЯ",
},
    {
 className:"text",
 x:"419.03064",
 y:"110.70308",
 id:"text1719",
 transform:"scale(1.0462537,0.95579111)",
 text:"МАГАЗИН",
},
    {
 className:"text",
 x:"545.65118",
 y:"169.00371",
 id:"text1723",
 transform:"scale(1.0462537,0.95579111)",
 text:"ТАНЦПЛОЩАДКА",
},
    {
 className:"text",
 x:"590.79156",
 y:"90.797478",
 id:"text1727",
 transform:"scale(1.0462537,0.95579112)",
 text:"ЛЕТНИЙ",
},
    {
 className:"text",
 x:"587.44672",
 y:"103.37366",
 id:"text1735",
 transform:"scale(1.0462537,0.95579111)",
 text:"КИНОЗАЛ",
},
    {
 className:"text",
 x:"705.55579",
 y:"186.18105",
 id:"text1743",
 transform:"scale(1.0462537,0.95579111)",
 text:"АВТОСТОЯНКА",
},
    {
 className:"text",
 x:"792.27423",
 y:"283.57581",
 id:"text1747",
 transform:"scale(1.0462537,0.95579109)",
 text:"ПЛЯЖ",
},
];
}
