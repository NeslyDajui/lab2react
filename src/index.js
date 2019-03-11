import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

class DogeMeme extends React.Component {
	constructor(props) {
      super(props);
      
      this.state = {
         top: 'Top',
         bottom: 'Bottom'
      }
      this.updateState = this.updateState.bind(this);

      this.updateState2 = this.updateState2.bind(this);

      this.reset = this.reset.bind(this);

   };

   updateState(e) {
      this.setState({top: e.target.value});
   }

   updateState2(c) {
   		this.setState({bottom: c.target.value});
   }

   reset(){
   		this.setState({
   			top: 'Top',
   			bottom: 'Bottom'
   		});
   }

  render() {
    return (
    	<div> 
    		<input type = "text" value = {this.state.top} 
               onChange = {this.updateState}/>
            <input type = "text" value = {this.state.bottom}
            	onChange = {this.updateState2}/>

            <button onClick={this.reset}>RESET</button>
            <div className="imgdoge">
    			<h4 class= "top">{this.state.top}</h4>
    			<img src={Image.jpg} />
    			<h4 class= "bottom">{this.state.bottom}</h4>
    		</div>
    	</div>
    );
  }
}

ReactDOM.render(<DogeMeme top={'Such a gift'} bottom={'here'}/>, document.getElementById('root'));







