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
    padding: "130px",
  },
});

export default function SwipeableTemporaryDrawer() {
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
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap mr="auto">
            LOGO
          </Typography>
          <Box component="div" ml="auto" display="block">
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
  possimus modi fugit delectus. Voluptate amet, distinctio maiores debitis provident assumenda porro, ipsa animi
  incidunt eum voluptatum quia! Ad repellendus nobis maiores veniam, atque deserunt quis? Illum et corrupti similique
  quaerat ducimus hic est quisquam, accusantium ea, rerum veritatis alias nihil, sunt animi. At dignissimos vel minima
  doloribus nobis vero corporis quibusdam necessitatibus aut reprehenderit, nesciunt eos in neque pariatur sit? Corporis
  iusto fugit ducimus libero? Aut, doloribus reiciendis fugit non ratione illum cupiditate incidunt. Cumque asperiores,
  adipisci nostrum nulla assumenda eaque fugit quis! Incidunt est veritatis omnis accusantium sed quos dolorum ratione
  rerum libero magnam consequatur repellat accusamus cumque, a animi iste ut voluptatibus enim. Sequi doloremque nam
  aspernatur quaerat! Rem sed, asperiores iusto, voluptates ad illo dolor dignissimos repellendus debitis sint tenetur
  voluptas. Voluptatem, inventore! Eaque dicta aspernatur soluta culpa officia earum aliquam! Voluptas dolore iste
  impedit quisquam fuga eveniet quae suscipit ullam optio recusandae eum ipsum quia, et architecto labore possimus,
  nulla distinctio odio a inventore nesciunt! Vitae autem alias, tempora aspernatur officiis, culpa quos maiores
  veritatis ea nobis necessitatibus perspiciatis ullam! Facilis, ad quas deserunt illo ex, eum voluptatem reprehenderit
  totam delectus magni fuga? Hic error, beatae cupiditate ipsum, fugit praesentium accusantium nisi saepe deleniti,
  consequuntur pariatur officia unde reiciendis facere porro harum perferendis recusandae veniam quidem commodi dolorum
  deserunt repudiandae? Dolore pariatur quas ea quaerat distinctio repudiandae dignissimos dolor! Repudiandae eius
  pariatur fugiat fuga quod, dignissimos tenetur, facere cupiditate harum eos iure ut aliquam praesentium, nemo optio
  officiis! Excepturi, corrupti unde? Reprehenderit repellendus unde numquam iusto? Neque rem quisquam quos tempore
  sequi molestiae voluptates voluptatem suscipit modi alias eos nobis, velit perspiciatis recusandae laborum veniam quia
  ab harum? Consequuntur enim accusamus facere suscipit sed iste velit cupiditate aperiam, libero architecto tempora
  itaque corrupti nisi placeat laborum, assumenda vitae. Saepe sit quidem est. Neque dolore fuga facilis ducimus
  delectus, natus fugit omnis qui eius, sapiente officiis quis unde aspernatur! Ducimus perferendis facilis facere,
  voluptate eaque reiciendis aliquid suscipit similique! Nesciunt sequi laboriosam ad eum temporibus rerum iure possimus
  non, et aspernatur, quisquam doloremque similique dolores, qui labore quidem asperiores fugiat! Facere iure voluptas
  beatae quaerat, ex fuga cupiditate aperiam dolorum iste quas illum atque perferendis repudiandae quia soluta ab
  facilis rem doloribus quos quod nobis. Consectetur ipsa beatae aperiam omnis ratione quod, praesentium exercitationem
  soluta doloremque repellat fuga numquam architecto fugit molestias et recusandae ex sint ad tempore ducimus
  perferendis in? Ipsum cum quam, laborum, illo nulla sit dolore odit doloremque porro minima aliquid ullam facilis quia
  quidem veniam quibusdam id! Consequuntur veniam maiores temporibus cumque porro? Nulla architecto, eaque odit esse non
  vel quia inventore ducimus consequuntur modi voluptatem corrupti facere tenetur deserunt.
        </Typography>
      </main>
    </div>
  );
}