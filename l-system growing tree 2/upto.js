function upto(dimensions, callback) {
  if (typeof dimensions == "number") {
    dimensions = [dimensions];
  }

  if (dimensions.length === 1) {
    for (let i = 0; i < dimensions[0]; i++) {
      callback(i);
    }
  } else {
    for (let i = 0; i < dimensions[0]; i++) {
      upto(dimensions.slice(1), callback.bind(null, i))
    }
  }
}