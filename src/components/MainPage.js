import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import Logo from './Whiskey_Kings_alfa.png';
import Link from '@material-ui/core/Link';
import Logo from './LogoNav';
import ScrollHandler from './Scroll';
import { useState } from 'react';
import SimpleBackdrop from './Loader';
import StickyFooter from './Footer';


const useStyles = makeStyles({
  list: {
    width: 'auto',
  },
  bar:{
    width:"100%",
    position:"fixed",
    justifyContent:"center",
    // backgroundImage:`url('${Logo}')`,
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    backgroundSize:'contain',
    transition:'all .2s linear',
    },
  hiddenBar:{
    backgroundColor:'transparent',
    color:'#212121',
    boxShadow:"none",
    paddingTop:"25px",
    paddingBottom:"25px",
    transition:'all .2s linear',
  },
  visibleBar:{
    background: 'linear-gradient(#212121, #3241A2, #3241A2 100%);',
    boxShadow: '0 10px 18px rgba(0,0,0,0.2), 0 10px 10px rgba(0,0,0,0.2)',
    color:'white',
    paddingTop:0,
    paddingBottom:0,
    transition:'all .2s linear',
  },
  fullList: {
    width: 'auto',
  },
  content: {
    flexGrow: 1,
  },
  toolbarGroup:{
    flexDirection:"row",
  },
  logo:{
    margin:'auto',
  }
});

export default function MainPage(props) {//принимает список позиций меню, handleClick для обработки клика по меню,и контент для отрисовки
  const {menuItems, handleClick, content, isLoad} = props;
  const classes = useStyles();
  const [state, setState] = React.useState({
    menu: false,// состояние меню - открыто закрыто
  });
  const [svgColor, setSvgColor] = React.useState('#212121');
  const [shouldHideHeader, setShouldHideHeader] = useState('hiddenBar');

    const MINIMUM_SCROLL = 50;
    const TIMEOUT_DELAY = 50;
    ScrollHandler(callbackData => {
      const { currentScrollTop } = callbackData;
      const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
        if(isMinimumScrolled){
          setTimeout(() => {
            setShouldHideHeader('visibleBar');
            setSvgColor('white');
          }, TIMEOUT_DELAY);
        }else{
          setTimeout(() => {
            setShouldHideHeader('hiddenBar');
            setSvgColor('#212121');
          }, TIMEOUT_DELAY);
        }
    });

  const toggleDrawer = (open) => event => { // обработчик событий для изменения состояния меню(открыть свернуть )
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, menu: open });
  };

  const list = () => (//меню
    <div
      className={classes.list}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((text, index) => (//массив названий меню преобразуется в список
          <ListItem
          button key={text}
          onClick={(ev)=>{
            handleClick(ev)}}
          data-name={text}
          >
            <ListItemText primary={text}/>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (//возвращает хедер, меню, и контент(получен из props)
    <div>
      <AppBar
        className={`bar ${classes[shouldHideHeader]} ${classes[shouldHideHeader]}`}
      >
        <Toolbar className={classes.toolbarGroup}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)} //бургер открывает меню
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Box className={classes.logo}>
          <Logo color={svgColor}/>
          </Box>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        open={state.menu}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
      <main  className={classes.content}>
        {isLoad&&<SimpleBackdrop open={isLoad}/>}
        {content}
      </main>
      <StickyFooter/>
    </div>
  );
}
