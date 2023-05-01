const keyData = [
  {
    key: 'Backquote', ru: { little: 'ё', big: 'Ё' }, en: { little: '`', big: '~' }, size: 0, status: 2, pointer: null,
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
    key: 'KeyQ', ru: { little: 'й', big: 'Й' }, en: { little: 'q', big: 'Q' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyW', ru: { little: 'ц', big: 'Ц' }, en: { little: 'w', big: 'W' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyE', ru: { little: 'у', big: 'У' }, en: { little: 'e', big: 'E' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyR', ru: { little: 'к', big: 'К' }, en: { little: 'r', big: 'R' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyT', ru: { little: 'е', big: 'Е' }, en: { little: 't', big: 'T' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyY', ru: { little: 'н', big: 'Н' }, en: { little: 'y', big: 'Y' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyU', ru: { little: 'г', big: 'Г' }, en: { little: 'u', big: 'U' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyI', ru: { little: 'ш', big: 'Ш' }, en: { little: 'i', big: 'I' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyO', ru: { little: 'щ', big: 'Щ' }, en: { little: 'o', big: 'O' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyP', ru: { little: 'з', big: 'З' }, en: { little: 'p', big: 'P' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'BracketLeft', ru: { little: 'х', big: 'Х' }, en: { little: '[', big: '{' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'BracketRight', ru: { little: 'ъ', big: 'Ъ' }, en: { little: ']', big: '}' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'Backslash', ru: { little: '\\', big: '/' }, en: { little: '\\', big: '|' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'Delete', text: 'Del', size: 21, status: 1, pointer: null,
  },
  {
    key: 'CapsLock', text: 'CapsLock', size: 31, status: 1, pointer: null,
  },
  {
    key: 'KeyA', ru: { little: 'ф', big: 'Ф' }, en: { little: 'a', big: 'A' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyS', ru: { little: 'ы', big: 'Ы' }, en: { little: 's', big: 'S' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyD', ru: { little: 'в', big: 'В' }, en: { little: 'd', big: 'D' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyF', ru: { little: 'а', big: 'А' }, en: { little: 'f', big: 'F' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyG', ru: { little: 'п', big: 'П' }, en: { little: 'g', big: 'G' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyH', ru: { little: 'р', big: 'Р' }, en: { little: 'h', big: 'H' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyJ', ru: { little: 'о', big: 'О' }, en: { little: 'j', big: 'J' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyK', ru: { little: 'л', big: 'Л' }, en: { little: 'k', big: 'K' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyL', ru: { little: 'д', big: 'Д' }, en: { little: 'l', big: 'L' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'Semicolon', ru: { little: 'ж', big: 'Ж' }, en: { little: ';', big: ':' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'Quote', ru: { little: 'э', big: 'Э' }, en: { little: '\'', big: '"' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'Enter', text: 'Enter', size: 32, status: 1, pointer: null,
  },
  {
    key: 'ShiftLeft', text: 'Shift', size: 41, status: 1, pointer: null,
  },
  {
    key: 'KeyZ', ru: { little: 'я', big: 'Я' }, en: { little: 'z', big: 'Z' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyX', ru: { little: 'ч', big: 'Ч' }, en: { little: 'x', big: 'X' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyC', ru: { little: 'с', big: 'С' }, en: { little: 'c', big: 'C' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyV', ru: { little: 'м', big: 'М' }, en: { little: 'v', big: 'V' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyB', ru: { little: 'и', big: 'И' }, en: { little: 'b', big: 'B' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyN', ru: { little: 'т', big: 'Т' }, en: { little: 'n', big: 'N' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'KeyM', ru: { little: 'ь', big: 'Ь' }, en: { little: 'm', big: 'M' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'Comma', ru: { little: 'б', big: 'Б' }, en: { little: ',', big: '<' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'Period', ru: { little: 'ю', big: 'Ю' }, en: { little: '.', big: '>' }, size: 0, status: 2, pointer: null,
  },
  {
    key: 'Slash', ru: { little: '.', big: ',' }, en: { little: '/', big: '?' }, size: 0, status: 2, pointer: null,
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
    key: 'Space', ru: { little: ' ', big: ' ' }, en: { little: ' ', big: ' ' }, size: 52, status: 1, pointer: null,
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
