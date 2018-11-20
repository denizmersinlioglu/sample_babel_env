'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _teacher = require('./teacher');

var _teacher2 = _interopRequireDefault(_teacher);

var _person = require('./person');

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var person = new _person2.default('Deniz');
var teacher = new _teacher2.default('Teacher');
teacher.degree = 4;
console.log(teacher.degree);
var runner = {
  name: 'Runner',
  run: function run() {
    console.log(this);
  },
  swim: function swim() {
    var _this = this;

    setTimeout(function () {
      console.log('this :', _this);
    }, 1000);
  }
};

person.walk();

var walk = person.walk.bind(person);
console.log(walk);

var square = function square(number) {
  return number * number;
};
console.log(square(5));

var jobs = [{ id: 0, isActive: true }, { id: 1, isActive: true }, { id: 2, isActive: false }];

var others = [{ id: 3, isActive: true }, { id: 4, isActive: true }, { id: 5, isActive: false }];

jobs.filter(function (c) {
  return c.id === 2;
}).forEach(function (c) {
  return console.log(c);
});
person.talk();
jobs.map(function (c) {
  return c.id;
}).forEach(function (c) {
  return console.log(c);
});
var first = jobs[0],
    second = jobs[1];

console.log(first, second);
var ac = first.isActive;

console.log(ac);

var combined = [].concat(jobs, ['a'], others);
console.log('combined :', combined);
var clonedJobs = [].concat(jobs);
console.log('clonedJobs :', clonedJobs);

var centaur = _extends({}, person, runner, { location: 'Australia' });
console.log('centaur :', centaur);

var centaurCopy = _extends({}, centaur);
console.log('centaurCopy :', centaurCopy);