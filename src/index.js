import React from 'react';
import ReactDOM from 'react-dom';
import "moment/locale/uk";
import moment from "moment";
import './index.css';
import App from './App';
import { LocalizationProvider } from '@material-ui/pickers';
import MomentAdapter from "@material-ui/pickers/adapter/moment";
import * as serviceWorker from './serviceWorker';


const locale = 'uk';
moment.locale(locale)
ReactDOM.render(
    <LocalizationProvider dateLibInstance={moment} dateAdapter={MomentAdapter} locale={locale}>
        <App />
    </LocalizationProvider>,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
