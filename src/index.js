import './index.html';
import './style.css';
import keyData from './keysdata';

const { body } = document;

class Keyboard {
  constructor(width, height) {
    this.width = width || 75;
    this.height = height || 25 * 5;
    this.viewField = this.createViewField();
    this.keyBoard = this.createKeyBoard();
    this.workSpace = this.createWorkSpaсe();
    this.lang = 'en';
    this.keyLines = [];
  }

  createViewField() {
    this.viewField = document.createElement('textarea');
    this.viewField.className = 'textarea';
    return this.viewField;
  }

  createButton(btn) {
    const button = document.createElement('div');
    const langOne = document.createElement('span');
    const langTwo = document.createElement('span');

    button.className = 'keyboard-button';
    langOne.className = 'lang-one';
    langTwo.className = 'lang-two';

    langOne.textContent = btn.en;
    langTwo.textContent = btn.ru;

    button.append(langOne);
    button.append(langTwo);

    return button;
  }

  createKeyLines(arr) {
    const keyLine = document.createElement('div');
    keyLine.className = 'key-lines';

    const arrB = arr.map((x) => {
      x.pointer = this.createButton(x);
      x.pointer.className = 'key';
      return x;
    });

    arrB.map((x) => keyLine.append(x.pointer));

    return keyLine;
  }

  createKeyBoard() {
    this.keyBoard = document.createElement('div');
    this.keyBoard.className = 'keyboard';
    this.keyBoard.append(this.createKeyLines(keyData));

    return this.keyBoard;
  }

  createWorkSpaсe() {
    this.workSpace = document.createElement('div');
    this.workSpace.className = 'work-space';

    this.workSpace.append(this.viewField);
    this.workSpace.append(this.keyBoard);

    body.append(this.workSpace);

    return this.workSpace;
  }
}

const board = new Keyboard();
// board.createWorkSpaсe();
