// generative tests for: feature1

const assert = require('assert');

require('mocha-testcheck').install();

const { add } = require('./feature1.js');

describe('feature1 - generative', () => {

  describe('add', () => {

    check.it('is commutative', gen.int, gen.int, (x, y) => {
      // a + b = b + a
      const leftHandSide = add(x, y);
      const rightHandSide = add(y, x);
      assert.equal(leftHandSide, rightHandSide);
    });

    check.it('is associative', gen.int, gen.int, gen.int, (x, y, z) => {
      // (a + b) + c = a + (b + c)
      const leftHandSide = add(add(x, y), z);
      const rightHandSide = add(x, add(y, z));
      assert.equal(leftHandSide, rightHandSide);
    });

  });

});