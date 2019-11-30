// Method invocation
const obj = {
  prop1: 'The function is invoked by . operator & is a property of the object. this is bound to the object & has access to obj props',
  func1: function () {
    console.log(this.prop1);
  },
  outerFunction: function () {
    // Function invocation pattern
    this.someProp = 1;

    const innerFunction = function () {
      // Here this is bound to the global object instead of the outer function
      console.log(this.someProp);// Undefined
    }

    innerFunction();
  },
  outerFunction2: function () {
    // Function invocation pattern but with arrow function
    this.someProp = 1;

    const innerFunction = () => {
      // Here this is bound to the the outer function instead of global as innerFunc is arrow function
      // So it will be automatically bound to the outer function
      console.log(this.someProp);// 1
    }

    innerFunction();
  },
}

obj.func1();
obj.outerFunction();
obj.outerFunction2();