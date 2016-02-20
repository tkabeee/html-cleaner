"use strict";

var React = require("react");
var AppActions = require("../AppActions");
var AppStore = require("../AppStore");
var SelectSection = require("./SelectSection.react");
var InputSection = require("./InputSection.react");
var OutputSection = require("./OutputSection.react");

var App = React.createClass({

  // getInitialState: function() {
  //   return getStateFromStores();
  // },

  componentDidMount: function() {
    // AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    // AppStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div className="">
        <header>
          <h1>HTML Cleaner</h1>
        </header>
        <div className="content-box columns">
          <div className="left-box column is-quarter">
            <SelectSection />
          </div>
          <div className="main-box columns column">
            <InputSection />
            <OutputSection />
          </div>
        </div>
        <footer>
          <small>develop by <a href="http://github.com/tkabeee" target="_blank">tkabee</a>.</small>
        </footer>
      </div>
    );
  }

});

module.exports = App;
