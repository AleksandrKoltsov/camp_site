import React from 'react';
import MainPage from './components/MainPage.js';
// import logo from './logo.svg';
import './App.css';
import AdvancedGridList from './components/AdvancedGridList.js';
import SwipeableTextMobileStepper from './components/Slider.js';
import Box from '@material-ui/core/Box';
import SliderCards from './components/SliderCards.js';


class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        data:[],//массив данных о домах и картинок
        content:[], // отображаемый на странице в данный момент контент
      };
      // ссылка на таблицу
      this.link = 'https://spreadsheets.google.com/feeds/list/1BuePN0GHsl2ig48EYF2Z9Amx6aA94tE9lYTTy-tg4dY/1/public/full?alt=json';
      this.loadCards();//метод для загрузки данных из таблицы
      this.menu = ['HOME', 'CHOOSE A HOUSE', 'MAP', 'ABOUT US', 'GALLERY']; // список пунктов для меню - передаем в MainPage
  }
  // метод для получения контента для отображения
  //принимает число-позицию в массиве);
  //массив structure аналогичен расположению значений в массиве this.menu
  getContent(pos){
    const structure = [
      (<div><Box mb={2}>
        <SwipeableTextMobileStepper/>
        </Box>
        <Box mb={2}><SliderCards data={this.state.data}/></Box>
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
    }).map(({gsx$text,gsx$id,gsx$image,gsx$title, gsx$price}) => {
        return {id:gsx$id.$t,text:gsx$text.$t,img:gsx$image.$t,title:gsx$title.$t, price:gsx$price.$t};
    });
    //полученные данные записываем в state data и записываем в контент для отображения первую страницу
    this.setState({...this.state, data:data})
    this.setState({...this.state, content:this.getContent(0)});
  })}
  //метод обработчик клика по карточке
  handleClickInfo(ev){
    console.log(ev);
  }
  //метод обработчик клика по карточке
  handleClickStar(ev){
    console.log(ev);
  }
  //метод обработчик клика по пунктам меню
  handleClickMenu(ev){
    this.setState({...this.state,content:this.getContent(this.menu.indexOf(ev.nativeEvent.target.innerText))});
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
