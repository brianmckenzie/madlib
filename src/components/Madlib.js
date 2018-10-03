import React, { Component } from 'react';

class Madlib extends Component {
    render() {
      return (
        <div className="Madlib-text">
          <p>
            It was a {this.props.word1} and {this.props.word2} night. Suddenly, a {this.props.word3} rang out! <br/><br/>
            A {this.props.word4} slammed. {this.props.word5} screamed.<br/><br/> 
            Suddenly, {this.props.word6} appeared on the horizon! 
          </p>
        </div>
      );
    }
  }
  
  export default Madlib;
  