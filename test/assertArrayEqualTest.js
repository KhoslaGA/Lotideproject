const assertArrayEqual = require("../assertArrayEqual");

assertArrayEqual(["1", "2", "3"], ["1", "2", 3]);
assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArrayEqual(["a", "b", "c"], ["a", "b", "c"]);
assertArrayEqual([], []);