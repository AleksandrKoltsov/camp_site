import React, { Component } from "react";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";
import flatpickr from "flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js";
flatpickr.localize(Russian);

export default class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        // this.state = {
        //     date: new Date()
        // };
        console.log(props);
    }
    render() {
        const changedDate = this.props.dateState.changedDate;

        return (
            <Flatpickr
                value={changedDate}
                onChange={changedDate => {
                    this.props.dateSetState.handleChangeDate({ changedDate });
                }}
                options={{
                    locale: "Russian",
                    inline: true,
                    mode: "range",
                    minDate: "today",
                    dateFormat: "d.m.Y",
                    disable: [{
                        from: '',
                        to: ''
                    }]
                }}
            />
        );
    }
}

