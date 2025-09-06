'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,
    add(current, num) {
      return current + num;
    },
    subtract(current, num) {
      return current - num;
    },
    multiply(current, num) {
      return current * num;
    },
    divide(current, num) {
      return current / num;
    },
    reset() {
      this.result = 0;

      return this;
    },
    operate(callback, number) {
      this.result = callback(this.result, number);

      return this;
    },
  };
}

module.exports = makeCalculator;
