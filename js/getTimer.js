const getTimer = (val) => {
  let timer = null;

  return {
    value: val,
    tick() {
      return --this.value;
    },
    start() {
      timer = setTimeout(() => {
        if (this.value > 0) {
          this.tick();
        } else {
          this.stop();
        }
      }, 1000);
    },
    stop() {
      clearTimeout(timer);
    }
  };
};

export default getTimer;
