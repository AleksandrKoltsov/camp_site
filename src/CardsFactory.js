import React from 'react';
import AdvancedGridList from './AdvancedGridList.js';
import Box from '@material-ui/core/Box';

export default class CardsFactory extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
         }
         this.link = 'https://spreadsheets.google.com/feeds/list/1BuePN0GHsl2ig48EYF2Z9Amx6aA94tE9lYTTy-tg4dY/1/public/full?alt=json';
        this.loadCards();
    }
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
        }).map(({gsx$text,gsx$id,gsx$image,gsx$title}) => {
            return {id:gsx$id.$t,text:gsx$text.$t,img:gsx$image.$t,title:gsx$title.$t};
        });
            this.setState({...this.state,cards:<AdvancedGridList data={data}/>});
    })}
    render(){
        return (<Box>{this.state.cards}</Box>); 
    }
}

