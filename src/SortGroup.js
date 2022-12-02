import React, {Component} from 'react';
import './reset.css';

import {FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@material-ui/core';



class SortGroup extends Component {

  constructor() {
    super()

    this.state = {value: 'imageNum'}
      
      // value: this.props.reset
      // value: 'rating'
    
  }

  // sortItems = (sortType) => {
  //   this.setState({ itemInformation: this.state.itemInformation.sort((item1, item2) => { return item1[sortType] - item2[sortType] }) });
  // }
  handleChange = event => {
    this.setState({value: event.target.value});
    this.props.sortItems(event.target.value);
  }

  render() {
    if (this.props.resetSort) {
        this.state.value="imageNum";
    }
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Sort By</FormLabel>
        <RadioGroup value={this.state.value} onChange={this.handleChange}>
          <FormControlLabel value="rating" control={<Radio /> } onChange={this.handleChange}label="Customer review (low to high)" />
          <FormControlLabel value="price" control={<Radio />} label="Price (low to high)" />
          <FormControlLabel value="imageNum" control={<Radio />} label="default" />
        </RadioGroup>
      </FormControl>
    );
  }
}

export default SortGroup;
