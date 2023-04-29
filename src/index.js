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
    this.workSpace = null;
    this.lang = 'en';
    this.keyLines = [];
    this.addListener();
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

    langOne.textContent = btn.en.toUpperCase();
    langTwo.textContent = btn.ru.toUpperCase();

    button.append(langOne);
    button.append(langTwo);

    button.addEventListener('mousedown', (e) => {
      e.target.closest('.key').classList.toggle('press', true);
      this.viewField.textContent += btn.en;
    });
    button.addEventListener('mouseup', (e) => {
      e.target.closest('.key').classList.toggle('press', false);
    });

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

  addListener() {
    document.addEventListener('keydown', (e) => {
      console.log(`down ${e.key}, ${e.code} ${e.getModifierState}`);
      const pressedKey = keyData.filter((x) => x.key === e.code.toString());
      console.log(pressedKey);
      if (pressedKey.length !== 0) pressedKey[0].pointer.classList.toggle('press', true);
    });
    document.addEventListener('keyup', (e) => {
      console.log(`up  ${e.key}, ${e.code}`);
      const pressedKey = keyData.filter((x) => x.key === e.code.toString());
      if (pressedKey.length !== 0) pressedKey[0].pointer.classList.toggle('press', false);
    });
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
board.createWorkSpaсe();
