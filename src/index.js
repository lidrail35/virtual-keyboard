import './index.html';
import './style.css';
import keyData from './keysdata';

const { body } = document;

class Keyboard {
  constructor(width, height) {
    this.width = width || 75;
    this.height = height || 25 * 5;
    this.lang = 'en';
    this.keyLines = [];
    this.shift = false;
    this.shiftLeft = false;
    this.altLeft = false;
    this.crtl = false;
    this.alt = false;
    this.workSpace = null;
    this.viewField = this.createViewField();
    this.keyBoard = this.createKeyBoard();
    this.addListener();
  }

  createViewField() {
    this.viewField = document.createElement('textarea');
    this.viewField.className = 'textarea';
    this.viewField.disabled = true;
    return this.viewField;
  }

  redrawButton() {
    if (this.altLeft && this.shiftLeft) {
      this.lang = (this.lang === 'en') ? 'ru' : 'en';
      keyData.filter((x) => !Object.prototype.hasOwnProperty.call(x, 'text')).forEach((x) => {
        x.pointer.children[0].classList.toggle('not-active');
        x.pointer.children[1].classList.toggle('not-active');
      });
    }
  }

  writeSymbolToViewField(keyButton) {
    this.redrawButton();
    // if this.altKey && this.shiftKey
    if (keyButton.includes('Left') || keyButton.includes('Right')) return;
    const pressedKey = keyData.filter((x) => x.key === keyButton);
    const charToOut = this.shift ? pressedKey[0][this.lang].toUpperCase()
      : pressedKey[0][this.lang];
    // keyData[0]
    this.viewField.textContent += charToOut;
  }

  createButton(btn) {
    const button = document.createElement('div');
    const langOne = document.createElement('span');
    const langTwo = document.createElement('span');

    button.className = `key size-${btn.size}`;
    if (Object.prototype.hasOwnProperty.call(btn, 'text')) {
      button.className = `key single size-${btn.size}`;
      button.textContent = btn.text;
    } else {
      langOne.className = 'lang-one';
      langTwo.className = 'lang-two not-active';

      langOne.textContent = btn.en.toUpperCase();
      langTwo.textContent = btn.ru.toUpperCase();

      button.append(langOne);
      button.append(langTwo);
    }
    button.addEventListener('mousedown', (e) => {
      e.target.closest('.key').classList.toggle('press', true);
      this.writeSymbolToViewField(btn.key);
      // this.viewField.textContent += btn.en;
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
      console.log(`down ${e.key}, ${e.code}, ${e.shiftKey}`);
      const pressedKey = keyData.filter((x) => x.key === e.code.toString());
      if (pressedKey.length !== 0) pressedKey[0].pointer.classList.toggle('press', true);
      this.shift = e.shiftKey;
      this.alt = e.altKey;
      this.crtl = e.ctrlKey;
      if (e.code === 'ShiftLeft') this.shiftLeft = true;
      if (e.code === 'AltLeft') this.altLeft = true;
      this.writeSymbolToViewField(e.code);
    });
    document.addEventListener('keyup', (e) => {
      console.log(`up  ${e.key}, ${e.code}`);
      const pressedKey = keyData.filter((x) => x.key === e.code.toString());
      if (pressedKey.length !== 0) pressedKey[0].pointer.classList.toggle('press', false);
      this.shift = e.shiftKey;
      this.alt = e.altKey;
      this.crtl = e.ctrlKey;
      if (e.code === 'ShiftLeft') this.shiftLeft = false;
      if (e.code === 'AltLeft') this.altLeft = false;
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
