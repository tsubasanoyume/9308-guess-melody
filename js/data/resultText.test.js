import assert from 'assert';
import getResultText from '../getResultText.js';

describe(`Get Result text tests`, () => {
  describe(`Loser scenarios`, () => {
    it(`should return loser with time text when time is up`, () => {
      assert.equal(`Время вышло! Вы не успели отгадать все мелодии`, getResultText([], {points: -1, time: -1}));
    });
    it(`should return loser with attempts text when lives ends`, () => {
      assert.equal(`У вас закончились все попытки. Ничего, повезёт в следующий раз!`, getResultText([], {points: -1, lives: -1}));
    });
  });

  describe(`Winner scenarios`, () => {
    it(`should return winner text on first place in stats`, () => {
      assert.equal(`Вы заняли 1-ое место из 5 игроков. Это лучше чем у 80% игроков`, getResultText([18, 2, 14, 3], {points: 20}));
    });
    it(`should return winner text on second place in stats`, () => {
      assert.equal(`Вы заняли 2-ое место из 5 игроков. Это лучше чем у 60% игроков`, getResultText([20, 2, 14, 3], {points: 18}));
    });
    it(`should return winner text on third place in stats`, () => {
      assert.equal(`Вы заняли 3-ое место из 5 игроков. Это лучше чем у 40% игроков`, getResultText([20, 2, 18, 3], {points: 14}));
    });
    it(`should return winner text on forth place in stats`, () => {
      assert.equal(`Вы заняли 4-ое место из 5 игроков. Это лучше чем у 20% игроков`, getResultText([20, 2, 18, 10], {points: 5}));
    });
    it(`should return winner text on fifth place in stats`, () => {
      assert.equal(`Вы заняли 5-ое место из 5 игроков. Это лучше чем у 0% игроков`, getResultText([20, 5, 18, 10], {points: 2}));
    });
    it(`should return winner text on first place in stats`, () => {
      assert.equal(`Вы заняли 1-ое место из 1 игроков. Это лучше чем у 100% игроков`, getResultText([], {points: 2}));
    });
  });
});
