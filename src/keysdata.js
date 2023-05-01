const keyData = [
  {
    key: 'Backquote', ru: 'ё', en: '`', size: 0, status: 2, pointer: null,
  },
  {
    key: 'Digit1', base: '1', shift: { ru: '!', en: '!' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'Digit2', base: '2', shift: { ru: '"', en: '@' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'Digit3', base: '3', shift: { ru: '№', en: '#' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'Digit4', base: '4', shift: { ru: ';', en: '$' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'Digit5', base: '5', shift: { ru: '%', en: '%' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'Digit6', base: '6', shift: { ru: ':', en: '^' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'Digit7', base: '7', shift: { ru: '?', en: '&' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'Digit8', base: '8', shift: { ru: '*', en: '*' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'Digit9', base: '9', shift: { ru: '(', en: '(' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'Digit0', base: '0', shift: { ru: ')', en: ')' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'Minus', base: '-', shift: { ru: '_', en: '_' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'Equal', base: '=', shift: { ru: '+', en: '+' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'Backspace', text: 'Backspace', size: 11, status: 1, pointer: null,
  },
  {
    key: 'Tab', text: 'Tab', content: '\t', size: 21, status: 1, pointer: null,
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
    key: 'Delete', text: 'Del', size: 21, status: 1, pointer: null,
  },
  {
    key: 'CapsLock', text: 'CapsLock', size: 31, status: 1, pointer: null,
  },
  {
    key: 'KeyA', ru: 'ф', en: 'a', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyS', ru: 'ы', en: 's', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyD', ru: 'в', en: 'd', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyF', ru: 'а', en: 'f', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyG', ru: 'п', en: 'g', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyH', ru: 'р', en: 'h', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyJ', ru: 'о', en: 'j', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyK', ru: 'л', en: 'k', size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyL', ru: 'д', en: 'l', size: 0, status: 2, pointer: null,
  },
  {
    key: 'Semicolon', ru: 'ж', en: ';', size: 0, status: 2, pointer: null,
  },
  {
    key: 'Quote', ru: 'э', en: '\'', size: 0, status: 2, pointer: null,
  },
  {
    key: 'Enter', text: 'Enter', size: 32, status: 1, pointer: null,
  },
  {
    key: 'ShiftLeft', text: 'Shift', size: 41, status: 1, pointer: null,
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
    key: 'ArrowUp', text: '▲', content: '▲', size: 0, status: 2, pointer: null,
  },
  {
    key: 'ShiftRight', text: 'Shift', size: 42, status: 1, pointer: null,
  },
  {
    key: 'ControlLeft', text: 'Ctrl', size: 51, status: 1, pointer: null,
  },
  {
    key: 'MetaLeft', text: 'WIN', size: 0, status: 1, pointer: null,
  },
  {
    key: 'AltLeft', text: 'Alt', size: 0, status: 1, pointer: null,
  },
  {
    key: 'Space', text: '', content: ' ', size: 52, status: 1, pointer: null,
  },
  {
    key: 'AltRight', text: 'Alt', size: 0, status: 1, pointer: null,
  },
  {
    key: 'ArrowLeft', text: '◄', size: 0, status: 1, pointer: null,
  },
  {
    key: 'ArrowDown', text: '▼', content: '▼', size: 0, status: 1, pointer: null,
  },
  {
    key: 'ArrowRight', text: '►', size: 0, status: 1, pointer: null,
  },
  {
    key: 'ControlRight', text: 'Ctrl', size: 51, status: 1, pointer: null,
  },
];
export default keyData;
