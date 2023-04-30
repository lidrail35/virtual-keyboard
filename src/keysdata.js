const keyData = [
  {
    key: 'Backquote', ru: 'ё', en: '`', size: 0, status: 2, pointer: null,
  },
  {
    key: 'Digit1', ru: '1', en: '1', size: 0, status: 2, pointer: null,
  },
  {
    key: 'Digit2', ru: '2', en: '2', size: 0, status: 2, pointer: null,
  },
  {
    key: 'Digit3', ru: '3', en: '3', size: 0, status: 2, pointer: null,
  },
  {
    key: 'Digit4', ru: '4', en: '4', size: 0, status: 2, pointer: null,
  },
  {
    key: 'Digit5', ru: '5', en: '5', size: 0, status: 2, pointer: null,
  },
  {
    key: 'Digit6', ru: '6', en: '6', size: 0, status: 2, pointer: null,
  },
  {
    key: 'Digit7', ru: '7', en: '7', size: 0, status: 2, pointer: null,
  },
  {
    key: 'Digit8', ru: '8', en: '8', size: 0, status: 2, pointer: null,
  },
  {
    key: 'Digit9', ru: '9', en: '9', size: 0, status: 2, pointer: null,
  },
  {
    key: 'Digit0', ru: '0', en: '0', size: 0, status: 2, pointer: null,
  },
  {
    key: 'Minus', ru: '-', en: '-', size: 0, status: 2, pointer: null,
  },
  {
    key: 'Equal', ru: '=', en: '=', size: 0, status: 2, pointer: null,
  },
  {
    key: 'Backspace', ru: 'Backspace', en: 'Backspace', size: 11, status: 1, pointer: null,
  },
  {
    key: 'Tab', ru: 'Tab', en: 'Tab', size: 21, status: 1, pointer: null,
  },
  {
    key: 'KeyQ', ru: 'й', en: 'q', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyW', ru: 'ц', en: 'w', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyE', ru: 'у', en: 'e', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyR', ru: 'к', en: 'r', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyT', ru: 'е', en: 't', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyY', ru: 'н', en: 'y', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyU', ru: 'г', en: 'u', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyI', ru: 'ш', en: 'i', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyO', ru: 'щ', en: 'o', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyP', ru: 'з', en: 'p', size: 0, status: 2, pointer: null,
  },
  {
    key: 'BracketLeft', ru: 'х', en: '[', size: 0, status: 2, pointer: null,
  },
  {
    key: 'BracketRight', ru: 'ъ', en: ']', size: 0, status: 2, pointer: null,
  },
  {
    key: 'Backslash', ru: '\\', en: '\\', size: 0, status: 2, pointer: null,
  },
  {
    key: 'Delete', ru: 'Del', en: 'Del', size: 21, status: 1, pointer: null,
  },
  {
    key: 'CapsLock', ru: 'CapsLock', en: 'CapsLock', size: 31, status: 1, pointer: null,
  },
  {
    key: 'KeyA', ru: 'й', en: 'a', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyS', ru: 'ц', en: 's', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyD', ru: 'у', en: 'd', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyF', ru: 'к', en: 'f', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyG', ru: 'е', en: 'g', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyH', ru: 'н', en: 'h', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyJ', ru: 'г', en: 'j', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyK', ru: 'ш', en: 'k', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyL', ru: 'щ', en: 'l', size: 0, status: 2, pointer: null,
  },
  {
    key: 'Semicolon', ru: 'ж', en: ';', size: 0, status: 2, pointer: null,
  },
  {
    key: 'Quote', ru: 'э', en: '\'', size: 0, status: 2, pointer: null,
  },
  {
    key: 'Enter', ru: 'Enter', en: 'Enter', size: 32, status: 1, pointer: null,
  },
  {
    key: 'ShiftLeft', ru: 'Shift', en: 'Shift', size: 41, status: 1, pointer: null,
  },
  {
    key: 'KeyZ', ru: 'я', en: 'z', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyX', ru: 'ч', en: 'x', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyC', ru: 'с', en: 'c', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyV', ru: 'м', en: 'v', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyB', ru: 'и', en: 'b', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyN', ru: 'т', en: 'n', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyM', ru: 'ь', en: 'm', size: 0, status: 2, pointer: null,
  },
  {
    key: 'Comma', ru: 'б', en: ',', size: 0, status: 2, pointer: null,
  },
  {
    key: 'Period', ru: 'ю', en: '.', size: 0, status: 2, pointer: null,
  },
  {
    key: 'Slash', ru: '.', en: '/', size: 0, status: 2, pointer: null,
  },
  {
    key: 'ArrowUp', ru: '▲', en: '▲', size: 0, status: 2, pointer: null,
  },
  {
    key: 'ShiftRight', ru: 'Shift', en: 'Shift', size: 42, status: 1, pointer: null,
  },
  {
    key: 'ControlLeft', ru: 'Control', en: 'Control', size: 51, status: 1, pointer: null,
  },
  {
    key: 'MetaLeft', ru: 'WIN', en: 'WIN', size: 0, status: 1, pointer: null,
  },
  {
    key: 'AltLeft', ru: 'Alt', en: 'Alt', size: 0, status: 1, pointer: null,
  },
  {
    key: 'Space', ru: '', en: '', size: 52, status: 1, pointer: null,
  },
  {
    key: 'AltRight', ru: 'Alt', en: 'Alt', size: 0, status: 1, pointer: null,
  },
  {
    key: 'ArrowLeft', ru: '◄', en: '◄', size: 0, status: 1, pointer: null,
  },
  {
    key: 'ArrowDown', ru: '▼', en: '▼', size: 0, status: 1, pointer: null,
  },
  {
    key: 'ArrowRight', ru: '►', en: '►', size: 0, status: 1, pointer: null,
  },
  {
    key: 'ControlRight', ru: 'Ctrl', en: 'Ctrl', size: 2, status: 1, pointer: null,
  },
];
export default keyData;
