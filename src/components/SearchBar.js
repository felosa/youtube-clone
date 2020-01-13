import React, { Component } from "react";

import { Button } from "@material-ui/core";

export default class SearchBar extends Component {
  state = {
    searchTerm: ""
  };

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = event => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;
    onFormSubmit(searchTerm);
    event.preventDefault();
  };

  render() {
    return (
      <div
        style={{
          marginRight: "200px",
          marginTop: "25px",
          maxWidth: "250px",
          textAlign: "center"
        }}
      >
        <form onSubmit={this.handleSubmit} style={{ display: "flex" }}>
          <input label="Search..." onChange={this.handleChange} />
          <Button style={{ backgroundColor: "#7a101c", color: 'white' }} type="submit">
            Search
          </Button>
        </form>
      </div>
    );
  }
}
