import * as React from "react";
import { TextField } from "@material-ui/core";
import { StaticDateRangePicker, DateRangeDelimiter} from "@material-ui/pickers";

function StaticDateRangePickerExample(props) {
  const [selectedDate, handleDateChange] = React.useState([null, null]);
  const range = (date)=>{
    handleDateChange(date);
      props.handlerRange(date);
  }
  return (
    <>
      <StaticDateRangePicker
        disablePast
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
    </>
  );
}

export default StaticDateRangePickerExample;
