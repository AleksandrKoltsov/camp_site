import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";
import React, { Component } from "react";
import flatpickr from "flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js";

flatpickr.localize(Russian);

export default class DatePicker extends Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        };

    }

    render() {
        const { date } = this.state;
        return (
            <Flatpickr
                value={date}
                onChange={date => {
                    this.setState({ date });
                }}
                options={{
                    locale: "Russian",
                    inline: true,
                    mode: "range",
                    minDate: "today",
                    dateFormat: "d-m-Y",
                    disable: [
                        function(date) {
                            // disable every multiple of 8
                            return !(date.getDate() % 8);
                        }
                    ]
                }}
            />
        );
    }
}

