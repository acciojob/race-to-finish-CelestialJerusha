window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
const result = document.getElementById("output");

const p1 = new Promise((resolve) => setTimeout(() => {  
result.innerHTML+="first promise fulfilled "   
}, 1000));
const p2 = new Promise((resolve) => setTimeout(() => {  
result.innerHTML+="second promise fulfilled "   
}, 2000));
const p3 = new Promise((resolve) => setTimeout(() => {  
result.innerHTML+="third promise fulfilled " 
}, 3000));
const p4 = new Promise((resolve) => setTimeout(() => {  
result.innerHTML+="fourth promise fulfilled "    
}, 4000));
const p5 = new Promise((resolve) => setTimeout(() => {  
result.innerHTML+="fifth promise fulfilled "  
}, 5000));



const promises = [p1,p2,p3,p4,p5];

