import React from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import {robots} from './robots.js'
import Scroll from './Scroll.js'
import './App.css'

class App extends React.Component{
	constructor()
	{
		super();
		this.state={
			robots: [],
			searchfield: ''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => {this.setState({robots: users})})
	}
	onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value})
	}
	render(){
		const filteredRobots= this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		});
		if (this.state.robots.length === 0) { return(
			<h1>LOADING</h1>)}
		else {
			return(
			<div class='tc'>
			<h1 className='f1'>Robo Friends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<CardList robots={filteredRobots}/>
			</Scroll>
			</div>
			)
		}
	}
}

export default App;
