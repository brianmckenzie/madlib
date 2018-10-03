import React, { Component } from 'react';
import Madlib from './components/Madlib';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      word1: 'dark',
      word2: 'stormy',
      word3: 'shot',
      word4: 'door',
      word5: 'The maid',
      word6: 'a pirate ship'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <p>
            Brian's Madlib Demo
          </p>

          <div className="Form">
            <form>
              
              <label>
                1:&nbsp;
                <input type="text" name="word1" id="word1" value={this.state.word1} onChange={this.handleChange} />
              </label>&nbsp;&nbsp;

              <label>
                2:&nbsp;
                <input type="text" name="word2" id="word2" value={this.state.word2}  onChange={this.handleChange} />
              </label>&nbsp;&nbsp;

              <label>
                3:&nbsp;
                <input type="text" name="word3" id="word3" value={this.state.word3}  onChange={this.handleChange} />
              </label>&nbsp;&nbsp;

              <label>
                4:&nbsp;
                <input type="text" name="word4" id="word4" value={this.state.word4}  onChange={this.handleChange} />
              </label>&nbsp;&nbsp;

              <label>
                5:&nbsp;
                <input type="text" name="word5" id="word5" value={this.state.word5}  onChange={this.handleChange} />
              </label>&nbsp;&nbsp;

              <label>
                6:&nbsp;
                <input type="text" name="word6" id="word6" value={this.state.word6}  onChange={this.handleChange} />
              </label>&nbsp;&nbsp;

            </form>
          </div>
          <br/>

          <Madlib word1={this.state.word1} 
            word2={this.state.word2} 
            word3={this.state.word3} 
            word4={this.state.word4} 
            word5={this.state.word5} 
            word6={this.state.word6}
          />

        </header>
      </div>
    );
  }
}

export default App;
