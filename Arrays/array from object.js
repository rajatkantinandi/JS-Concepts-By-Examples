// Arrays in JS are not like arrays in other languages where same type of values are stored in a contiguous memory
// That makes array very efficient data structure in other languages
// But in JS Arrays are internally Objects with some extra prototype method attached to it & has length property
// Indices in Array are keys of that Object starting from 0 & they are numbers & increment by 1
// They are accessed by [] accessor similar to object properties
const arr = [1, 2, 3];
const arr_like = {
  1: 1,
  2: 2,
  3: 3,
};
// Here although arr_like is similar to arr but does not have length & prototype methods such as map, forEach
console.log(arr.length);// 3
console.log(arr_like.length);// undefined

// As Arrays are Objects so the elements can be of different datatype similar to Object properties
// This is not allowed in other languages as the elements are needed to be stored in contiguous memory location
// and each element of that has to have same size
// Which is not a requirement in JS so it is allowed to have different datatype inside a single array
// Even we can have objects & functions inside an array
const mixed_arr = [1, undefined, 'three', null, arr_like, () => arr[0]];

console.log('\nPrinting elements of mixed array or executing them: ');
mixed_arr.forEach((elem) => {
  if (typeof elem === 'function') {
    console.log(elem());
  }
  else if (typeof elem === 'object') {
    console.log(JSON.stringify(elem));
  }
  else {
    console.log(elem);
  }
});
