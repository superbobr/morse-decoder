const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let cipher = [];
    let cipherUnit = '';
    let resultDecode = [];
    let result = [];
    let str = '';
    for (let char of expr) {
        cipherUnit += char;
        if (cipherUnit.length === 10) {
            cipher.push(cipherUnit);
            cipherUnit = '';
        }
    }
    
    for (let letter of cipher) {
       resultDecode.push(letter.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-'));
}
    for (let stars of resultDecode) {
       if (stars.startsWith('*')){
         result.push(' ');
       } else {
         result.push(stars);
       }
    }
    
    for (let morse of result) {
      if (morse === ' ') {
        str += ' ';
      } else {
      str += MORSE_TABLE[morse];
    }
    }
    return str;
}

module.exports = {
    decode
}