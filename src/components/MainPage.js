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

const useStyles = makeStyles({
  list: {
    width: 'auto',
  },
  bar:{
    width:"100%",
    position:"fixed",
    justifyContent:"center",
    color:'white',
    },
  hiddenBar:{
    backgroundColor:'transparent',
    paddingTop:"40px",
    boxShadow:"none",
    transition:'all .1s 0s linear',
  },
  visibleBar:{
    backgroundColor:'#221F1F',
    paddingTop:"inherit",
    transition:'all .1s 0s linear',
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
          <ListItem button key={text} onClick={props.handleClick}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (//возвращает хедер, меню, и контент(получен из props)
    <div>
      <AppBar
        className={`${classes[state.bar]} ${state.bar}`}
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
          <Typography variant="h6" noWrap m="auto">
            WHISKEY
          </Typography>
          <Box component="div" display="block">
            <Typography>
              email@example.com
          </Typography>
            <Typography>
              +380808080808
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