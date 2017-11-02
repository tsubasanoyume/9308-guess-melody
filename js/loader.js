import {SERVER_URL} from './data/Constants.js';

export default class Loader {
  static load() {
    return fetch(`${SERVER_URL}/questions`).then((response) => response.json());
  }
}
