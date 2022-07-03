let num : number = 4
let str :string = 'Anit'
let now : Date = new Date()

// Array
let array :string[] =['apples','Orange'];

// Object
let obj:{x:number,status:boolean} = {
  x:1,
  status:true
}

// Function
const myFun:(i:number)=>void = (i:number) =>{
  console.log(i)
}
myFun(100);


// When to use annotations
//  1) function that return 'any' type
let json = '{"x":1,"y":"Gb"}' ;
let parseJson:{x:number,y:string} = JSON.parse(json);
console.log(parseJson);

// 2) When we declare variable in one line and initial it later
let arr = ['red','green','blue'];
let foundWord : boolean;

for(let i = 0; i< arr.length; i++){
  if(arr[i] === 'green'){
    foundWord = true;
  }
}

// 3) When variable declare and initialize in same line but type cannot be interfered

let number = [-20,-1,12];
let numberAboveZero:boolean | number = false;
for(let i = 0; i<number.length; i++){
  if(number[i] >= 0){
    numberAboveZero = number[i]
  }
}