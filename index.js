console.log("Hello World");
console.log("Hello World");

// primitive data types are of 7 types
let a = null;
let b = 342;
let c = false; //can be true also
let d = BigInt("200") + BigInt("150");
let e = Symbol("I m an innocent symbol");
let f = "Haris";
let g;

console.log(typeof g);
console.log(a, b, c, d, e, f, g);

// non primitive data type - Object in JS
const item = {
  Haris: true,
  Faiq: false,
  Asif: 49,
  Harry: undefined,
};

console.log(item["Asif"]);
