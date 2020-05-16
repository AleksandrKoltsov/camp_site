import moment from "moment";
import MomentUtils from "@date-io/moment";
import MoreIcon from "@material-ui/icons/MoreVert";
import React, { useState, useCallback } from "react";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import "moment/locale/ru";

moment.locale("ru"); // it is required to select default locale manually

const localeMap = {
    ru: "ru",
};

function MomentLocalizationExample() {
    const [locale, setLocale] = useState("fr");
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedDate, handleDateChange] = useState(new Date());

    const handleMenuOpen = useCallback(e => {
        e.stopPropagation();
        setAnchorEl(e.currentTarget);
    }, []);

    const selectLocale = useCallback(locale => {
        moment.locale(locale);

        setLocale(locale);
        setAnchorEl(null);
    }, []);

    const getDisableDate = () => {
        return Math.random() > 0.7;
    };

    return (
        <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} locale={locale}>
            <DatePicker
                value={selectedDate}
                onChange={date => handleDateChange(date)}
                autoOk
                orientation="landscape"
                variant="static"
                openTo="date"
                shouldDisableDate={getDisableDate}
            />

            <Menu
                id="locale-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >
                {Object.keys(localeMap).map(localeItem => (
                    <MenuItem
                        key={localeItem}
                        selected={localeItem === locale}
                        onClick={() => selectLocale(localeItem)}
                    >
                        {localeItem}
                    </MenuItem>
                ))}
            </Menu>
        </MuiPickersUtilsProvider>
    );
}

export default MomentLocalizationExample;
