import assert from 'assert';

const getTimer = (value) => {
  return {
    val: value,
    tick() {
      if (value > 0) {
        return getTimer(value - 1);
      } else {
        return false;
      }
    }
  };
};

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
