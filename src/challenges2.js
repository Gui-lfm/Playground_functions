// Desafio 11
function generatePhoneNumber(array) {
  let arrayVerificado = verificaNumero(array);
  if (typeof arrayVerificado === 'string') {
    return arrayVerificado;
  }
  let numero = criaNumero(arrayVerificado);
  return numero;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let verificaA = lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
  let verificaB = lineB < lineA + lineC && lineB > Math.abs(lineA - lineC);
  let verificaC = lineC < lineA + lineB && lineC > Math.abs(lineA - lineB);

  if (verificaA && verificaB && verificaC) {
    return true
  }
  return false
}

// Desafio 13
function hydrate() {
  
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

function verificaNumero(array) {
  if (array.length != 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let i = 0; i < array.length; i += 1) {
    let count = 0;
    if (array[i] < 0 || array[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let numRepetido = array[i]

    for (let j = 0; j < array.length; j++) {
      if (numRepetido === array[j]) {
        count += 1
      }
      if (count >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }

  return array;
}

function criaNumero(array) {
  let numeroGerado = `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`

  return numeroGerado;
}
