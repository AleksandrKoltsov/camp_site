import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SwipeableTextMobileStepper from './Slider.js';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
    },
    contPic: {
        overflow: 'hidden',
        height: '100vh',
    },
    picHouse: {
        // background:  'url("https://www.polotskvodokanal.by/wp-content/uploads/2015/07/1009.jpg")',
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
        // width: '100%',
        height: '100vh',
        opacity: '50%',
        position: 'relative',
        top: '0vh',
        cursor: 'pointer',
        '&:hover': {
            transition: 'all 0.5s',
            opacity: '100%',
            transform: 'scale(1.3)',
        },
    },

}));

export default function TransitionsModal(props) {
    // console.log(props);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className={classes.contPic}>
                <a href="#" onClick={handleOpen}>
                    <img src={props.img} className={classes.picHouse}/>
                </a>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <SwipeableTextMobileStepper mini={props.mini}/>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
