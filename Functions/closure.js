// When we define or return a function or a object containing functions from a function,
// then that function we are returning will have access to the local variables of the outer function.
// Now those functions will be bound to the local variables of the outer function
// And if we change the local variables then that will be reflected when we call returned the functions next time
// This is called a closure

const vehicle = function ({ pos = { x: 0, y: 0 }, wheels = 2, color = 'white', name = 'Bike' }) {
  let { x, y } = pos;
  const velocity = {
    x: 0,
    y: 0,
  };
  const props = {
    wheels,
    color,
    name,
  };

  return {
    getPos: () => ({ x, y }),
    getColor: () => props.color,
    getWheels: () => props.wheels,
    getName: () => props.name,
    setColor: (color) => props.color = color,
    setName: (name) => props.name = name,
    setVelocity: ({ x = 0, y = 0 }) => (velocity.x = x) && (velocity.y = y),
    getVelMag: () => Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y).toFixed(2),
    getVelAngle: () => Math.floor(Math.atan2(velocity.y, velocity.x) * 180 / Math.PI),
    setPos: (pos) => (x = pos.x) & (y = pos.y),
    move: function () {
      x += velocity.x;
      y += velocity.y;
    },
    logStatus: function () {
      console.log(`${getTimeStamp()}>> \nThe ${this.getName()} is now at ${JSON.stringify(this.getPos())} location.\nAnd it is running at a velocity of ${this.getVelMag()} at ${this.getVelAngle()}˚ angle.\n`);
    },
    describe: function () {
      console.log(`${getTimeStamp()}>> \nThe ${this.getName()} is ${this.getColor()} coloured & has ${this.getWheels()} wheels.\n`);
    },
  };
}

// Creating a new car object by returning a object from the vehicle higher order function
// This object will not have access to the local variables of the vehicle function execution instance
// But it can access them if there are getter functions returned from the vehicle function
// This is kind of a object oriented pattern with closures with private properties
// Because by default JS objects does not support private properties
const car = vehicle({
  pos: { x: 0, y: 0 },
  wheels: 4,
  color: 'red',
  name: 'Ford GT 2019',
});
car.logStatus();// prints position & velocity using getter methods
car.describe();// Describes car from local variables name, color, wheels

(async function () {
  car.setVelocity({ x: 10, y: 10 });// sets the velocity value of the function instance to {x:10, y:10}

  await delay(500);

  car.move();// modifies the local variables x & y
  car.logStatus();// prints position & velocity using getter methods

  await delay(500);

  car.setVelocity({ x: 20, y: -25 });// sets the velocity value of the function instance to {x:20, y:-25}
  car.move();// modifies the local variables x & y
  car.logStatus();// prints position & velocity using getter methods

  await delay(500);

  car.setColor('orange-' + car.getColor());// Modifies color variable
  car.setName('Nasty ' + car.getName());// Modifies Name variable
  car.describe();// Describes car from local variables name, color, wheels
})();

// Helper function that returns a promise using setTimeout, enables use of setTimeout in async await fashion
function delay(delay) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

// Helper function that returns current time
function getTimeStamp() {
  const date = new Date();
  const miliSecs = date.getMilliseconds();
  const secs = appendZero(date.getSeconds());
  const mins = appendZero(date.getMinutes());
  const hours = appendZero(date.getHours());

  return hours + ':' + mins + ':' + secs + ':' + miliSecs;
}

// Helper function that appends zero if time param is single digit
function appendZero(digit) {
  const str = digit.toString();
  return str.length === 1 ? '0' + str : str;
}