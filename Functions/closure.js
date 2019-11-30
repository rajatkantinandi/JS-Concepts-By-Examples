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

const car = vehicle({
  pos: { x: 0, y: 0 },
  wheels: 4,
  color: 'red',
  name: 'Ford GT 2019',
});
car.logStatus();
car.describe();

(async function () {
  car.setVelocity({ x: 10, y: 10 });

  await delay(500);

  car.move();
  car.logStatus();

  await delay(500);

  car.setVelocity({ x: 20, y: -25 });
  car.move();
  car.logStatus();

  await delay(500);

  car.setColor('orange-' + car.getColor());
  car.setName('Nasty ' + car.getName());
  car.describe();
})();

function delay(delay) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

function getTimeStamp() {
  const date = new Date();
  const miliSecs = date.getMilliseconds();
  const secs = appendZero(date.getSeconds());
  const mins = appendZero(date.getMinutes());
  const hours = appendZero(date.getHours());

  return hours + ':' + mins + ':' + secs + ':' + miliSecs;
}

function appendZero(digit) {
  const str = digit.toString();
  return str.length === 1 ? '0' + str : str;
}