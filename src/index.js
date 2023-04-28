import './index.html';

const { body } = document;

class Keyboard {
  constructor(width, height) {
    this.width = width || 75;
    this.height = height || 25 * 5;
    this.workSpace = null;
    this.viewField = this.createViewField();
    this.keyBoard = this.createKeyBoard();
    this.lang = 'en';
  }

  createViewField() {
    this.viewField = document.createElement('textarea');
    this.viewField.className = 'textarea';
    return this.viewField;
  }

  createKeyBoard() {
    this.keyBoard = document.createElement('div');
    this.keyBoard.className = 'keyboard';
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
board.createWorkSpaсe();
