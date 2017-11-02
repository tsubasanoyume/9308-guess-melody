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

export const audioArray = [];

export const SERVER_URL = `https://es.dump.academy/guess-melody`;

export const DEFAULT_USER = `id9308`;
