export const defaultState = Object.freeze({
  lives: 3,
  level: 0,
  time: 300
});

export const levels = {
  'state-1': {
    type: `artist`,
    question: `Кто исполняет эту песню?`,
    srcAudio: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
    answers: [
      {
        imageSRC: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
        nameArtist: `Kevin MacLeod`,
        isRight: false
      },
      {
        imageSRC: `https://i.vimeocdn.com/portrait/992615_300x300`,
        nameArtist: `Jingle Punks`,
        isRight: true
      },
      {
        imageSRC: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        nameArtist: `Audionautix`,
        isRight: false
      },
    ]
  },
  'state-2': {
    type: `genre`,
    question: `Выберите инди-рок треки`,
    genre: `rock`,
    answers: [
      {
        srcAudio: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        nameArtist: `Level Plane`,
        genre: `R&B`
      },
      {
        srcAudio: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        nameArtist: `Jingle Punks`,
        genre: `rock`
      },
      {
        srcAudio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        nameArtist: `Gunnar Olsen`,
        genre: `Electronic`
      },
      {
        srcAudio: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        nameArtist: `Kevin MacLeod`,
        genre: `Rock`
      },
    ]
  },
  'state-3': {
    type: `artist`,
    question: `Кто исполняет эту песню?`,
    srcAudio: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
    answers: [
      {
        imageSRC: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
        nameArtist: `Kevin MacLeod`,
        isRight: false
      },
      {
        imageSRC: `https://i.vimeocdn.com/portrait/992615_300x300`,
        nameArtist: `Jingle Punks`,
        isRight: true
      },
      {
        imageSRC: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        nameArtist: `Audionautix`,
        isRight: false
      },
    ]
  },
  'state-4': {
    type: `genre`,
    question: `Выберите инди-рок треки`,
    genre: `rock`,
    answers: [
      {
        srcAudio: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        nameArtist: `Level Plane`,
        genre: `R&B`
      },
      {
        srcAudio: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        nameArtist: `Jingle Punks`,
        genre: `Pop`
      },
      {
        srcAudio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        nameArtist: `Gunnar Olsen`,
        genre: `Electronic`
      },
      {
        srcAudio: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        nameArtist: `Kevin MacLeod`,
        genre: `Rock`
      },
    ]
  },
  'state-5': {
    type: `artist`,
    question: `Кто исполняет эту песню?`,
    srcAudio: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
    answers: [
      {
        imageSRC: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
        nameArtist: `Kevin MacLeod`,
        isRight: false
      },
      {
        imageSRC: `https://i.vimeocdn.com/portrait/992615_300x300`,
        nameArtist: `Jingle Punks`,
        isRight: true
      },
      {
        imageSRC: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        nameArtist: `Audionautix`,
        isRight: false
      },
    ]
  },
  'state-6': {
    type: `genre`,
    question: `Выберите инди-рок треки`,
    genre: `rock`,
    answers: [
      {
        srcAudio: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        nameArtist: `Level Plane`,
        genre: `R&B`
      },
      {
        srcAudio: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        nameArtist: `Jingle Punks`,
        genre: `Pop`
      },
      {
        srcAudio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        nameArtist: `Gunnar Olsen`,
        genre: `Electronic`
      },
      {
        srcAudio: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        nameArtist: `Kevin MacLeod`,
        genre: `Rock`
      },
    ]
  },
  'state-7': {
    type: `artist`,
    question: `Кто исполняет эту песню?`,
    srcAudio: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
    answers: [
      {
        imageSRC: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
        nameArtist: `Kevin MacLeod`,
        isRight: false
      },
      {
        imageSRC: `https://i.vimeocdn.com/portrait/992615_300x300`,
        nameArtist: `Jingle Punks`,
        isRight: true
      },
      {
        imageSRC: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        nameArtist: `Audionautix`,
        isRight: false
      },
    ]
  },
  'state-8': {
    type: `genre`,
    question: `Выберите инди-рок треки`,
    genre: `rock`,
    answers: [
      {
        srcAudio: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        nameArtist: `Level Plane`,
        genre: `R&B`
      },
      {
        srcAudio: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        nameArtist: `Jingle Punks`,
        genre: `Pop`
      },
      {
        srcAudio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        nameArtist: `Gunnar Olsen`,
        genre: `Electronic`
      },
      {
        srcAudio: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        nameArtist: `Kevin MacLeod`,
        genre: `Rock`
      },
    ]
  },
  'state-9': {
    type: `artist`,
    question: `Кто исполняет эту песню?`,
    srcAudio: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
    answers: [
      {
        imageSRC: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
        nameArtist: `Kevin MacLeod`,
        isRight: false
      },
      {
        imageSRC: `https://i.vimeocdn.com/portrait/992615_300x300`,
        nameArtist: `Jingle Punks`,
        isRight: true
      },
      {
        imageSRC: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
        nameArtist: `Audionautix`,
        isRight: false
      },
    ]
  },
  'state-10': {
    type: `genre`,
    question: `Выберите инди-рок треки`,
    genre: `rock`,
    answers: [
      {
        srcAudio: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        nameArtist: `Level Plane`,
        genre: `R&B`
      },
      {
        srcAudio: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
        nameArtist: `Jingle Punks`,
        genre: `Pop`
      },
      {
        srcAudio: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        nameArtist: `Gunnar Olsen`,
        genre: `Electronic`
      },
      {
        srcAudio: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        nameArtist: `Kevin MacLeod`,
        genre: `Rock`
      },
    ]
  },
};

export const stats = [];

export const gameStack = [];

export const statistics = [1, 2, 3];

export const setNextLevel = (game) => {
  game = Object.assign({}, game);
  game.level += 1;

  return game;
};

export const setLives = (game, lives) => {
  game = Object.assign({}, game);
  game.lives = lives;

  return game;
};