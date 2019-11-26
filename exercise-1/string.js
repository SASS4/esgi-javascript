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
    const array = capitalize(str).split(" ");
    return array.join("");
}

console.log(camelCase("hello world"));

function snake_case(str) {
    
}