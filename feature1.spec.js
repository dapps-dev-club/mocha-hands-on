// tests for: feature1

const assert = require('assert');

const { add } = require('./feature1.js');

describe('feature1', () => {

  describe('add', () => {

    it('works with specific values', () => {
      // specific known values
      const result = add(1, 2);
      assert.equal(result, 3);
    });

    it('is commutative', () => {
      // a + b = b + a
      const leftHandSide = add(15, 99);
      const rightHandSide = add(99, 15);
      assert.equal(leftHandSide, rightHandSide);
    });

    it('is associative', () => {
      // (a + b) + c = a + (b + c)
      const leftHandSide = add(add(15, 99), 890);
      const rightHandSide = add(15, add(99, 890));
      assert.equal(leftHandSide, rightHandSide);
    });

  });

});