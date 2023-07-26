window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
const promises = [p1,p2,p3,p4,p5];
const p1 = new Promise((resolve) => setTimeout(() => {  
console.log('frst Promise is fulfilled');   
}, 1000));
const p2 = new Promise((resolve) => setTimeout(() => {  
console.log('second Promise is fulfilled');   
}, 2000));
const p3 = new Promise((resolve) => setTimeout(() => {  
console.log('third Promise is fulfilled'); 
}, 3000))
console.log('fourth Promise is fulfilled');   
}, 4000));
const p3 = new Promise((resolve) => setTimeout(() => {  
console.log('fifth Promise is fulfilled'); 
}, 5000))
Promise.any(promises).then((value) => console.log(value));
