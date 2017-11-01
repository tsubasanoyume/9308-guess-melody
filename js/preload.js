export default (src) => {
  return new Promise((resolve) => {
    const audio = new Audio();
    audio.oncanplaythrough = () => resolve(audio);
    audio.src = src;
  });
};
