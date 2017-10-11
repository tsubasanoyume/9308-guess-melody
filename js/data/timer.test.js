import assert from 'assert';
import getTimer from '../getTimer.js';

describe(`Timer tests`, () => {
  it(`should return less on one number`, () => {
    const timer = getTimer(30);
    assert.equal(29, timer.tick().value);
    assert.equal(28, timer.tick().value);
    assert.equal(27, timer.tick().value);
  });
  it(`should return false if time's up`, () => {
    const timer = getTimer(0);
    assert.equal(false, timer.tick());
  });
  it(`should return false if time's up`, () => {
    const timer = getTimer(5);
    assert.equal(4, timer.tick().value);
    assert.equal(3, timer.tick().value);
    assert.equal(2, timer.tick().value);
    assert.equal(1, timer.tick().value);
    assert.equal(0, timer.tick().value);
    assert.equal(false, timer.tick());
  });

});
