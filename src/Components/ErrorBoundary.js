import React, {Component}  from 'react';
class ErrorBoundary extends Component {
	constructor(props){
		super(props);
		this.state={
			hasEroor:false
		}
	}
	componentDidCatch(error,info){
		this.setstate({
			hasEroor:true
		})
}	
		render(){
			if(this.state.hasEroor){
				return <h1>OOOOOPs that is not good </h1>
			}
			return this.props.children;
		}
	}
export default ErrorBoundary;