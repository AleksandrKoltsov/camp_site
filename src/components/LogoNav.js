import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import LogoLeaf from './Logo';

// strokeDasharray, strokeDashoffset values for each path in svg
// get from .getTotalLength() method of path.
const useStyles = makeStyles((theme) => ({
    logoBlock:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      alignContent:'center',
    },
    logoName:{
       animation: '$fill 0.5s ease forwards 3.5s'
    },
    path0:{
    strokeDasharray: 646.02978515625,
    strokeDashoffset: 646.02978515625,
    animation: '$line-anim 2s ease-out forwards .3s, $line-fix .5s linear forwards 2.3s',
    },
    path1:{
    strokeDasharray: 543.8901977539062,
    strokeDashoffset: 543.8901977539062,
    animation: '$line-anim 2s ease-out forwards .6s, $line-fix .5s linear forwards 2.6s',
    },
    path2:{
    strokeDasharray: 691.3129272460938,
    strokeDashoffset: 691.3129272460938,
    animation: '$line-anim 2s ease-out forwards .9s, $line-fix .5s linear forwards 2.9s',
    },
    path3:{
    strokeDasharray: 619.9725341796875,
    strokeDashoffset: 619.9725341796875,
    animation: '$line-anim 2s ease-out forwards 1.2s, $line-fix .5s linear forwards 3.2s',
    },
    path4:{
    strokeDasharray: 552.4210815429688,
    strokeDashoffset: 552.4210815429688,
    animation: '$line-anim 2s ease-out forwards 1.5s, $line-fix .5s linear forwards 3.5s',
    },
    path5:{
    strokeDasharray: 495.60577392578125,
    strokeDashoffset: 495.60577392578125,
    animation: '$line-anim 2s ease-out forwards 1.8s, $line-fix .5s linear forwards 3.8s',
    },
    path6:{
    strokeDasharray: 552.423095703125,
    strokeDashoffset: 552.423095703125,
    animation: '$line-anim 2s ease-out forwards 2.1s, $line-fix .5s linear forwards 4.1s',
    },
    '@keyframes line-anim':{
      to:{strokeDashoffset: 0,},
    },
    '@keyframes line-fix':{
      to:{strokeDasharray: 'none',}
    },
    '@keyframes fill':{
      from:{fill: 'transparent',},
      to:{fill: 'white',}
    },
}));
export default function Logo(){
  const classes = useStyles();
  return (
    <div>
    <Box className={classes.logoBlock}>
    <svg className={classes.logoName} width="45%" height="40" viewBox="0 0 801 123" fill="none" xmlns="http://www.w3.org/2000/svg">

    <path className={classes.path0} d="M40.9452 5C53.5344 5 64.4118 7.30066 73.5776 11.902C82.8537 16.3963 89.9213 22.8703 94.7803 31.3239C99.7497 39.7775 102.234 49.7292 102.234 61.179C102.234 72.6288 99.7497 82.5805 94.7803 91.0341C89.9213 99.3807 82.8537 105.801 73.5776 110.295C64.4118 114.683 53.5344 116.876 40.9452 116.876H5V5H40.9452ZM40.9452 104.838C55.8534 104.838 67.2278 101.039 75.0684 93.4418C82.909 85.7372 86.8293 74.983 86.8293 61.179C86.8293 47.268 82.8537 36.4067 74.9027 28.5952C67.0621 20.7836 55.743 16.8778 40.9452 16.8778H20.0738V104.838H40.9452Z" stroke="white" strokeWidth="10" />
    <path className={classes.path1} d="M143.485 5V75.7855C143.485 85.7372 145.97 93.1207 150.94 97.9361C156.019 102.751 163.032 105.159 171.977 105.159C180.811 105.159 187.713 102.751 192.682 97.9361C197.762 93.1207 200.302 85.7372 200.302 75.7855V5H215.376V75.625C215.376 84.9347 213.443 92.7997 209.578 99.2202C205.713 105.534 200.468 110.242 193.842 113.345C187.326 116.448 179.983 118 171.811 118C163.639 118 156.24 116.448 149.614 113.345C143.099 110.242 137.909 105.534 134.044 99.2202C130.289 92.7997 128.412 84.9347 128.412 75.625V5H143.485Z" stroke="white" strokeWidth="10" />
    <path className={classes.path2} d="M304.958 59.2528C309.155 59.8949 312.964 61.5535 316.388 64.2287C319.922 66.9039 322.682 70.2211 324.67 74.1804C326.768 78.1397 327.817 82.3665 327.817 86.8608C327.817 92.5322 326.327 97.6686 323.345 102.27C320.363 106.764 316.001 110.349 310.259 113.024C304.627 115.592 297.946 116.876 290.216 116.876H247.148V5H288.559C296.4 5 303.081 6.28409 308.602 8.85227C314.124 11.3134 318.265 14.6842 321.026 18.9645C323.787 23.2448 325.167 28.0601 325.167 33.4105C325.167 40.045 323.29 45.5559 319.535 49.9432C315.891 54.2235 311.032 57.3267 304.958 59.2528ZM262.221 53.3139H287.565C294.633 53.3139 300.099 51.7088 303.964 48.4986C307.829 45.2884 309.762 40.8475 309.762 35.1761C309.762 29.5047 307.829 25.0639 303.964 21.8537C300.099 18.6435 294.522 17.0384 287.234 17.0384H262.221V53.3139ZM288.891 104.838C296.4 104.838 302.253 103.126 306.449 99.7017C310.645 96.2775 312.744 91.5156 312.744 85.4162C312.744 79.2098 310.535 74.3409 306.118 70.8097C301.7 67.1714 295.792 65.3523 288.394 65.3523H262.221V104.838H288.891Z" stroke="white" strokeWidth="10"/>
    <path className={classes.path3} d="M416.153 116.876L388.656 71.1307H370.435V116.876H355.361V5H392.632C401.356 5 408.699 6.4446 414.663 9.33381C420.736 12.223 425.264 16.1288 428.246 21.0511C431.227 25.9735 432.718 31.5914 432.718 37.9048C432.718 45.6094 430.399 52.4044 425.761 58.2898C421.233 64.1752 414.387 68.081 405.221 70.0071L434.209 116.876H416.153ZM370.435 59.4134H392.632C400.804 59.4134 406.932 57.4872 411.018 53.6349C415.104 49.6757 417.147 44.4323 417.147 37.9048C417.147 31.2704 415.104 26.134 411.018 22.4957C407.043 18.8575 400.914 17.0384 392.632 17.0384H370.435V59.4134Z" stroke="white" strokeWidth="10"/>
    <path className={classes.path4} d="M531.012 91.9972H480.656L471.38 116.876H455.478L497.22 5.64205H514.613L556.191 116.876H540.289L531.012 91.9972ZM526.705 80.1193L505.834 23.6193L484.963 80.1193H526.705Z" stroke="white" strokeWidth="10"/>
    <path className={classes.path5} d="M676.421 5L632.856 116.876H615.463L571.898 5H587.966L624.243 101.467L660.519 5H676.421Z" stroke="white" strokeWidth="10" mask="url(#path-1-outside-1)"/>
    <path className={classes.path6} d="M767.822 91.9972H717.465L708.189 116.876H692.287L734.03 5.64205H751.423L793 116.876H777.098L767.822 91.9972ZM763.515 80.1193L742.644 23.6193L721.772 80.1193H763.515Z" stroke="white" strokeWidth="10"/>
    </svg>
    <LogoLeaf variant={'nav'} height={40}/>
    </Box>
    </div>
  )
}
