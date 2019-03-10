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
         data: 'Top',
         dat2: 'Bottom'
      }
      this.updateState = this.updateState.bind(this);

      this.updateState2 = this.updateState2.bind(this);



   };
   updateState(e) {
      this.setState({data: e.target.value});
   }

   updateState2(c) {
   		this.setState({dat2: c.target.value});
   }

  render() {
    return (
    	<div> 
            <div className="imgdoge">
    			<h4 class= "top">{this.state.data}</h4>
    			<img src={Image.jpg} />
    			<h4 class= "bottom">{this.state.dat2}</h4>
    		</div>
    	</div>
    );
  }
}

ReactDOM.render(<DogeMeme top={'Such a gift'} bottom={'here'}/>, document.getElementById('root'));







