import React, {Component} from 'react';
import './Box.css';
import { choice } from './helpers';

class Box extends Component {
    constructor(props){
        super(props);
        this.state = {color: choice(this.props.colors) };
        this.handleClick = this.handleClick.bind(this);
    }
    pickColor() {
        let newColor;
        do {
          newColor = choice(this.props.colors);
        } while (newColor === this.state.color);
    
        this.setState({ color: newColor });
      }
      handleClick() {
        this.pickColor();
      }
      render() {
        return (
          <div
            className = 'Box'
            style = {{ backgroundColor: this.state.color }}
            onClick = {this.handleClick}
          />
        );
    }
}

export default Box;

/*
     pickColor() {
        let newColor;
        do {
          newColor = choice(this.props.allColors);
        } while (newColor === this.state.color);
    
        this.setState({ color: newColor });
      }
      handleClick() {
        this.pickColor();
      }
      render() {
        return (
          <div
            className='Box'
            style={{ backgroundColor: this.state.color }}
            onClick={this.handleClick}
          />
*/




//we are going to return a div with a className, style with its properties and an onClick function
//import a little bit of styling

/* 
    lets get oour background to change, I'm going to use defualt props here up there under the constructor

    STEP 2 =  super(props); is useful whe you are ghoing to use the props in the constructor

    STEP 3 = lets give each box a random color in the beginning, create a helpers.js then put your choice function there  WHICH IS GOING TO RETURN A RANDOM ITEM FROM A LIST

    STEP 4 = remove blue from the state and change it to the choice function you made to generate a random color int he allColors so it is gonna be choice(this.props.allColors)

    STEP 5 = We are going to now change the color when we click {Remember the choice is the RANDOM COLOR}

    STEP 6 = We are going to create a new state with setState then pass in the color as the newColor ,

*/