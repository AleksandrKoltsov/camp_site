import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  starFree:{
      fill: 'rgba(20, 255, 20, 0.678)',
      fillOpacity: .5,
      stroke: 'rgba(20, 255, 20, 0.678)',
      strokeWidth: 1,
      strokeMiterlimit: 4,
      strokeDasharray: 'none',
      strokeOpacity: 1,
      transition:' all .3s',
      '&:hover':{
          strokeWidth: 3,
          cursor: 'pointer',
      }
  },
  starBookd:{
      fill: 'rgba(20, 255, 20, 0.678)',
      fillOpacity: .5,
      stroke: 'rgba(20, 255, 20, 0.678)',
      strokeWidth: 1,
      strokeMiterlimit: 4,
      strokeDasharray: 'none',
      strokeOpacity: 1,
      transition:' all .3s',
      '&:hover':{
          strokeWidth: 3,
          cursor: 'pointer',
      }
  }
}));
const houses = [
{
id:"svg-house-1a",
d:"m -291.61788,88.445538 -4.29696,0.518385 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106312 z",
transform:"matrix(3.3526801,0,0,3.0627962,1539.623,-223.76957)",
},
{
id:"svg-house-54",
d:"m -500.7357,48.175126 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
},
   {
id:"svg-house-57",
d:"m -481.32482,38.957627 -4.29696,0.518385 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106312 z",
},
   {
id:"svg-house-56",
d:"m -479.97588,55.530686 -4.29697,0.518385 -1.82084,-3.926469 3.17162,-2.945076 3.78101,2.106312 z",
   },{
id:"svg-house-53",
d:"m -494.04369,61.697404 -4.29697,0.518385 -1.82084,-3.926469 3.17162,-2.945077 3.78101,2.106312 z",
   },{
id:"svg-house-37",
d:"m -499.70629,102.31466 -4.29696,0.51838 -1.82085,-3.926468 3.17162,-2.945076 3.78102,2.106312 z",
   },{
id:"svg-house-36",
d:"m -492.96141,107.11625 -4.29697,0.51839 -1.82085,-3.92647 3.17162,-2.94508 3.78102,2.10632 z",
   },{
id:"svg-house-55",
d:"m -477.66332,69.213109 -4.29696,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
   },{
id:"svg-house-35",
d:"m -444.90264,57.265077 -4.29696,0.518384 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106312 z",
   },{
id:"svg-house-34",
d:"m -437.76384,56.218507 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
   },{
id:"svg-house-33",
d:"m -434.49346,63.576905 -4.29696,0.518385 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106311 z",
   },{
id:"svg-house-32",
d:"m -427.40758,62.623048 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
   },{
id:"svg-house-31",
d:"m -423.25145,70.049565 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106312 z",
   },{
id:"svg-house-30",
d:"m -416.30187,69.163846 -4.29696,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
   },{
id:"svg-house-29",
d:"m -413.37212,55.673432 -4.29697,0.518385 -1.82085,-3.926469 3.17163,-2.945076 3.78101,2.106312 z",
   },{
id:"svg-house-27",
d:"m -402.60704,62.282365 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
   },{
id:"svg-house-28",
d:"m -401.51689,69.368207 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
   },{
id:"svg-house-26",
d:"m -398.0421,55.400895 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
   },{
id:"svg-house-25",
d:"m -390.95629,54.378892 -4.29696,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
   },{
id:"svg-house-24",
d:"m -386.18694,60.033967 -4.29697,0.518385 -1.82084,-3.926469 3.17162,-2.945077 3.78101,2.106312 z",
   },{
id:"svg-house-23",
d:"m -379.23735,59.148209 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106312 z",
   },{
id:"svg-house-22",
d:"m -375.42186,65.48462 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
   },{
id:"svg-house-21",
d:"m -373.24156,53.561311 -4.29697,0.518385 -1.82085,-3.92647 3.17162,-2.945076 3.78102,2.106312 z",
   },{
id:"svg-house-19",
d:"m -365.95134,59.148209 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106312 z",
   },{
id:"svg-house-20",
d:"m -364.58867,66.506638 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106312 z",
   },{
id:"svg-house-18",
d:"m -360.5688,52.607407 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106312 z",
   },{
id:"svg-house-17",
d:"m -353.68733,51.721696 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
   },{
id:"svg-house-16",
d:"m -349.05428,58.807588 -4.29697,0.518384 -1.82084,-3.926469 3.17162,-2.945076 3.78101,2.106312 z",
   },{
id:"svg-house-15",
d:"m -341.96843,54.106355 -4.29697,0.518385 -1.82085,-3.92647 3.17162,-2.945076 3.78102,2.106312 z",
   },{
id:"svg-house-12",
d:"m -335.08693,46.816102 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
   },{
id:"svg-house-14",
d:"m -339.03868,62.350511 -4.29697,0.518384 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106312 z",
   },{
id:"svg-house-11",
d:"m -325.68453,61.73729 -4.29696,0.518385 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106312 z",
   },{
id:"svg-house-10",
d:"m -317.78105,60.44275 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
   },{
id:"svg-house-1",
d:"m -291.61788,88.445538 -4.29696,0.518385 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106312 z",
   },{
id:"svg-house-2",
d:"m -303.47307,87.423543 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
   },{
id:"svg-house-3",
d:"m -323.23174,86.810368 -4.29696,0.518385 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106312 z",
   },{
id:"svg-house-4",
d:"m -333.11107,88.309308 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945077 3.78102,2.106312 z",
   },{
id:"svg-house-5",
d:"m -348.03227,90.830235 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106312 z",
   },{
id:"svg-house-6",
d:"m -364.45241,94.441296 -4.29697,0.518385 -1.82085,-3.926469 3.17162,-2.945076 3.78102,2.106312 z",
   },{
id:"svg-house-7",
d:"m -379.71428,95.122617 -4.29697,0.518385 -1.82085,-3.92647 3.17162,-2.945076 3.78102,2.106312 z",
   },{
id:"svg-house-8",
d:"m -394.56731,99.755704 -4.29697,0.518386 -1.82085,-3.92647 3.17163,-2.945077 3.78101,2.106312 z",
   },{
id:"svg-house-9",
d:"m -412.21385,104.32061 -4.29697,0.51839 -1.82085,-3.92647 3.17162,-2.945076 3.78102,2.106316 z",
   },{
id:"svg-house-9b",
d:"m -428.29332,105.47887 -4.29697,0.51839 -1.82085,-3.92647 3.17162,-2.945079 3.78102,2.106309 z",
   },{
id:"svg-house-9a",
d:"m -420.25359,105.20637 -4.29697,0.51839 -1.82084,-3.92647 3.17162,-2.945078 3.78101,2.106308 z",
   },{
id:"svg-house-8a",
d:"m -404.65105,102.95794 -4.29697,0.51839 -1.82085,-3.92647 3.17162,-2.945077 3.78102,2.106312 z",
 },
];

let c=[];

function HouseMap(props){
  const theme = useTheme();
    const classes = useStyles();
    return houses.map((e,i)=>{
      let num = e.id.split('-')[2];
      console.log(num)
      c.push(num)
      console.log(c)
      return (<path className={classes[props.id]}
        data-id={num}
        onClick={props.handleClick}
        key={e.id}
          id={e.id}
          d={e.d}
          transform={e.transform||"matrix(3.3526801,0,0,3.0627962,1128.6366,-178.40872)"}/>)
    });
}

export default HouseMap;
