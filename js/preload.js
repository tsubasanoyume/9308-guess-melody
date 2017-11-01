export default (audioArray) => {
  const promiseArray = audioArray.map((item) => {
    return new Promise((onLoad, onError) => {
      const audio = new Audio();
      audio.onload = () => onLoad(audio);
      audio.onError = () => onError(`Запись не удалось загрузить`);
      audio.src = item;
    });
  });

  return promiseArray;
};
