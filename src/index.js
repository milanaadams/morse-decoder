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
    let result = '';
    let wordCodedCharacters = '';
    for (let i = 0; i < expr.length; i++){
        switch(expr[i]){
            case '0':
                continue;
            case '1':
                expr[i + 1] === '0' ? wordCodedCharacters += '.' : wordCodedCharacters += '-';
                i++;
                if ((i + 1) % 10 === 0) wordCodedCharacters += '*';
                continue;
            case '*':
                wordCodedCharacters += '* *';
                i += 9;
                continue;
        }
    }
    let codedLetters = wordCodedCharacters.split('*');

    const keys = Object.keys(MORSE_TABLE);
    const values = Object.values(MORSE_TABLE);
    
    for (const el of codedLetters){
        if (el === ' '){
            result += ' ';
        } else if (el === ''){
            continue;
        } else {
            result += values[keys.indexOf(el)];
        }   
    }
    
    
    return result;


}

module.exports = {
    decode
}