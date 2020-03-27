import React from 'react';
import Box from '@material-ui/core/Box';
import TransitionsModal from './fullCardComponent/Modal.js'
import DatePickers from './fullCardComponent/Calendar.js'

class FullCard extends React.Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <Box component="div" m={2}>
                <TransitionsModal />
                <Box component="span" m={1}>
                   <h2 className='mainTextHeader'>Lorem ipsum dolor.</h2>
                    <p className='mainText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa debitis, incidunt modi possimus provident saepe vitae? Accusamus autem corporis dicta distinctio dolor dolores eligendi error ex illum incidunt inventore maxime molestiae nesciunt officia officiis omnis, quaerat recusandae repellat repellendus reprehenderit sed soluta ullam vel veritatis vero? Assumenda ea similique velit vero. Adipisci at delectus distinctio in officiis perspiciatis rem repudiandae! A animi culpa dolores eum magni nesciunt nobis voluptatibus. Delectus deserunt, dolorem doloremque facilis hic incidunt minus molestiae molestias necessitatibus nesciunt perferendis provident quas quidem recusandae saepe veritatis voluptatum. Ad delectus hic tempore veritatis voluptatum. Cum ducimus maxime perspiciatis quibusdam.
                    </p>
                </Box>
                <div className="contDate">
                    <div className="date1">
                        <DatePickers />
                    </div>
                    <div className="date2">
                        <DatePickers />
                    </div>
                </div>

            </Box>
        );
    }
}

export default FullCard;