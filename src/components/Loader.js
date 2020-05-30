import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import LogoLeaf from './Logo';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function SimpleBackdrop(props) {
  const {open} = props;
  const classes = useStyles();
  return (
    <div>
      <Backdrop className={classes.backdrop} open={open}>
        <LogoLeaf variant={'loader'} height={200} color={'transparent'}/>
      </Backdrop>
    </div>
  );
}
