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
import FirstBoxBackground from './bgrnd.jpg';

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
  cardsBox:{
    flexFlow: "column wrap",
    owerflow:"hidden",
  },
  firstBox:{
    textAlign: "center",
    backgroundImage: `url(${FirstBoxBackground})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundSize: "contain",
    color: "white",
    fontWeight:"900",
    padding: "130px",
  },
  content: {
    flexGrow: 1,
  },
  toolbarGroup:{
    justifyContent:"space-between",
    flexDirection:"row",
  },
});

export default function SwipeableTemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    menu: false,
    bar: 'hiddenBar',
  });

  const handleScroll = ()=>{
    window.removeEventListener('scroll', handleScroll);
    window.scrollY<50?setState({...state, bar:'hiddenBar'}):setState({...state, bar:'visibleBar'});
  }
  window.addEventListener('scroll', handleScroll);

  const toggleDrawer = (open) => event => {
    window.removeEventListener('scroll', handleScroll);
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, menu: open });
  };

  const list = () => (
    <div
      className={classes.list}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['HOME', 'CHOOSE A HOUSE', 'MAP', 'ABOUT US', 'GALLERY'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <AppBar
        className={`${classes[state.bar]} ${state.bar}`}
      >
        <Toolbar className={classes.toolbarGroup}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap m="auto">
            LOGO
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
        <Box className={classes.firstBox}>
        <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, vero dicta, pariatur ut facilis repellat commodi
  eos, praesentium tempore incidunt quaerat ullam itaque harum. At cum quos aut eum accusantium, tempora sunt neque
  deserunt quam doloribus illo earum iste, reiciendis ut animi eligendi nulla temporibus. Iusto iure dolorum placeat
  tempora expedita non doloribus deleniti? Minima assumenda id recusandae. Voluptas deleniti id beatae distinctio iste
  dolores ab asperiores aliquid exercitationem tenetur! Unde aspernatur esse repellat quasi quia perferendis corporis
  laboriosam nemo architecto nostrum? Soluta autem tenetur ex perferendis vero expedita voluptatibus corrupti delectus
  corporis, quia deleniti a aspernatur, odio molestias veniam sequi tempore obcaecati asperiores nesciunt voluptas
  maiores officia. Fugiat deserunt quo quos consequatur nihil voluptates mollitia enim impedit aliquam voluptatibus,
  porro voluptate at obcaecati sequi culpa numquam quae autem vitae eveniet? Saepe aliquam officia delectus laudantium
  necessitatibus deserunt itaque, sunt quo nostrum earum quia, atque ipsa. Quis amet accusantium fuga. Possimus
  aspernatur nobis voluptatibus omnis totam nesciunt inventore eum velit perspiciatis minima quasi, nihil earum eveniet
  suscipit dolores, ex atque commodi, maxime et corrupti tempore sapiente distinctio assumenda modi. Architecto iusto
  culpa unde quasi ex earum cumque aliquid esse. Incidunt autem, nisi voluptatem quod officia fugiat? Amet ad corporis
  saepe accusamus perspiciatis blanditiis laborum, quam praesentium voluptatum repellat laudantium sapiente sunt dolorem
  minus doloremque dolore, reprehenderit quia itaque. Rem similique suscipit architecto, nesciunt temporibus nostrum
  nisi laboriosam! Quis, iure omnis repudiandae soluta corrupti unde provident maiores atque, voluptatibus architecto
  perspiciatis nulla nobis hic quam accusantium ea, magni vero quidem. Id, voluptatum nesciunt! Rem officia perferendis
  asperiores exercitationem! Eaque nulla, quis cupiditate rerum, animi, omnis saepe doloremque ullam aperiam quod veniam
  consequatur provident sed nisi sit alias esse magnam. Debitis ea consequatur rem error quasi voluptas, voluptatum
  perferendis, quisquam voluptatem nemo quidem? Repellat reprehenderit beatae voluptatum nesciunt eligendi! Quia
  molestiae ab velit adipisci enim rem architecto ratione corporis numquam aspernatur eveniet vel porro fuga debitis
  iure, laudantium molestias a obcaecati hic laborum quaerat eos ea officia praesentium! Error minus beatae aut
  exercitationem blanditiis! Ducimus totam praesentium, accusamus veniam enim consequatur a delectus aut consectetur
  iure pariatur aliquid, fuga libero consequuntur dolores odio nihil. Earum natus alias eius consequuntur, sapiente a
  odio aliquam labore delectus quod dolor praesentium ab eum atque sed. Facilis, magnam vitae provident similique
  obcaecati nulla, dolore rerum enim quae esse ipsum ipsam animi necessitatibus odio consectetur cumque eaque sunt
  repellat, non nostrum incidunt voluptatibus officia omnis! Recusandae dolor vel odit atque illo in dicta quis
  laboriosam assumenda error saepe odio totam sapiente aut dolorem iure beatae est debitis commodi, ratione rerum quam
  natus quod explicabo! Laborum eos temporibus nisi nobis quibusdam dolor eaque dolores! Laboriosam aliquam doloremque
  ab quia saepe nemo vero ipsum ad eos minus esse odit eius, maiores quisquam asperiores quod maxime hic veniam
  perspiciatis delectus rem voluptatibus quo perferendis quidem! Suscipit, itaque quam repellendus cumque in eaque ab
  libero repudiandae facilis mollitia eum officia temporibus, quis, quo fugit assumenda placeat? Earum sit obcaecati
  libero provident laboriosam. Itaque voluptatem repellat laborum consectetur similique tenetur aut adipisci corrupti,
  obcaecati, ab incidunt eveniet dolorum, iure delectus veniam. Aperiam quos voluptatibus repudiandae fugiat est numquam
  enim reiciendis. Libero possimus quasi rerum corporis quis, laboriosam delectus praesentium, eius autem repellendus
  iusto mollitia facilis officiis amet porro officia, quidem adipisci tempore? Ducimus tempore officiis suscipit quod
  illo nulla consectetur qui corrupti provident aliquid dolores quas doloribus pariatur vero eos atque quis, commodi rem
  </Typography>
  </Box>
  <Box>
  {props.cards}
  </Box>
      </main>
    </div>
  );
}