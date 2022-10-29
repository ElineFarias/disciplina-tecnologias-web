//Questão01
var is_array = function (input) {
  if (toString.call(input) === "[object Array]")
    return true;
  else
    return false;
};
console.log(is_array([1, 2, 4, 0]));
console.log(is_array([]));
console.log(is_array([1]));
console.log(is_array('Maria'));
console.log(is_array(undefined));
console.log(is_array(null));
console.log(is_array());


//Questão02
let vetor02 = ['a','b','c','d','e'];
let quest02 = function(vetor) {
  if(vetor == null) {
    return 0;
  } else {
    console.log("cópia do vetor");
    return console.log(vetor02.map((x) =>x));
  }
}
quest02(vetor02);

//Questão03
let n3 = prompt("Digite o valor de n3:");
let quest03 = function(vetor, n3) {
  if(vetor == null || n3 == null) {
    return 0;
  } else if(n3 < 0) {
    return console.log("Digite o valor maior ou igual a 0");
  }
  console.log("N primeiros valores do vetor");
  return console.log(vetor.slice(0,n3));
}
quest03([7, 9, 0, -2],n3);


//Questão04
let n4 = prompt("Digite o valor de n4:");
let quest04 = function(vetor, n4) {
  if(vetor == null || n4 == null ) {
    return 0;
  } else if(n4 < 0) {
      return console.log("Digite o valor maior ou igual a 0");
  }
  console.log("N últimos valores do vetor");
  return console.log(vetor.slice(Math.max(vetor.length -n4)));
};
quest04([7, 9, 0, -2],n4);

//Questão 05
let vetor05 = ['Maria','Eline','Silva ','de','Farias'];
let quest05 = function(vetor05) {
  if(vetor05 == null) {
    return 0;
  } else {
    console.log("Vetor em Formato de String, separdor space");
    return console.log(vetor05.join(" "));
  }
}
quest05(vetor05);

//Questão 06
let n5 = prompt("Digite um número quase aleatório:");
let str = n5.toString();
let resultado = [str.substring(str.length)];
for(let i=0; i<str.length; i++) {
    if((str[i-1]%2 === 0)&&(str[i]%2 === 0)) {
      resultado.push('-', str[i]);
     }
    else {
      resultado.push(str[i]);
    }
}
console.log(resultado.join(" "));

//Questão 07
var vetor07 = ['casa', 'apartamento', 'apartamento', 'apartamento','flet', 'casa', 'apartamento', 3, 'apartamento', 'flet', 'chácara', 'cabana', 'casa'];
var vetor07Novo = vetor07.slice().sort(); 
elementosTemp = [undefined, 0];
counter = 0;
vetor07Novo.reduce(function(elementovetor07, vartemp) {
  elementovetor07 == vartemp ? ++counter > elementosTemp[1] && (elementosTemp = [vartemp, counter]) : (counter = 1)
   return vartemp;
});
console.log(elementosTemp[0] + " ( "+elementosTemp[1]+" intens)");

//Questão 08
function removeDuplicada(vetor008) {   
  let vetor08  = []; 
  for(let i of vetor008) {
      if(vetor08.indexOf(i) === -1) {
        vetor08.push(i);
      }
  }
  console.log(vetor08);
}
let testeVetor08 = ['a', 'b', 'c', 'b', 'd'];
removeDuplicada(testeVetor08);
let teste02Vetor08 = ['a', 'b', 'c', 'b', 'd','b'];
removeDuplicada(teste02Vetor08);

//Questão 09
function quest09(vetor109, vetor209) {
  let resultado = [];
  let temp = 0;
  let i = 0;
  if (vetor109.length === 0 || vetor209.length === 0) {
    return 0;
  }
  while (temp < vetor109.length && temp < vetor209.length) {
    resultado.push(vetor109[temp] + vetor209[temp]);
    temp++;
  }
  if (temp === vetor109.length) {
    for (i = temp; i < vetor209.length; i++) {
      resultado.push(vetor209[i]);
    }
  } else {
    for (i = temp; i < vetor109.length; i++) {
        resultado.push(vetor109[i]);
    }
  }
  return console.log(resultado);
}
quest09([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);

//Questão 10
let vetorPilha = [1,2,3,4,5];
let vetorAdiciona = [6,7,8,9,10];
let vetorauxiliar = [];
function quest10(vetorPilha, vetorAdiciona) {
  if (vetorPilha.length === 0 || vetorAdiciona.length === 0) {
    return 0;
  } else { 
    vetorauxiliar = vetorPilha.concat(vetorAdiciona);
  }
  vetorPilha = vetorauxiliar;
  return console.log("vetorPilha",vetorPilha);
}
quest10(vetorPilha, vetorAdiciona);
