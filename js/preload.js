export default (src) => {
  return new Promise((resolve) => {
    const audio = new Audio();
    audio.addEventListener(`canplaythrough`, () => resolve(audio));
    audio.src = src;
  });
};
