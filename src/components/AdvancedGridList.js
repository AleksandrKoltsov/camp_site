import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import StarIcon from '@material-ui/icons/Star'; возможно будет использован для показа состояния отмеченной звездочки в карточке
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
  gridList: {
    width: "100%",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  titleBarTop:{
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));

export default function AdvancedGridList(props) {//принимает массив информации карточек(data),
  const classes = useStyles();                   //методы App.js handleClickInfo, handleClickStar
  const {data, handleClickStar, handleClickInfo} = props;
return (
  <div>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {data.map(tile => (
          <GridListTile key={tile.img} cols={1} rows={2}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              titlePosition="top"
              actionIcon={
                <IconButton
                onClick={handleClickStar}
                aria-label={`star ${tile.title}`}
                className={classes.icon}
                data-id={tile.house}>
                  <StarBorderIcon/>
                </IconButton>
              }
              actionPosition="right"
              className={classes.titleBarTop}
            />
          <GridListTileBar
              title={tile.title}
              subtitle={`от ${tile.price}`}
              titlePosition="bottom"
              actionIcon={
              <IconButton
              onClick={handleClickInfo}
              aria-label={`info about ${tile.title}`}
              className={classes.icon}
              data-id={tile.house}
              >
                <InfoIcon />
              </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
