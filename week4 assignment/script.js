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

// let str = "today is a holiday";

// a
// // console.log(my_string.chartAt(1));
// // get the syllable with given index
// a

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
    annoucename1:function(){
        "my name is " + person.lastname
    }
};
person.lastname;

person.annousename = function(){
return "my name is " + person.firstname;
}

person.annousename();
person.annoucename1();






