import React from 'react';
import Box from '@material-ui/core/Box';
const url = 'https://script.google.com/macros/s/AKfycbxIjKe8TfxxsbfZle-_G_uWFs7qZa5TkSVDosNVC9EtclMbSao/exec?i=id&d=date&n=name&p=phone&e=email';




export default function GoogleForm(){
 function training(){
    fetch(url, {
      crossDomain: true,
      method: "GET",
      dataType: "jsonp"});
  }
  training();
  return(
    <div>
<Box>
'fhjdsf'
</Box>
    </div>
  )
}
