import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function DescriptionAlerts(props) {
  const classes = useStyles();
  const {title, message, isOpen} = props;
  const [open, setOpen] = React.useState(isOpen);

 const handleClose = (event, reason) => {
   if (reason === 'clickaway'||title === 'Error') {
     return;
   }
    setOpen(false);
 };

  return (
    <div className={classes.root}>
      <Snackbar
      open={open}>
      <Alert
      severity={title.toLowerCase()}
      action={
                  <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
              }>
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
      </Snackbar>
    </div>
  );
}
