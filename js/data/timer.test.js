import assert from 'assert';
import getTimer from '../getTimer.js';

describe(`Timer tests`, () => {
  it(`should return less on one number`, () => {
    const timer = getTimer(30);
    assert.equal(29, timer.tick().val);
  });
  it(`should return false if time's up`, () => {
    const timer = getTimer(0);
    assert.equal(false, timer.tick());
  });

});
