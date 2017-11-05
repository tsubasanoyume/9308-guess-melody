import WelcomeView from './welcome-view.js';
import setScreen from '../setScreen.js';
import App from '../application.js';

class WelcomeScreen {
  constructor() {
    this.view = new WelcomeView();
  }

  init() {
    setScreen(this.view);

    this.view.onClick = () => {
      App.changeLevel();
    };

  }

  onPlay() {
    this.view.onPlay();
  }
}

export default new WelcomeScreen();
