"use strict";

var React = require("react");
// var SearchForm = require("./SearchForm.react");

var SelectSection = React.createClass({

  // propTypes: {
  //   states: React.PropTypes.object.isRequired,
  //   onSearchTweet: React.PropTypes.func.isRequired
  // },

  componentDidMount: function() {
    // this._loadTweetsFromServer();
  },

  // _loadTweetsFromServer: function() {
  //   this.props.onSearchTweet();
  // },

  // _handleFormSubmit: function() {
  //   this.props.onSearchTweet();
  // },

  render: function() {
    // var states = this.props.states;
    return (
      <ul>
        <li>
          <label><input type="checkbox" name="" value="">&lt;br&gt;を削除</input></label>
        </li>
      </ul>
    );
  }

});

module.exports = SelectSection;