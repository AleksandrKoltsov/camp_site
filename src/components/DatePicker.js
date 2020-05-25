import * as React from "react";
import { TextField } from "@material-ui/core";
import { StaticDateRangePicker, DateRangeDelimiter} from "@material-ui/pickers";
import isWithinInterval from "date-fns/isWithinInterval";
import DescriptionAlerts from "./Alert";
// Компонент принимает четыре пропса
// - date - это стейт из App
// - disabledDates - это массив с обьектами - датами бронирований
// - componentHandler - обработчик из вызвавшего компонента - принимает массив с
// обьектами Moment(для получения строки даты обьект Moment имеет метод toDate())
// - handleChangedDate - обработчик из App handleChangedDate - для изменения state.changedDate
function StaticDateRangePickerExample(props) {
  const {componentHandler, handleChangedDate, date, disabledDates} = props;
  const {ad, dd} = date;
  let isDisabledDates = disabledDates.length>0;
  const [selectedDate, setSelectedDate] = React.useState([ad, dd]);
  const [alert, setAlert] = React.useState((<div></div>))
  const checkDisabled = (date, bookedArray) =>{
    return bookedArray.some(({ad,dd})=>isWithinInterval(date, {start:new Date(ad), end:new Date(dd)}))
  }

  const checkInterval = ({ad,dd}, bookedArray) =>{
    return bookedArray.some((el)=>isWithinInterval(new Date(el.ad), {start:new Date(ad), end:new Date(dd)}))
  }

  const handleDisabledDate = (date) =>{
    if(isDisabledDates){
      let cloneDate = date.toDate();
      return checkDisabled(cloneDate, disabledDates);
    }
    return false;
  }

  const range = (date)=>{
    const ad = date[0];
    const dd = date[1];
    if(checkInterval({ad,dd}, disabledDates)){
      setAlert(<DescriptionAlerts title='Error'
      message='Обраний інтервал має заброньовані дати. Виберіть будь ласка інший інтервал'
      isOpen={true}/>);
    }else{
      setAlert(<div></div>);
      setSelectedDate(date);
      handleChangedDate(date);
      componentHandler(date);
    }
  }
  return (
    <>
      <StaticDateRangePicker
        disablePast
        height={100}
        shouldDisableDate={handleDisabledDate}
        displayStaticWrapperAs="mobile"
        value={selectedDate}
        onChange={range}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} />
            <DateRangeDelimiter> to </DateRangeDelimiter>
            <TextField {...endProps} />
          </>
        )}
      />
      {alert}
    </>
  );
}

export default StaticDateRangePickerExample;
