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
  var count = 10;
  var pattern = RegExp("((.{" + count + "})+?|(.{1," + count + "})$)", "g");
  var splitted = expr.match(pattern);
  const word = [];
  const words = [];

  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i][0] == '*') {
      splitted[i] = ' ';
    }
  }

  for (let p = 0; p < splitted.length; p++) {
    var a = splitted[p].indexOf(1),
      b = splitted[p].length;
    c = '';
    if (b > 1) {
      splitted[p] = splitted[p].slice(a, b);
    }
  }

  var morse = splitted.map(element => {
    let newElement = element.replace(/(10)/gm, '.')
    newElement = newElement.replace(/(11)/gm, '-')
    return newElement;
  })
 
  for (let y = 0; y < morse.length; y++) {
    for (let key in MORSE_TABLE) {
      if (morse[y] == ' '){
        word[y] = ' ';
      } else if (key == morse[y]){
        word[y] = MORSE_TABLE[key];
      }
    }
  }
  
  return word.join('');
}

module.exports = {
  decode
}