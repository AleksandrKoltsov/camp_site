import React from 'react';
import MainPage from './components/MainPage';
// import logo from './logo.svg';
import './App.css';
import AdvancedGridList from './components/AdvancedGridList';
import SwipeableTextMobileStepper from './components/Slider';
import Box from '@material-ui/core/Box';
import Feedback from "./components/Feedback/Feedback.js";
import SliderCards from './components/SliderCards';
import FullCard from "./components/FullCard";
import FormContainer from "./components/Forms";
import TerritoryMap from "./components/TerritoryMap";
import SimpleBackdrop from "./components/Loader";
import Grid from '@material-ui/core/Grid';
import MapContainer from './components/Map';
import Message from "./components/Message";
import News from "./components/News/News";
import AboutUs from "./components/AboutUs";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data:[],//массив данных о домах и картинок
      content:[], // отображаемый на странице в данный момент контент
      changedDate:{ad:null, dd:null, cd:null},
      rev:[],
      news: [],
      isLoading:false,
      error:false,
      // isLoadReview: false,
      isLoadForm: false,
      isFirstLoad: false,
    };
    // ссылка на таблицу
    this.link = 'https://gsheets.vercel.app/1BuePN0GHsl2ig48EYF2Z9Amx6aA94tE9lYTTy-tg4dY/WWW';
    this.formLink = 'https://script.google.com/macros/s/AKfycbx64rdwZnavnYIdDmbUXC3BxzWEEzCv_7B7_ngqkDr9SbPfD3E/exec';
    // this.formLink = 'https://script.google.com/macros/s/AKfycbxIjKe8TfxxsbfZle-_G_uWFs7qZa5TkSVDosNVC9EtclMbSao/exec?';
    //метод для загрузки данных из таблицы
    this.menu = ['ГОЛОВНА', 'ВИБРАТИ БУДИНОК', 'ЯК ДІСТАТИСЯ', 'ПРО НАС', 'НОВИНИ']; // список пунктов для меню -
    // передаем в MainPage
    this.favorite = localStorage.getItem('fav')||[];
    //ссылка для получения объекта отзывов
    this.getReviewLink = 'https://gsheets.vercel.app/1sZPcAjPYYH3gm8-DJQlDf-5ndS7ZHJGWaqL3TFbfkzc/WWW';
    //ссылка для отправки ПОСТ запроса с объектом отзывов
    this.postReviewLink = 'https://script.google.com/macros/s/AKfycbzMGcjPUDRrA9YOsIa98Ou5urysQYMWMybtI9ETuYDHyABnaPE/exec';
    // this.loadReview();
    //ссылка для получения объекта новостей
    this.news = 'https://gsheets.vercel.app/1M8cbrQWX4aNdVPcj7GSArf_8gGhX8sX_IxOUtM0qzqE/WWW';
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
      <Grid
      direction="column"
      container
      >
        <SliderCards
            handleClickInfo={this.handleClickInfo.bind(this)}
            data={this.state.data}
            />
      </Grid>
      </Box>
      <Box mb={0}>
          <Feedback
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
      (<div><Box mt={15}><MapContainer/></Box>
      </div>),
      (<div><Box mt={15}><AboutUs/></Box>
      </div>),
      (<div><Box mt={15}><News data={this.state.news}/></Box>
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

  async dataLoader(){
    try{let [data, review, news] = await Promise.all([
      fetch(this.link).then(value => value.json()),
      fetch(this.getReviewLink).then(value => value.json()),
      fetch(this.news).then(value => value.json()),
    ]);
      const parseNews = this.parseNews(news);
      const parsedData = this.parseCards(data);
      const parsedReview = this.parseReview(review);
      this.setState({...this.state, news: parseNews});
      this.setState({...this.state, data:parsedData});
      this.setState({...this.state, rev: parsedReview});
      if(!this.state.isFirstLoad){
        this.setState({...this.state, content: this.getContent(0)});
        this.setState({...this.state, isFirstLoad: true});
      }
      setTimeout(()=>{
        this.setState({...this.state, isLoading:false});
      },6000);
    }catch(e){
      this.setState({...this.state, error:true});
      setTimeout(()=>{
        this.setState({...this.state, isLoading:false});
      },6000)
    }

  }
  parseNews(data){
    if(data.length){
      return [...data].map(({ ID, TITLE, IMG, TEXT, DATE }) => {
        return {
          id: ID,
          title: TITLE,
          img: IMG,
          text: TEXT,
          date: DATE
        };
      });
    }
    return [];
  }
  parseCards(data){
    if(data.length){
      return [...data].map(({ HOUSE, TEXT, ID, IMAGE, TITLE, PRICE, BOOKED, MINI }) => {
      return {
        house:HOUSE,
        id:ID,
        text:TEXT,
        img:IMAGE,
        title:TITLE,
        price:PRICE,
        booked:JSON.parse(BOOKED),
        mini:JSON.parse(MINI),
      };//Data - обьект данных для карточки
    });
    }
    return [];
  }
  //метод для получения объекта отзыва
  parseReview(data) {
    if(data.length){
      return [...data].map(({ID, RATING, NAME, EMAIL, REVIEW, DATE}) => {
          return {
              id: ID,
              rating: RATING,
              name: NAME,
              email: EMAIL,
              review: REVIEW,
              date: DATE
          };//Data - обьект данных для review
      });
    }
    return [];
  }

  //передача объекта отзывов методом POST
  async handleReview(data){
    this.setState({...this.state, isLoadForm: true});
    // console.log(data);
    try{await fetch(this.postReviewLink, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    }).then(result=>result.json()).then(data=>{
        console.log(data);
        this.setState({...this.state, isLoadForm: false});
        this.setState({...this.state, content: <Message state={true}/>});
    })}catch(e){
      this.setState({...this.state, isLoadForm: false});
      this.setState({...this.state, content: <Message state={false}/>});
    }
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

  async handleClickForm(data){
    console.log(data);
    this.setState({...this.state, isLoadForm: true});
    try{
      await fetch(this.formLink, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data),
      })
          .then(result=>result.json())
          .then(data=>{
            this.setState({...this.state, isLoadForm: false});
            this.setState({...this.state, changedDate: {ad:null, dd:null, cd:null}});
            this.dataLoader();
            this.setState({...this.state, content: <Message state={true}/>});
            console.log(data);
          })
    }catch(e){
      this.setState({...this.state, isLoadForm: false});
      this.setState({...this.state, isFirstLoad: true});
      this.setState({...this.state, content: <Message state={false}/>});
      // this.setState({...this.state, content: <Message state={false}/>});
    }
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
    // this.loadCards();
    this.setState({...this.state, isLoading:true});
    this.dataLoader();
  }

  render(){
    if(this.state.error){
      return (<h1>Something went wrong...</h1>)
    }else{
      return (
        <div>
        {this.state.isLoading
          ?<SimpleBackdrop open={true}/>
          :<MainPage
              isLoad={this.state.isLoadForm}
              content={this.state.content}
              handleClick={this.handleClickMenu.bind(this)}
              menuItems={this.menu}/>
        }
      </div>
      );
    }
}
}
export default App;
