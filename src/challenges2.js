// Desafio 11
function verificaNumero(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < array.length; i += 1) {
    let count = 0;
    if (array[i] < 0 || array[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let numRepetido = array[i];
    for (let j = 0; j < array.length; j += 1) {
      if (numRepetido === array[j]) {
        count += 1;
      }
      if (count >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return array;
}
function criaNumero(array) {
  let numeroGerado = `${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
  let ddd = `(${array[0]}${array[1]}) `;
  return ddd + numeroGerado;
}

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
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  let regex = /\d+/g; // seguindo a dica do exercicio, encontrei essa regexp que pega todos os numeros de uma string e coloca num array;
  let quantidade = string.match(regex);
  let agua = 0;

  for (let i = 0; i < quantidade.length; i += 1) {
    agua += Number(quantidade[i]); // transforma string em numero se possível
  }

  if (agua === 1) {
    return '1 copo de água';
  }
  return `${agua} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
