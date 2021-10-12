// EXERCISE 1:
// create a function that reverses the contents of a sentence or a word or a phrase.
// eg. "hello there" becomes "ereht olleh"

 let str1 = "hello there";
 function tenet(str1){
    console.log( str1.split("").reverse().join("") );
 }
tenet(str1);

// EXERCISE 2.
// Write a function that will take a year and let you know if it's a leap year.

function leapcheck(year){
  (year%4 === 0 && year%100 !== 0 || year%400 === 0) ? console.log("yes") :  console.log("no");
}
leapcheck(2000);
leapcheck(2100);

// EXERCISE 3: 
// Create a function that checks if a string or sentence is a palindrome!

function palincheck(str){
    let trs = str.split("").reverse().join("");
    if ( trs === str ) console.log("yes");
    else console.log("no");
}
palincheck("tenet");
palincheck("et");


// EXERCISE 4:
// Create a script that, on a button click, can select and insert an image from a url (eg. https://source.unsplash.com/random) and insert into the html.
let inputform = document.createElement("input");

let bb = document.getElementById("bb");
let btn = document.createElement("button");
btn.innerHTML = "change the random images";
btn.style.width = '200px' ;
btn.style.height = '200px' ;
btn.style.position = 'center' ;
document.body.appendChild(btn);
let img = document.createElement("img");
document.body.insertBefore(inputform, btn);
btn.addEventListener("click",function(){
    img.src = 'https://source.unsplash.com/random/'+Math.random();
    document.body.insertBefore(img,inputform);
});

// EXERCISE 5:
// Use a form and DOM and form event listener to update the AI/chatbot object created in class 4 assignment. Use basic validation to make sure a question is actually asked and then display the answer back in the web page by creating a new DOM element.

let ai ={
    qs:[ 
    ["how are you", "getting better"],
    ["what is your name", "HAL"],
    ["why are you here", "sorry...that question needs pondering"]
  ],
    checkAnswer: function(q){
        if ( q.match(/how/gi) ) { 
            return this.qs[0][1];
        }
        if ( q.match(/name/gi) ) { 
            return this.qs[1][1];
        }
        if ( q.match(/why/gi) ) { 
            return this.qs[2][1];
        }
    }
}

// let ans = prompt('Ask away'); 







let q='what is your name';
//   let result = ai.checkAnswer(ans);
//   console.log(result);
//   document.getElementById("answer").innerHTML = result;
