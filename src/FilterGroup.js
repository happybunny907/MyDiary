import React, {Component} from 'react';
import './reset.css';


import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';


class FilterGroup extends Component {

  // for example, selection can be 'Snacks'
  generateFormControlLabel = (selection) => {
    var isChecked = false;
    // filters can be {'Snacks','Dietary_Restrictions'}
    if (this.props.filters.some((f) => f.name == selection)) {
      isChecked = true;
    }
    // if (this.props.filters.includes({'Snacks','Dietary_Restrictions'})) {
    //   isChecked = true;
    // }
    return (
      <FormControlLabel
      control={<Checkbox onChange={() => this.handleChange(selection)} value={selection} />}
      label={selection}
      key={selection}
      checked={isChecked}
      />
    );
  }

  // for example, value can be 'Snack'
  handleChange = (value) => {
    this.props.filterItems(value, this.props.title);
  }

  render() {

    // for example, this.props can be {title: 'Types', selections: ['Snacks', 'Desserts', 'Entrees', 'Packaged food']}
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
