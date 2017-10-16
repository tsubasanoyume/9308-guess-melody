const getTimer = (val) => {
  let timer = null;

  return {
    value: val,
    tick() {
      return --this.value;
    },
    start() {
      timer = setInterval(() => {
        if (this.value > 0) {
          this.tick();
        } else {
          this.stop();
        }
      }, 1000);
    },
    stop() {
      clearInterval(timer);
    },
    reset() {
      this.value = 0;
      clearInterval(timer);
    }
  };
};

export default getTimer;
