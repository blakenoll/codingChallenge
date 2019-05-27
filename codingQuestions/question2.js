class Sample {
  constructor(obj) {
    Object.keys(obj).forEach(k => {
      this[k] = obj[k];
    });
  }
}

const object = {
  this: [1, 2, 3, 4, 5, 6],
  that: ["here", "there", "everywhere"],
  other: 100
};

const test = new Sample(object);

console.log(test.this);
console.log(test.that);
console.log(test.other);
