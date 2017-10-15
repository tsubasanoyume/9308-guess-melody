import assert from 'assert';
import getTimer from '../getTimer.js';

describe(`Timer tests`, () => {
  it(`should new timer with set value`, () => {
    const timer = getTimer(3);
    assert.equal(3, timer.value);
  });
  it(`should decrement value by tick`, () => {
    const timer = getTimer(5);
    timer.tick();
    assert.equal(4, timer.value);
  });
  it(`should decrement value by every call tick`, () => {
    const timer = getTimer(15);
    timer.tick();
    timer.tick();
    timer.tick();
    timer.tick();
    timer.tick();
    assert.equal(10, timer.value);
  });
  it(`should return false when timer stop`, () => {
    const timer = getTimer(0);
    assert.equal(-1, timer.tick());
  });
  it(`should return true when timer continue`, () => {
    const timer = getTimer(2);
    assert.equal(true, timer.tick());
  });

});
