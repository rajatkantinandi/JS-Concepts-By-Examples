const arr = [1];

// push adds to end of array
arr.push(2);
console.log(arr);// [1,2]

// unshift adds to the beginning
arr.unshift(0);
console.log(arr);// [0,1,2]

// pop removes element from end & returns it
const last_elem = arr.pop()
console.log({ last_elem, arr });// { last_elem: 2, arr: [ 0, 1 ] }

// shift removes from front & returns it
const first_elem = arr.shift();
console.log({ first_elem, arr });// { first_elem: 0, arr: [ 1 ] }

arr.push(2,3,4);// push can take multiple params
console.log(arr);// [ 1, 2, 3, 4 ]

// Since Arrays are internally objects so they can use delete method to remove a particular index
delete arr[1];
console.log(arr.length);// 4, But it creates a void in that element & length is still same
console.log(arr);// [ 1, <1 empty item>, 3, 4 ], It also does not decrement the subsequent indices which is not desired

// Fortunately there exists method like splice in arrays prototype which can be used to delete element from the middle
// Or insert at a particular index
arr.splice(1,1); // splice(start_index, delete_count, ...items_as_replacement) can delete multiple subsequent elements at a time
console.log(arr);// [ 1, 3, 4 ]

arr.splice(1,0,10);// inserts 2 at index 1, have to use delete_count = 0
console.log(arr);//  [ 1, 10, 3, 4 ]

// splice can also be used to replace one or multiple element
arr.splice(1,3,2,'x');// replaces two element starting at index 1 by 2 & 'x' and deletes one element as delete_count > num of items
console.log(arr);// [ 1, 2, 'x' ]

// More info on prototype method splice on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice