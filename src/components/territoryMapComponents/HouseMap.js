import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  star:{
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

function HouseMap(props){
  const theme = useTheme();
    const classes = useStyles();
    return (
        <path className={`${classes.star} ${props.data.className}`}
            id={props.data.id}
            d={props.data.d}
            transform={props.data.transform||'none'}/>)
}
export default HouseMap;
