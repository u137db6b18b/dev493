// scratch

const uniq = (xs) => [...new Set(xs)];

const sum = (xs) => xs.reduce((a, b) => a + b, 0);

console.log(uniq(["a", "a", "b"]));
