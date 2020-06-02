import React from 'react';
import MainPage from './components/MainPage';
// import logo from './logo.svg';
import './App.css';
import AdvancedGridList from './components/AdvancedGridList';
import SwipeableTextMobileStepper from './components/Slider';
import Box from '@material-ui/core/Box';
import Fitback from "./components/Fitback/Fitback.js";
import SliderCards from './components/SliderCards';
import FullCard from "./components/FullCard";
import FormContainer from "./components/Forms";
import TerritoryMap from "./components/TerritoryMap";
import SimpleBackdrop from "./components/Loader";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:[],//массив данных о домах и картинок
      content:[], // отображаемый на странице в данный момент контент
      changedDate:{ad:null, dd:null, cd:null},
      rev:[],
      isLoading:false,
    };
    // ссылка на таблицу
    this.link = 'https://spreadsheets.google.com/feeds/list/1BuePN0GHsl2ig48EYF2Z9Amx6aA94tE9lYTTy-tg4dY/2/public/full?alt=json';
    this.formLink = 'https://script.google.com/macros/s/AKfycbx64rdwZnavnYIdDmbUXC3BxzWEEzCv_7B7_ngqkDr9SbPfD3E/exec';
    // this.formLink = 'https://script.google.com/macros/s/AKfycbxIjKe8TfxxsbfZle-_G_uWFs7qZa5TkSVDosNVC9EtclMbSao/exec?';
    //метод для загрузки данных из таблицы
    this.menu = ['HOME', 'CHOOSE A HOUSE', 'MAP', 'ABOUT US', 'GALLERY']; // список пунктов для меню - передаем в MainPage
    this.favorite = localStorage.getItem('fav')||[];
    //ссылка для получения объекта отзывов
    this.getReviewLink = 'https://spreadsheets.google.com/feeds/list/1sZPcAjPYYH3gm8-DJQlDf-5ndS7ZHJGWaqL3TFbfkzc/1/public/full?alt=json';
    //ссылка для отправки ПОСТ запроса с объектом отзывов
    this.postReviewLink = 'https://script.google.com/macros/s/AKfycbzMGcjPUDRrA9YOsIa98Ou5urysQYMWMybtI9ETuYDHyABnaPE/exec';
    this.loadReview();
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
            data={this.state.data}
            />
      </Box>
      <Box mb={50}>
        <Fitback
            handleReview={this.handleReview.bind(this)}
            data={this.state.rev}
        />
      </Box>
      </div>),
      (<div>
          <Box my={15} boxShadow={5}>
            <TerritoryMap
              data={this.state.data}
              handleChangedDate = {this.handleChangedDate.bind(this)}
              date={this.state.changedDate}
              handleClickInfo={this.handleClickInfo.bind(this)}
            />
          </Box>
        <Box>
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
  // обработчик датапикера - получает массив из двух дат - и меняет стейт changedDate
  // даты - это обьект Moment имеющий метод toDate() возвращающий дату в виде строки
  handleChangedDate(date){
    const [momentStart, momentEnd] = date;
    const ad = momentStart.toDate();
    const dd = momentEnd.toDate();
    this.setState({...this.state, changedDate:{ad, dd}});
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
          }).map(({gsx$house,gsx$text,gsx$id,gsx$image,gsx$title, gsx$price, gsx$booked, gsx$mini}) => {
            return {
              house:gsx$house.$t,
              id:gsx$id.$t,
              text:gsx$text.$t,
              img:gsx$image.$t,
              title:gsx$title.$t,
              price:gsx$price.$t,
              mini:JSON.parse(gsx$mini.$t),
              booked:JSON.parse(gsx$booked.$t),
            };//Data - обьект данных для карточки
          });
          this.setState({...this.state, data:data});
          const content = this.getContent(0);
          this.setState({...this.state, content:content});
          //полученные данные записываем в state data и записываем в контент для отображения первую страницу
        })}
  //метод для получения объекта отзыва
  loadReview() {
          fetch(this.getReviewLink)
              .then(response => response.json())
              // .then(data => console.log(data));
              .then(({feed}) => {
                  const data = [...feed.entry].map(({gsx$rating, gsx$name, gsx$email, gsx$review, gsx$date}) => {
                      return {
                          rating: gsx$rating.$t,
                          name: gsx$name.$t,
                          email: gsx$email.$t,
                          review: gsx$review.$t,
                          date: gsx$date.$t
                      };//Data - обьект данных для review
                  });
                  //полученные данные записываем в state rev
                  this.setState({...this.state, rev: data});
                  // }else {
                  //     return 'Нажаль відгуків ніхто не залишив'
                  // }
                  // console.log(this.state.rev);
              }).catch (error => {
              console.error(error)
          })
          // .then(data => console.log(data))
  }
  //передача объекта отзывов методом POST
  handleReview(data){
    // console.log(data);
    fetch(this.postReviewLink, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    }).then(result=>result.json()).then(data=>console.log(data));
  }
  //метод обработчик клика по карточке
  handleClickInfo(ev){
    const house = ev.currentTarget.dataset.id;
    const data = this.state.data.filter(elem => elem.house === house);
    this.setState({...this.state,content:(
      <div>
        <Box mt={0}>
          <FullCard
            data={data[0]}
            changedDate={this.state.changedDate}
            handleChangedDate={this.handleChangedDate.bind(this)}
            handleClickForm={this.handleClickBtnOrder.bind(this, data[0])}
          />
        </Box>
      </div>)});
  }

  handleClickBtnOrder(data){
    // console.log(id);
    this.setState({...this.state,content:(
      <div>
        <Box mt={0}>
          <FormContainer
            id={data.id}
            data={data}
            changedDate={this.state.changedDate}
            handleChangedDate={this.handleChangedDate.bind(this)}
            handleClickOrder={this.handleClickForm.bind(this)}
          />
        </Box>
      </div>
    )});
  }
  //метод обработчик клика по карточке
  handleClickStar(ev){
    // console.log(ev.currentTarget.dataset);
  }
  // метод обработчик отправки данных с формы
// Принимает обьект со следующими полями
// h//house num
// d:{
//  cd: current date
//  ad: arrival date
//  dd: departure date
// }
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
    fetch(this.formLink, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    }).then(result=>result.json()).then(data=>console.log(data));
  }
//   handleClickForm(data){
//     // console.log(data);
//     fetch(`${this.formLink}h=${data.h}&d=${data.d}&n=${data.n}&p=${data.p}&e=${data.e}&dob=${data.dob}&cid=${data.cid}&oid=${data.oid}&hid=${data.hid}&dop=${data.dop}&am=${data.am}`, {
//       crossDomain: true,
//       method: "GET",
//       dataType: "jsonp"}).then(val => console.log(val));
//   }
  //метод обработчик клика по пунктам меню
  handleClickMenu(ev){
    this.setState({...this.state,content:this.getContent(this.menu.indexOf(ev.currentTarget.dataset.name))});
  }

  componentDidMount(){
    // hide Loader
    this.loadCards();
    this.setState({...this.state, isLoading:true});
    setTimeout(()=>{
      this.setState({...this.state, isLoading:false})
    },6000)
  }

  render(){
      return (
        <div>
        {this.state.isLoading
          ?<SimpleBackdrop open={true}/>
          :<MainPage
              content={this.state.content}
              handleClick={this.handleClickMenu.bind(this)}
              menuItems={this.menu}/>
        }
      </div>
      );
}
}
export default App;
