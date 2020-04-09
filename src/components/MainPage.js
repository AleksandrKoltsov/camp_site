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
import Logo from './Whiskey_Kings_alfa.png';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  list: {
    width: 'auto',
  },
  bar:{
    width:"100%",
    position:"fixed",
    justifyContent:"center",
    color:'white',
    backgroundImage:`url('${Logo}')`,
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    backgroundSize:'contain',
    transition:'all .1s linear',
    },
  hiddenBar:{
    backgroundColor:'transparent',
    height:"20vh",
    boxShadow:"none",
  },
  visibleBar:{
    backgroundColor:'#221F1F',
    height:"inherit",
  },
  fullList: {
    width: 'auto',
  },
  content: {
    flexGrow: 1,
  },
  toolbarGroup:{
    justifyContent:"space-between",
    flexDirection:"row",
  },
});

export default function MainPage(props) {//принимает список позиций меню, handleClick для обработки клика по меню,
  const classes = useStyles();            //и контент для отрисовки
  const [state, setState] = React.useState({
    menu: false,// состояние меню - открыто закрыто
    bar: 'hiddenBar', // состояние хедера
  });

  const handleScroll = ()=>{ //обработчик скролла для изменения состояния хедера
    window.removeEventListener('scroll', handleScroll);
    window.scrollY<50?setState({...state, bar:'hiddenBar'}):setState({...state, bar:'visibleBar'});
  }
  window.addEventListener('scroll', handleScroll);

  const toggleDrawer = (open) => event => { // обработчик событий для изменения состояния меню(открыть свернуть )
    window.removeEventListener('scroll', handleScroll);
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
        {props.menuItems.map((text, index) => (//массив названий меню преобразуется в список
          <ListItem
          button key={text}
          onClick={props.handleClick}
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
        className={`${classes[state.bar]} ${classes.bar}`}
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
          <Box component="div" display="block">
            <Typography>
            <Link href="https://drive.google.com/open?id=1BuePN0GHsl2ig48EYF2Z9Amx6aA94tE9lYTTy-tg4dY" color='inherit'>
              google table
            </Link>
          </Typography>
            <Typography>
            <Link href="https://drive.google.com/open?id=1wMW9gsr43GQ-fkDuYRiGCc24oUlSas_s" color='inherit'>
              google drive
            </Link>
            </Typography>
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
        {props.content}
      </main>
    </div>
  );
}
