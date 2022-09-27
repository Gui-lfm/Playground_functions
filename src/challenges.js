// Desafio 1
function compareTrue(a, b) {
  if (a == true && b == true) {
    return true
  }
  return false
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2
  return area
}

// Desafio 3
function splitSentence(string) {
  let fraseSeparada = string.split(' ')

  return fraseSeparada
}

// Desafio 4
function concatName(array) {
  let lastName = array[array.length - 1];
  let firstName = array[0];

  return `${lastName}, ${firstName}`
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
    if (array[i] > maior || i == 0) {
      maior = array[i]
    }
  }

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] == maior) {
      maiorRepetido += 1
    }
  }

  return maiorRepetido;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) { //usei math.abs para retornar o valor absoluto da distancia entre rato e gato, evitando valores negativos
    return 'cat1'
  } else if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return 'cat2'
  }
  return 'os gatos trombam e o rato foge'
}

// Desafio 8
function fizzBuzz(array) {
  let arrayString = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 == 0 && array[i] % 5 == 0) {
      arrayString.push('fizzBuzz');
    } else if (array[i] % 3 == 0) {
      arrayString.push('fizz')
    } else if (array[i] % 5 == 0) {
      arrayString.push('buzz')
    } else {
      arrayString.push('bug!')
    }
  }

  return arrayString;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
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
