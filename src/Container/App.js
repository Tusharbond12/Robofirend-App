import React, {Component} from 'react';
import CardList from '../Components/CardList';
//import {robots} from './robots';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll';

class  App extends Component{
	constructor() {
		super()
		this.state={
               robots:[],
               searchfield:''
		}
	}
	onSearchChange=(event) =>{
		this.setState({searchfield:event.target.value})
 
 } 
 componentDidMount(){
 	fetch('https://jsonplaceholder.typicode.com/users')
 	 .then(response =>response.json())
 	 .then(users =>this.setState({robots:users}))
 }
 

     
	render() {
    const filterrobots=this.state.robots.filter(robot=>{
 	return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())});
    if(this.state.robots.length===0)
    {return  <h1>Loading</h1>
    }
    else{
  	return (
		<div className='tc'>
		<h1 className="">ROBOFRIENDS</h1>
		<Searchbox searchchange={this.onSearchChange} />
		<Scroll>
		<CardList robots={filterrobots}/>
		</Scroll>
		</div>
		);}

	}
} 
export default App;