
/* This is my first code
 * this is what it does
 */

let spans = document.getElementsByTagName('span');

for(let i=0;i<spans.length;i++){
    console.log(spans[i].innerHTML);
}



// const spans2 = document.querySelector('span');
// just select the first one 
const spans2 = document.querySelectorAll('span');
// for(let i=0;i<spans2.length;i++){
    console.log(spans2);
// }

const new_para = document.createElement('div');
new_para.innerHTML = "this is the end.";

const sec = document.getElementsByTagName('section')[0];
new_para.setAttribute("class",'new');
sec.appendChild( new_para );

/* -------------------------------------------------------------------------- */
/*     how to use create a new line instead of add text in the last line? 



*/
/* -------------------------------------------------------------------------- */


/* ---------------------------------- event --------------------------------- */

const an = document.getElementsByTagName('a')[0];

an.addEventListener("mouseover", highlight);

function highlight(event){
    alert( 'this is working');
}


const an1 = document.getElementsByTagName('a')[2];
an1.addEventListener("mouseover", function(){
    alert('thisisworking');
});

const an2 = document.getElementsByTagName('a')[3];
an2.addEventListener("click", function(event){
   console.log("click");
   console.log(event);
   event.preventDefault();
});

/* -------------------------------------------------------------------------- */
 /*preventDefault   
prevent redirection to a link on the clicking an anchor
/ stopPropagation again? 
stop the event goes up the tree                      */
/* -------------------------------------------------------------------------- */


const list = document.getElementById('testList');

list.addEventListener("click",function(e){
    console.log("click",e);
    e.preventDefault();
    e.target.classList.toggle("highlight");
})