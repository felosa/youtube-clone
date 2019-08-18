import React, { Component } from "react";

import { Paper, TextField, Button, Input } from "@material-ui/core";

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
      <Paper elevation={10} style={{ maxWidth: "250px", textAlign: "center" }}>
        <form onSubmit={this.handleSubmit} style={{ display: "flex" }}>
          <input label="Search..." onChange={this.handleChange} />
          <Button type="submit">Search</Button>
        </form>
      </Paper>
    );
  }
}
