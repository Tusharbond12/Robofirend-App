import React from 'react';
import Card from './Card';
//import {robots} from './robots';
const CardList=({robots})=>{
const cardcomponent=robots.map((item,index)=>{
	return <Card key={index} id={robots[index].id} name={robots[index].name} email={robots[index].email}/>;
})
	return(
		<div>
	 {cardcomponent};
	 </div>
	);
}

export default CardList;