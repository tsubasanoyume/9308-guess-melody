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

export default getTimer;
