const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  const cipher = [];
  let cipherUnit = '';
  let str = '';

  expr.split('').forEach((char) => {
    cipherUnit += char;
    if (cipherUnit.length === 10) {
      cipher.push(cipherUnit);
      cipherUnit = '';
    }
  });

  cipher.forEach((block) => {
    if (block === '**********') {
      str += ' ';
    } else {
      const morse = block
        .replace(/00/g, '')
        .replace(/10/g, '.')
        .replace(/11/g, '-');
      str += MORSE_TABLE[morse] || '';
    }
  });
  return str;
}

module.exports = decode;
