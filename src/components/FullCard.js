import React from 'react';
import Box from '@material-ui/core/Box';
import TransitionsModal from './fullCardComponent/Modal.js'
// import UserInfoOrder from './Forms'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function FullCard (props){
        const classes = useStyles();

        const handleClickOrder = (ev, props) => {
            return {
                id: props.id,
            }
        };

        return (
            <Box component="div" m={2}>
                <TransitionsModal />
                <Box component="span" m={1}>
                   <h2 className='mainTextHeader'>Lorem ipsum dolor.</h2>
                    <p className='mainText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa debitis, incidunt modi possimus provident saepe vitae? Accusamus autem corporis dicta distinctio dolor dolores eligendi error ex illum incidunt inventore maxime molestiae nesciunt officia officiis omnis, quaerat recusandae repellat repellendus reprehenderit sed soluta ullam vel veritatis vero? Assumenda ea similique velit vero. Adipisci at delectus distinctio in officiis perspiciatis rem repudiandae! A animi culpa dolores eum magni nesciunt nobis voluptatibus. Delectus deserunt, dolorem doloremque facilis hic incidunt minus molestiae molestias necessitatibus nesciunt perferendis provident quas quidem recusandae saepe veritatis voluptatum. Ad delectus hic tempore veritatis voluptatum. Cum ducimus maxime perspiciatis quibusdam.
                    </p>
                </Box>
                <div className={classes.root}>
                    <Button variant="contained"
                            onClick={handleClickOrder}
                            props={props}
                    >Заказать</Button>
                </div>
            </Box>
        );
}

export default FullCard;