import React, {Component} from 'react';
import './reset.css';


import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';


class FilterGroup extends Component {

  generateFormControlLabel = (selection) => {
    return (
      <FormControlLabel
      control={<Checkbox onChange={() => this.handleChange(selection)} value={selection} />}
      label={selection}
      key={selection}
      />
    );
  }

  handleChange = (value) => {
    this.props.filterItems(value, this.props.title);
  }

  render() {

    const selections = this.props.selections.map(this.generateFormControlLabel);

    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">{this.props.title.replace('_', ' ')}</FormLabel>
        <FormGroup>
          {selections}
        </FormGroup>
      </FormControl>
    )
  }
}

export default FilterGroup;
