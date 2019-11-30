// JS arrays does not have upper bound & no out of bound error
const arr = [];
console.log(arr[100]);// undefined, It does not throw an out of bound error

// The length property is supposed to tell you the length of the array or the number of items
// But instead it may feel like it is just equal to the (largest_index + 1)
arr[10] = 5
console.log(arr.length);// 11 not 1
// Internally the array only has one item i.e. the object has only one property with key 10 but still length is 11
console.log(arr);// [ <10 empty items>, 5]
// length property can be modified manually
// increasing length does not allocate more space just changes the length property
// But reducing length might delete some items if some elements index was >= length
arr[15] = 6;
console.log(arr.length);// 16
arr.length = 12
console.log(arr);// [ <10 empty items>, 5, <1 empty item> ] all items with index >= 12 was deleted