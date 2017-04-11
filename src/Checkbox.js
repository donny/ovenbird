import React, { Component } from 'react';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this._onChange = this._onChange.bind(this);
  }

  _onChange = (event) => {
    this.setState({checked: event.target.checked});
    this.props.callback(this.state.checked);
  };

  render() {
    return (
        <div>
          <label>
            <input type="checkbox"
              name={this.props.name}
              checked={this.state.checked}
              onChange={this._onChange}
            />
            {this.props.label}
          </label>
        </div>
    );
  }
}

export default Checkbox;
