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

//console.log(capitalize('rest  rezf'));

function camelCase(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    str = str.replace(/_/gi,'');
    const array = str.toLowerCase().split(' ');
    for(let i=0;i < array.length; i++) {
      array[i] = ucfirst(array[i]);
    }
    return array.join('');
}

//console.log(camelCase("ToggleCase Is_the coolest hello world"));

function snake_case(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    const array = str.toLowerCase().split(" ");
    return array.join("_");
}

console.log(snake_case("ToggleCase is_the coolest Hello World"));

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

//console.log(leet("TogglECase isu_theU coolest HelylO WOrYld"));

function verlan(str) {
  if(typeof str !== "string" || str.length === 0) return "";
  let array_1 = str.split(' ');
  let array_2 = [];
  for(let i=0;i<array_1.length;i++) {
    array_1[i] = array_1[i].split('');
    let new_array = [];
    for(let j=0;j<array_1[i].length;j++) {
        new_array.unshift(array_1[i][j]);
    }
    array_1[i] = new_array.join("");
  }
  return array_1.join(" ");
}

//console.log(verlan("TogglECase isu_theU coolest HelylO WOrYld"));

function yoda(str) {
  if(typeof str !== "string" || str.length === 0) return "";
  let array_1 = str.split(' ');
  let array_2 = [];
  for(let i=0;i<array_1.length;i++) {
      array_2.unshift(array_1[i]);
  }
  return array_2.join(" ");
}

//console.log(yoda("TogglECase isu_theU coolest HelylO WOrYld"));