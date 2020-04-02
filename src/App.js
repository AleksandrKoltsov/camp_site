import React from 'react';
import MainPage from './components/MainPage.js';
// import logo from './logo.svg';
import './App.css';
import AdvancedGridList from './components/AdvancedGridList.js';
import SwipeableTextMobileStepper from './components/Slider.js';
import Box from '@material-ui/core/Box';
import SliderCards from './components/SliderCards.js';
import FullCard from "./components/FullCard";
import UserInfoOrder from "./components/FullCard";


class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        data:[],//массив данных о домах и картинок
        content:[], // отображаемый на странице в данный момент контент
      };
      // ссылка на таблицу
      this.link = 'https://spreadsheets.google.com/feeds/list/1BuePN0GHsl2ig48EYF2Z9Amx6aA94tE9lYTTy-tg4dY/1/public/full?alt=json';
      this.formLink = 'https://script.google.com/macros/s/AKfycbxIjKe8TfxxsbfZle-_G_uWFs7qZa5TkSVDosNVC9EtclMbSao/exec?';
      this.loadCards();//метод для загрузки данных из таблицы
      this.menu = ['HOME', 'CHOOSE A HOUSE', 'MAP', 'ABOUT US', 'GALLERY']; // список пунктов для меню - передаем в MainPage
      this.favorite = localStorage.getItem('fav')||[];
  }
  // метод для получения контента для отображения
  //принимает число-позицию в массиве);
  //массив structure аналогичен расположению значений в массиве this.menu
  getContent(pos){
    const structure = [
      (<div><Box mb={2}>
        <SwipeableTextMobileStepper/>
        </Box>
        <Box mb={2}>
          <SliderCards
            handleClickInfo={this.handleClickInfo.bind(this)}
            data={this.state.data}/>
        </Box>
        <Box mb={50}>TEXT CONTENT</Box>
      </div>),
      (<div><Box mt={15}>
        <AdvancedGridList
      data={this.state.data}
      handleClickInfo={this.handleClickInfo.bind(this)}
      handleClickStar={this.handleClickStar.bind(this)}
      />
      </Box>
      </div>),
      (<div><Box mt={15}>MAP</Box>
      </div>),
      (<div><Box mt={15}>ABOUT US</Box>
      </div>),
      (<div><Box mt={15}>GALLERY</Box>
      </div>),
    ];
    return structure[pos];
  }
  //метод для загрузки информации из таблицы
  loadCards(){
    fetch(this.link)
    .then(response => response.json())
    .then(({feed}) => {
        const data = [...feed.entry].sort((a,b)=>{
    if(a.gsx$text.$t > b.gsx$text.$t){
        return 1;
    }
    if(a.gsx$text.$t < b.gsx$text.$t){
        return -1;
    }
        return 0;
    }).map(({gsx$text,gsx$id,gsx$image,gsx$title, gsx$price, gsx$booked, gsx$mini}) => {
        return {
          id:gsx$id.$t,
          text:gsx$text.$t,
          img:gsx$image.$t,
          title:gsx$title.$t,
          price:gsx$price.$t,
          mini:JSON.parse(gsx$mini.$t),
          booked:JSON.parse(gsx$booked.$t),
        };//Data - обьект данных для карточки
    });
    //полученные данные записываем в state data и записываем в контент для отображения первую страницу
    // console.log(data);
    this.setState({...this.state, data:data});
    this.setState({...this.state, content:this.getContent(0)});
  })}
  //метод обработчик клика по карточке
  handleClickInfo(ev){
    const id = ev.currentTarget.dataset.id;
    const data = this.state.data.filter(elem => elem.id === id);
    this.setState({...this.state,content:(<div><Box mt={0}><FullCard data={data[0]} handleClickForm={this.handleClickForm.bind(this)}
      /></Box></div>)});
  }
  //метод обработчик клика по карточке
  handleClickStar(ev){
    console.log(ev.currentTarget.dataset);
  }
  // метод обработчик отправки данных с формы
// Принимает обьект со следующими полями
// h//house num
// d//date
// n//name
// p//phone
// e//email
// dob//date of birth
// cid//customer id
// oid//order id
// hid//house id
// dop//date of payment
// am//amount
  handleClickForm(data){
    console.log(data);
    fetch(`${this.formLink}h=${data.h}&d=${data.d}&n=${data.n}&p=${data.p}&e=${data.e}&dob=${data.dob}&cid=${data.cid}&oid=${data.oid}&hid=${data.hid}&dop=${data.dop}&am=${data.am}`, {
      crossDomain: true,
      method: "GET",
      dataType: "jsonp"}).then(data=>console.log(data));
  }
  //метод обработчик клика по пунктам меню
  handleClickMenu(ev){
    this.setState({...this.state,content:this.getContent(this.menu.indexOf(ev.currentTarget.dataset.name))});
  }

  render(){
    return (<div>
      <MainPage
      content={this.state.content}
      handleClick={this.handleClickMenu.bind(this)}
      menuItems={this.menu}
      />
  </div>);
  }
}
export default App;
