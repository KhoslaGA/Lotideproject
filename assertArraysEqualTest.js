<<<<<<< HEAD
const assertArraysEqual = require("../assertArrayEqual");
=======
const assertArraysEqual = require("../assertArraysEqual");
>>>>>>> updates

assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["a", "b", "c"], ["a", "b", "c"]);
assertArraysEqual([], []);