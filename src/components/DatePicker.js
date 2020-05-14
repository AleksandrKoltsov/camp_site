import React, { Component } from "react";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";
import flatpickr from "flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js";
flatpickr.localize(Russian);

export default class DatePicker extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     date: new Date()
        // };
        console.log(props);
    }
    render(props) {
        const { changedDate } = props.date.isFullCardDateSet.changedDate;

        return (
            <Flatpickr
                value={changedDate}
                onChange={changedDate => {
                    props.date.isFullCardDateGet.handleChangeDate({ changedDate });
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

