import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  text : {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '10.17416668px',
      lineHeight: '1.25',
      fontFamily: 'sans-serif',
      letterSpacing: '0px',
      wordSpacing: '0px',
      fill: '#000000',
      fillOpacity: 1,
      stroke: 'none',
      strokeWidth: 0.25435415,
      userSelect: 'none',
  }
}));

function TextMap(props){
  const theme = useTheme();
    const classes = useStyles();
    return (
        <text
        key={props.data.id}
   className={`${classes.text} ${props.data.className}`}
   x={props.data.x}
   y={props.data.y}
   transform={props.data.transform||'none'}
   id={props.data.id}><tspan
     id={props.data.id}
     x={props.data.x}
     y={props.data.y}
    className={props.data.className}>{props.data.text}</tspan></text>)
}

export default TextMap;
