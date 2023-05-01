import './index.html';
import './style.css';
import keyData from './keysdata';

const { body } = document;

class Keyboard {
  constructor(width, height) {
    this.width = width || 75;
    this.height = height || 25 * 5;
    this.lang = null;
    this.keyLines = [];
    this.shift = false;
    this.shiftLeft = false;
    this.altLeft = false;
    this.crtl = false;
    this.alt = false;
    this.CapsLock = false;
    this.workSpace = null;
    this.viewField = this.createViewField();
    this.keyBoard = this.createKeyBoard();
    this.addListener();
  }

  createViewField() {
    this.viewField = document.createElement('textarea');
    this.viewField.className = 'textarea';
    this.viewField.addEventListener('change', () => this.viewField.focus());
    this.viewField.addEventListener('blur', () => this.viewField.focus());
    return this.viewField;
  }

  redrawButton() {
    if (this.altLeft && this.shiftLeft) {
      this.lang = (this.lang === 'en') ? 'ru' : 'en';
      localStorage.setItem('lang', this.lang);
      keyData.filter((x) => !Object.prototype.hasOwnProperty.call(x, 'text')
                         && !Object.prototype.hasOwnProperty.call(x, 'base')).forEach((x) => {
        x.pointer.children[0].classList.toggle('not-active');
        x.pointer.children[1].classList.toggle('not-active');
      });
      return;
    }
    if (this.alt) return;
    const flg = ((!this.shift && this.CapsLock) || (this.shift && !this.CapsLock));
    keyData
      .filter((x) => (Object.prototype.hasOwnProperty.call(x, 'en')))
      .map((x) => x.pointer.classList.toggle('caps-lock', flg));
    keyData
      .filter((x) => (Object.prototype.hasOwnProperty.call(x, 'base')))
      .map((x) => {
        const y = x;
        y.pointer.children[0].textContent = x.shift[this.lang];
        return y;
      });
    keyData
      .filter((x) => (Object.prototype.hasOwnProperty.call(x, 'base'))).forEach((x) => {
        x.pointer.children[0].classList.toggle('not-active', !this.shift);
        x.pointer.children[1].classList.toggle('not-active', this.shift);
      });
  }

  writeSymbolToCursorPosition(char) {
    if (char === undefined) return;
    const str = this.viewField.value;
    const strLenght = this.viewField.value.length;
    const currStart = this.viewField.selectionStart;
    if (strLenght === currStart) this.viewField.value += char;
    else {
      this.viewField.value = str.slice(0, currStart) + char + str.slice(currStart);
      this.viewField.selectionStart = currStart + 1;
      this.viewField.selectionEnd = currStart + 1;
    }
  }

  writeSymbolToViewField(keyButton) {
    let charToOut;
    const str = this.viewField.value;
    const currStart = this.viewField.selectionStart;

    const pressedKey = keyData.filter((x) => x.key === keyButton);
    if (pressedKey[0].key === 'ArrowLeft') {
      this.viewField.selectionStart -= 1;
      this.viewField.selectionEnd -= 1;
    }
    if (pressedKey[0].key === 'ArrowRight') {
      this.viewField.selectionEnd += 1;
      this.viewField.selectionStart += 1;
    }
    if (pressedKey[0].key === 'Backspace') {
      if (currStart !== 0) {
        this.viewField.value = str.slice(0, currStart - 1) + str.slice(currStart);
        this.viewField.selectionStart = currStart - 1;
        this.viewField.selectionEnd = currStart - 1;
      }
    }
    if (pressedKey[0].key === 'Delete') {
      this.viewField.value = str.slice(0, currStart) + str.slice(currStart + 1);
      this.viewField.selectionStart = currStart;
      this.viewField.selectionEnd = currStart;
    }
    if (pressedKey[0].key === 'Enter') {
      this.viewField.value = `${str.slice(0, currStart)}\n${str.slice(currStart)}`;
      this.viewField.selectionStart = currStart + 1;
      this.viewField.selectionEnd = currStart + 1;
    }
    if (pressedKey[0].key === 'CapsLock') {
      this.CapsLock = !this.CapsLock;
      keyData.find((x) => x.key === 'CapsLock').pointer.classList.toggle('fix-key', this.CapsLock);
      keyData
        .filter((x) => (Object.prototype.hasOwnProperty.call(x, 'en')))
        .map((x) => x.pointer.classList.toggle('caps-lock'));
    }
    if (Object.prototype.hasOwnProperty.call(pressedKey[0], 'content')) {
      charToOut = pressedKey[0].content;
      this.viewField.value += charToOut;
    }
    if (Object.prototype.hasOwnProperty.call(pressedKey[0], 'base') && this.shift) {
      charToOut = pressedKey[0].shift[this.lang];
    } else charToOut = pressedKey[0].base;
    if (Object.prototype.hasOwnProperty.call(pressedKey[0], 'en')) {
      charToOut = (!this.shift && this.CapsLock) || (this.shift && !this.CapsLock)
        ? pressedKey[0][this.lang].toUpperCase()
        : pressedKey[0][this.lang];
    }
    this.writeSymbolToCursorPosition(charToOut);
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
      if (this.lang === 'en') {
        langOne.className = 'lang-one';
        langTwo.className = 'lang-two not-active';
      } else {
        langOne.className = 'lang-one not-active';
        langTwo.className = 'lang-two';
      }

      if (Object.prototype.hasOwnProperty.call(btn, 'base')) {
        langOne.className = 'lang-one not-active';
        langTwo.className = 'lang-two';
        langOne.textContent = btn.shift[this.lang];
        langTwo.textContent = btn.base;
      } else {
        langOne.textContent = btn.en;
        langTwo.textContent = btn.ru;
      }

      button.append(langOne);
      button.append(langTwo);
    }
    button.addEventListener('mousedown', (e) => {
      e.target.closest('.key').classList.toggle('press', true);
      if ((btn.key === 'ShiftLeft') || (btn.key === 'ShiftRight')) this.shift = true;
      this.redrawButton();
      this.writeSymbolToViewField(btn.key);
    });
    button.addEventListener('mouseup', (e) => {
      e.target.closest('.key').classList.toggle('press', false);
      if ((btn.key === 'ShiftLeft') || (btn.key === 'ShiftRight')) this.shift = false;
      this.redrawButton();
    });

    return button;
  }

  createKeyLines(arr) {
    const keyLine = document.createElement('div');
    keyLine.className = 'key-lines';

    const arrB = arr.map((x) => {
      const y = x;
      y.pointer = this.createButton(x);
      return y;
    });

    arrB.map((x) => keyLine.append(x.pointer));

    return keyLine;
  }

  createKeyBoard() {
    if (localStorage.getItem('lang') === null) {
      this.lang = 'en';
    } else { this.lang = localStorage.getItem('lang'); }

    this.keyBoard = document.createElement('div');
    this.keyBoard.className = 'keyboard';
    this.keyBoard.append(this.createKeyLines(keyData));

    return this.keyBoard;
  }

  addListener() {
    document.addEventListener('keydown', (e) => {
      e.preventDefault();
      if ((e.code === 'ShiftLeft') && e.repeat) return;
      const pressedKey = keyData.filter((x) => x.key === e.code.toString());
      if (pressedKey.length !== 0) pressedKey[0].pointer.classList.toggle('press', true);
      this.shift = e.shiftKey;
      this.alt = e.altKey;
      this.crtl = e.ctrlKey;
      if (e.code === 'ShiftLeft') this.shiftLeft = true;
      if (e.code === 'AltLeft') this.altLeft = true;
      this.redrawButton();
      this.writeSymbolToViewField(e.code);
    });
    document.addEventListener('keyup', (e) => {
      const pressedKey = keyData.filter((x) => x.key === e.code.toString());
      if (pressedKey.length !== 0) pressedKey[0].pointer.classList.toggle('press', false);
      this.shift = e.shiftKey;
      this.alt = e.altKey;
      this.crtl = e.ctrlKey;
      if (e.code === 'ShiftLeft') this.shiftLeft = false;
      if (e.code === 'AltLeft') {
        this.altLeft = false;
        return;
      }
      this.redrawButton();
    });
  }

  createWorkSpaсe() {
    this.workSpace = document.createElement('div');
    this.workSpace.className = 'work-space';

    this.workSpace.append(this.viewField);
    this.workSpace.append(this.keyBoard);

    body.append(this.workSpace);
    this.viewField.focus();

    return this.workSpace;
  }
}

const board = new Keyboard();
board.createWorkSpaсe();
