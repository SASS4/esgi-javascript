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

console.log(capitalize('rest  rezf'));

function camelCase(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    let re = "/\s*(;|$)\s*\s*_/";
    const array = str.split(re);
    return array;
}

//console.log(camelCase("ToggleCase is_the coolesthello world"));

function snake_case(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    const array = str.toLowerCase().split(" ");
    return array.join("");
}

//console.log(snake_case("ToggleCase is_the coolest Hello World"));

function leet(str) {
  if (typeof str !== "string" || str.length === 0) return "";
  str = str.replace('a','4');
  str = str.replace('A','4');
  str = str.replace('e','3');
  str = str.replace('E','3');
  str = str.replace('i','1');
  str = str.replace('I','1');
  str = str.replace('o','0');
  str = str.replace('O','0');
  str = str.replace('u','_');
  str = str.replace('U','_');
  str = str.replace('y','7');
  str = str.replace('Y','7');
  return str;
}

console.log(leet("TogglECase isu_theU Helylo WorYld"));
