import WelcomeView from './welcome-view.js';
import setScreen from '../setScreen.js';
import startGame from '../game/game.js';

const welcome = new WelcomeView();

welcome.onClick = () => {
  setScreen(startGame());
};

export default () => welcome;
