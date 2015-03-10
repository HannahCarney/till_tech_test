var HipsterList = require(process.cwd() + '/models/hipsterList');
var assert = require('assert');

module.exports = function() {

  var myList;
    listItem = 'coffee'

  this.Given(/^I have an empty hipster list$/, function(callback) {
    myList = HipsterList.create();
    callback();
  });

  this.When(/^I add an item to the list$/, function(callback) {
    myList.add(listItem)
    callback();
  });

  this.Then(/^The hipster list contains a single item$/, function(callback) {
    assert.equal(myList.getAll().length, 1, 'Grocery List should grow by one item.');
    callback();
  });

  this.Then(/^I can access that item from the hipster list$/, function(callback) {
    callback();
  });

};