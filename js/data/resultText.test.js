import assert from 'assert';
import getResultText from '../getResultText.js';

describe(`Get Result text tests`, () => {
  describe(`Loser scenarios`, () => {
    it(`should return loser with time text when time is up`, () => {
      assert.equal(`Время вышло!<br> Вы не успели отгадать все мелодии`, getResultText([], {points: -1, time: -1}).stat);
    });
    it(`should return loser with attempts text when lives ends`, () => {
      assert.equal(`У вас закончились все попытки.<br> Ничего, повезёт в следующий раз!`, getResultText([], {points: -1, lives: -1}).stat);
    });
  });

  describe(`Winner scenarios`, () => {
    it(`should return winner text on first place in stats`, () => {
      assert.equal(`Вы заняли 1-ое место из 5 игроков. Это лучше чем у 80% игроков`, getResultText([18, 2, 14, 3], {points: 20}).comparison);
    });
    it(`should return winner text on second place in stats`, () => {
      assert.equal(`Вы заняли 2-ое место из 5 игроков. Это лучше чем у 60% игроков`, getResultText([20, 2, 14, 3], {points: 18}).comparison);
    });
    it(`should return winner text on third place in stats`, () => {
      assert.equal(`Вы заняли 3-ье место из 5 игроков. Это лучше чем у 40% игроков`, getResultText([20, 2, 18, 3], {points: 14}).comparison);
    });
    it(`should return winner text on forth place in stats`, () => {
      assert.equal(`Вы заняли 4-ое место из 5 игроков. Это лучше чем у 20% игроков`, getResultText([20, 2, 18, 10], {points: 5}).comparison);
    });
    it(`should return winner text on fifth place in stats`, () => {
      assert.equal(`Вы заняли 5-ое место из 5 игроков. Это лучше чем у 0% игроков`, getResultText([20, 5, 18, 10], {points: 2}).comparison);
    });
    it(`should return winner text on first place in stats`, () => {
      assert.equal(`Вы заняли 1-ое место из 1 игрока. Это лучше чем у 100% игроков`, getResultText([], {points: 2}).comparison);
    });
  });
});
