import setTemplateToNode from './getElement.js';

export default class AbstractView {
  get template() {
    throw new Error(`You should provide a template`);
  }

  render() {
    return setTemplateToNode(this.template);
  }

  bind() {

  }

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }

    return this._element;
  }
}

