function ucfirst(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str[0].toUpperCase() + str.substring(1);
}

console.log(ucfirst('test'));
console.log(ucfirst('Test'));
console.log(ucfirst('3est'));
console.log(ucfirst('rest  rezf'));
console.log(ucfirst(''));
console.log(ucfirst(null));
console.log(ucfirst({}));

function capitalize(str) {
  if (typeof str !== "string" || str.length === 0) return "";
  
  const array = str.toLowerCase().split(" ");
  for(let i=0; i< array.length;) {
    array[i] = ucfirst(array[i++]);
  }

  return array.join(" ");

  return str
  .toLowerCase()
  .split(' ')
  .map(function(item) {
    return ucfirst(item);
  })
  .join(" ");
}

function camelCase(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    str = str.replace(/_/gi,' ');
    const array = str.toLowerCase().split(' ');
    for(let i=0;i < array.length; i++) {
      array[i] = ucfirst(array[i]);
    }
    return array.join('');
}

function snake_case(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    const array = str.toLowerCase().split(" ");
    return array.join("_");
}

function leet(str) {
  if (typeof str !== "string" || str.length === 0) return "";
  str = str.replace(/a/gi,'4');
  str = str.replace(/e/gi,'3');
  str = str.replace(/i/gi,'1');
  str = str.replace(/o/gi,'0');
  str = str.replace(/u/gi,'(_)');
  str = str.replace(/y/gi,'7');
  return str;
}

function verlan(str) {
  if(typeof str !== "string" || str.length === 0) return "";
  return str.split(" ").map(function(word) {
    return word.split("").reverse().join('');
  }).join(" ");
}

function yoda(str) {
  if(typeof str !== "string" || str.length === 0) return "";
  return str.split(' ').reverse().join(' ');
}

function vig(str, code) {
  if(typeof str !== "string" || !str) return "";
  while(code.lenght < str.length) {
    code += code;
  }
  return str.split("").map(function(car,index) {
    car = car.toLowerCase();
    const carCode = car.charCodeAt(0) - "a".charCodeAt(0);

    if(carCode < 0 || carCode > 25) return car;
    const codeCode = code.charCodeAt(0) - "a".charCodeAt(0);
    
    const encodedCode = (carCode + codeCode)%26;
    return String.fromCharCode(encodedCode + 'a'.charCodeAt(0));
  }).join('');
}

console.log(vig("anticonstitutionnellement","foo"));