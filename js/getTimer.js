const getTimer = (val) => {
  return {
    value: val,
    tick() {
      if (this.value > 0) {
        return getTimer(--this.value);
      } else {
        return false;
      }
    }
  };
};

export default getTimer;
