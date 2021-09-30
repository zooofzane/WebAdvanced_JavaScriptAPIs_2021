// function makeTriangle( sides = 10,pattern = "¥"){
//   let number = 1;
//   while(number<= sides){
//       let offset =(sides-number)/2;
//       if(Number.isInteger(offset)===true){
//           console.log(" ".repeat(offset)+pattern.repeat(number));
//           number++;
//       }else{
//           number++;
//       }
//   }
    
// }


// makeTriangle();
// makeTriangle(30);
// makeTriangle(40,"🥰");



/* ----------------------------------- /// ---------------------------------- */

// // let str = "today is a holiday";

// // console.log(my_string.chartAt(1));
// // get the syllable with given index

// var my_array =  ["blue", "red", "green"];
// const new_array =[];

// for(let i = 0; i < my_array.length; i++){
//     new_array.push( my_array[i].toUpperCase());
// }

// const new_array1 = my_array.map(function(item){
//     return(item).toUpperCase();
// });

// // const new_array = my_array.map( item =>
//     // item.toUpperCase());

// let str = "today is a holiday";

// console.log(str.charAt(0));



/* -------------------------------------------------------------------------- */
/*                                 use objects                                */
/* -------------------------------------------------------------------------- */

// let x = 2.3222;
// x.toFixed(2);
// let y = new String("hi this is a line.");

// console.log(y.toUpperCase());
// // y here is an object, 
// // and toUpperCase is a method, so there would be a () after it
// console.log(y.length);
// // length is a kind of property

// console.log(y.substring(3,7));

// let second_number = 123.5243234;
// console.log(second_number.length);
// console.log(second_number.toFixed(2));


/* -------------------------------------------------------------------------- */
/*                                    array                                   */
/* -------------------------------------------------------------------------- */
let a = [23,4,5,6];
console.log(a.length);
a.sort();

let b = [];
a.forEach(element => element*2);


console.log(a);
//  ?????????????? forEach()

/* -------------------------------------------------------------------------- */
/*                                    data                                    */
/* -------------------------------------------------------------------------- */

// let dd  = new Date();
// console.log(dd.toDateString());
// let days = ["Sun","Mon","Tue"];
// console.log(days[dd.getDay()]);


/* -------------------------------------------------------------------------- */
/*                               custom objects                               */
/* -------------------------------------------------------------------------- */
let person = {
    firstname:"Jake",
    lastname:"messi",
    annoucenamee: function(){
       console.log( "my name is " + person.lastname)
    }
};
// person.lastname;

// person.annousename = function(){
// return "my name is " + person.firstname;
// }

// console.log(person.annousename());
// person.annoucenamee();

for (let key_prop in person){
console.log(key_prop +" " + person[key_prop]);
}

for ( let item of Object.entries(person)){
    console.log(item);
}

for ( let [key,value] of Object.entries(person)){
    console.log(key);
    console.log(value);
}




const old_array2 = [1,0,4];
let new_array2 = [0,0];
Object.assign(new_array2,old_array2);

new_array2 = old_array2;
old_array2.push(4);
console.log(new_array2);



function convert({ddd,bbb =  4}){
    let qwe = (ddd-32)*5/9;
    qwe = qwe.toFixed(bbb);
    return(qwe);
}

console.log(convert({ddd:0,bbb:100}));


function car(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.greet =function(){
        console.log("dddd"+this.make);
    }
}

const car1=new car('nn','83883');
const car2=new car('sss','13');

console.log(car1.greet());
console.log(car2.greet());





// map
// object used in function default value
// parsed to json
// assign
