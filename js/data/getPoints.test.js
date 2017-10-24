import assert from 'assert';
import getPoints from '../getPoints.js';

describe(`getPoints function`, () => {
  describe(`Winner scenarios`, () => {
    it(`should return 20 points`, () => {
      assert.equal(20, getPoints([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 3));
    });
    it(`should return 18 points`, () => {
      assert.equal(18, getPoints([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 2));
    });
    it(`should return 16 points`, () => {
      assert.equal(16, getPoints([10, 10, 10, 10, 10, 10, 10, 10, 10, 10], 1));
    });
    it(`should return 19 points`, () => {
      assert.equal(19, getPoints([32, 10, 10, 10, 10, 10, 10, 10, 10, 10], 3));
    });
    it(`should return 10 points`, () => {
      assert.equal(10, getPoints([32, 32, 32, 32, 32, 32, 32, 32, 32, 32], 3));
    });
    it(`should return 8 points`, () => {
      assert.equal(8, getPoints([32, 32, 32, 32, 32, 32, 32, 32, 32, 32], 2));
    });
    it(`should return 6 points`, () => {
      assert.equal(6, getPoints([32, 32, 32, 32, 32, 32, 32, 32, 32, 32], 1));
    });
  });

  describe(`Loser scenarios`, () => {
    it(`should return -1 points`, () => {
      assert.equal(-1, getPoints([1, 2, 3, 4, 5, 6, 7, 8, 9], 0));
    });
    it(`should return -1 points`, () => {
      assert.equal(-1, getPoints([1, 2, 3, 4, 5, 6, 7, 8, 9], 0));
    });
    it(`should return -1 points`, () => {
      assert.equal(-1, getPoints([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));
    });
  });
});
