// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let fraseSeparada = string.split(' ');

  return fraseSeparada;
}

// Desafio 4
function concatName(array) {
  let lastName = array[array.length - 1];
  let firstName = array[0];

  return `${lastName}, ${firstName}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosVitoria = wins * 3;
  let pontosEmpate = ties;
  let pTotal = pontosVitoria + pontosEmpate;

  return pTotal;
}

// Desafio 6
function highestCount(array) {
  let maior;
  let maiorRepetido = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > maior || i === 0) {
      maior = array[i];
    }
  }

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === maior) {
      maiorRepetido += 1;
    }
  }

  return maiorRepetido;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) { // usei math.abs para retornar o valor absoluto da distancia entre rato e gato, evitando valores negativos
    return 'cat1';
  } else if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let arrayString = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      arrayString.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      arrayString.push('fizz');
    } else if (array[i] % 5 === 0) {
      arrayString.push('buzz');
    } else {
      arrayString.push('bug!');
    }
  }

  return arrayString;
}

// Desafio 9
function encode(string) {
  let splitString = string.split('');
  let encodedArray = [];

  for (let i = 0; i < splitString.length; i += 1) {
    switch (splitString[i]) {
    case 'a':
      encodedArray.push('1');
      break;
    case 'e':
      encodedArray.push('2');
      break;
    case 'i':
      encodedArray.push('3');
      break;
    case 'o':
      encodedArray.push('4');
      break;
    case 'u':
      encodedArray.push('5');
      break;
    default:
      encodedArray.push(splitString[i]);
      break;
    }
  }
  let encodedString = encodedArray.join('');
  return encodedString;
}

function decode(string) {
  let splitString = string.split('');
  let decodedArray = [];

  for (let i = 0; i < splitString.length; i += 1) {
    switch (splitString[i]) {
    case '1':
      decodedArray.push('a');
      break;
    case '2':
      decodedArray.push('e');
      break;
    case '3':
      decodedArray.push('i');
      break;
    case '4':
      decodedArray.push('o');
      break;
    case '5':
      decodedArray.push('u');
      break;
    default:
      decodedArray.push(splitString[i]);
      break;
    }
  }
  let decodedString = decodedArray.join('');
  return decodedString;
}

// Desafio 10
function techList(array, string) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  let arrayOrdenado = array.sort(); // método retorna os elementos do array de maneira ordenada
  let lista = [];

  for (let i = 0; i < arrayOrdenado.length; i += 1) {
    lista.push({ tech: array[i], name: string });
  }
  return lista;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
