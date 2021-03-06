import React, {useState, useEffect} from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import Button from '@material-ui/core/Button';
import DescriptionAlerts from './Alert';


const MapContainer = () => {

  const mapStyles = {
    height: "100vh",
    width: "100%"};

  const defaultCenter = {
    name:'DUBRAVA',
    location:{
    lat: 48.673680,
    lng: 35.329384
    }
  }
  const [alert, setAlert] = useState({status:false, message:'', title:''});
  const [isAlert, setIsAlert] = useState(false);
  const [ selected, setSelected ] = useState(defaultCenter);
  const [ currentPosition, setCurrentPosition ] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, [])

  const success = position => {
    const cp = {
      name:'ВАШЕ МЕСТОПОЛОЖЕНИЕ',
      location:{
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
    }
    setCurrentPosition(cp);
  };

  const errMsg =_=>{
    setAlert({status:true, message:'При копіюванні координат сталася помилка. Спробуйте скопіювати наступний текст: 48.673680, 35.329384', title:'Error'});
    setIsAlert(true);
  }

  const succMsg =_=>{
    setAlert({status:true, message:'Координати успішно скопійовано до буферу обміну.', title:'Success'})
    setIsAlert(true);
  }

  const fallbackCopyTextToClipboard = (text)=> {
  let textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    let successful = document.execCommand('copy');
    successful?succMsg():errMsg();
  } catch (err) {
    errMsg();
  }
  document.body.removeChild(textArea);
}
const copyTextToClipboard = (text)=> {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    succMsg();
  }, function(err) {
    errMsg();
  });
}

  const onSelect = item => {
    setSelected(item);
  }

  const copyCoords = _ => {
    const {lat, lng} = defaultCenter.location
    copyTextToClipboard(`${lat}, ${lng}`);
  }

  const alertClick =_=>{
    setAlert({status:false, message:'', title:''})
    setIsAlert(false);
  }

  return (
      <LoadScript
       googleMapsApiKey='AIzaSyBgikApP8Vqo9-rUEuis_fD5Wzsn9otlIY'>
       {isAlert&&(<DescriptionAlerts title={alert.title}message={alert.message} isOpen={alert.status}/>)}
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={10}
          center={defaultCenter.location}
        >
        {selected.location &&(<InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >{(<div>
              <h2 style={{textAlign:'center', color:'#221F1F',}}>DUBRAVA</h2>
              <p>Some info, contacts, photo</p>
              <Button variant="outlined" color="primary" onClick={copyCoords}>
                КОПІЮВАТИ КООРДИНАТИ
              </Button>
              </div>
            )
            }
            </InfoWindow>)}
            {currentPosition.location&&(<InfoWindow
                  position={currentPosition.location}
                  clickable={true}
                >{(<div>
                  <h2 style={{textAlign:'center', color:'#221F1F',}}>ВАШЕ МІСЦЕЗНАХОДЖЕННЯ</h2>
                  </div>
                )
                }
                </InfoWindow>)}
        {(<Marker key={defaultCenter.name} onClick={() => onSelect(defaultCenter)} position={defaultCenter.location}/>)}
        {currentPosition.location&&(<Marker key={currentPosition.name} position={currentPosition.location}/>)}
        </GoogleMap>
     </LoadScript>
  )
}

export default MapContainer;

// Maps child for direction render
// {(currentDirection.destination !== '' &&
//         currentDirection.origin !== '')
//         &&(<DirectionsService
//           // required
//           options={{
//             destination: currentDirection.destination,
//             origin: currentDirection.origin,
//             travelMode: currentDirection.travelMode
//           }}
//           // required
//           callback={directionsCallback}
//         />)}
//         {currentDirection.response !== null &&(
//         <DirectionsRenderer
//           // required
//           options={{
//             directions: currentDirection.response
//           }}
//         />
//       )}

// const [ currentDirection, setDirection ] = useState({
//     response: null,
//     travelMode: 'DRIVING',
//     origin: '',
//     destination: defaultCenter
// });

// callback for directions
// const directionsCallback = (response)=> {
//   console.log(response)
//
//   if (response !== null) {
//     if (response.status === 'OK') {
//       this.setDirection(
//         () => ({
//           response
//         })
//       )
//     } else {
//       console.log('response: ', response)
//     }
//   }
// }
