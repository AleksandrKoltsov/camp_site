import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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
}));

function RoadMap(props){
  const classes = useStyles();
  const theme = useTheme();
  return(
    <path
  className={`${classes.road} ${props.data.className}`}
 d={props.data.d}
 id={props.data.id} />
  )
}

export default RoadMap;
