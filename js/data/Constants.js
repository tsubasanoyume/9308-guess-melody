export const MAX_LIVES = 3;

export const FailResultText = {
  TRY_FAIL: {
    title: `Какая жалость!`,
    stat: `У вас закончились все попытки.<br> Ничего, повезёт в следующий раз!`,
    button: `Попробовать ещё раз`
  },
  TIME_FAIL: {
    title: `Увы и ах!`,
    stat: `Время вышло!<br> Вы не успели отгадать все мелодии`,
    button: `Попробовать ещё раз`
  }
};

export const GAME_TIME = 300;

export const Result = {
  FAIL: 0,
  WIN: 1,
  NEXT: 2,
  DIE: 3
};

export const defaultState = Object.freeze({
  lives: 3,
  level: 1,
  time: GAME_TIME,
  points: 0
});

export const SERVER_URL = `https://es.dump.academy/guess-melody`;

export const DEFAULT_USER = `id9308`;

export const MINUTE_IN_SECOND = 60;

export const RADIUS = 370;

export const ANSWERS_ARRAY_LENGTH = 10;

export const AnswersPoint = {
  ANSWER_FAST: 2,
  ANSWER_SLOW: 1,
  ANSWER_FAIL: -1,
  ANSWER_DIE: 2
};

export const LIMIT_FAST_ANSWER = 30;
export const TIME_TO_SET_TIMER_RED = 30;

export const TICK_TIME = 1000;

export const LENGTH_DECODE_TIME_HASH = 3;

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
