"use strict";

var React = require("react");

var InputSection = React.createClass({

  getInitialState: function() {
    return {
      placeholder: "ここに`html`タグをペーストしてください"
    };
  },

  componentDidMount: function() {
  },

  render: function() {
    return (
      <div className="input-box column">
        <textarea id="src" placeholder={this.state.placeholder}></textarea>
      </div>
    );
  }

});

module.exports = InputSection;