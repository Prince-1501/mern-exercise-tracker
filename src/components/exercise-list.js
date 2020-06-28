import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ExerciseList extends Component {

  constructor(props){
    super(props);

    
  }

  render(){
    return(
      <div>
      <p> You are in the Exercise List Component ! </p>
      </div>
    );
  }
}
