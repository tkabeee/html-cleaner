"use strict";

var React = require("react");

var OutputSection = React.createClass({

  componentDidMount: function() {
  },

  render: function() {
    return (
      <div className="output-box column">
        <div id="dest" className="display"></div>
      </div>
    );
  }

});

module.exports = OutputSection;