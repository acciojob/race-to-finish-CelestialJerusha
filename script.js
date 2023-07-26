window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
let promises = ["a","b","c","d","e"];
Promise.any(promises).then((value) => console.log(value));
