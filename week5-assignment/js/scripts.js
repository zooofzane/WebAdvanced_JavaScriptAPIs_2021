
/* This is my first code
 * this is what it does
 */



let spans = document.getElementsByTagName( 'span' );
// // loop through all
// for (let i = 0; i < spans.length; i++) {
//   let item = spans[i];
//   console.log( item.nodeType );
// }


for (let el of spans) {
    console.log( el.nodeType );
  }


  //CSS3 selectors work on IE9+ only so we should be fine since no sane person should be using anything older!
const last_span = document.querySelector( 'span:last-child' ); 
// const last_span = document.querySelector( 'span:last-of-type' ); 

// document.querySelectorAll - similar to how jquery works.
const sp = document.querySelectorAll( 'span' );
sp.forEach( function( e ) {
  e.style.color ='red';
} );


// const an = document.getElementsByTagName('a')[0];
// an.addEventListener("click", function(){
//     alert('xx');
// });


// const ana = document.getElementsByTagName('span');
// // // const an = document.querySelectorAll('span')[0];
// ana.addEventListener("mouseover", highlight);
// ana.addEventListener("mouseout", highlight);

// function highlight(event){
//   event.target.classList.toggle("highlight");
// }


// what is the target and classlist mean? why i cant apply it to span element?


const an = document.getElementsByTagName('a')[0];
const para = an.parentNode;

an.addEventListener("click", function(e){
  console.log('clicked on: a',e);
  e.preventDefault();
  //e.stopPropagation(); - this will stop the propogation to the para listener below
});
para.addEventListener("click", function(e){
  console.log('clicked on: p',e);
  e.preventDefault();
});

const sec1 = document.getElementsByTagName("section")[0];

const ppp = document.querySelectorAll('p')[1];
// firstp.style.color='blue';

const newp = document.createElement("p");
const node = document.createTextNode("ok here is the new one");
newp.appendChild(node);
// const op = document.getElementsByTagName('p')[0];
// document.body.appendChild(newp);
sec1.insertBefore(newp,ppp);

//  can I add a new paragrah intead of append it as a child?

const sec = document.getElementsByTagName("section")[0];
let pic = document.createElement("img");
pic.src = "https://source.unsplash.com/random";
pic.width="100";
pic.clear="both";
sec.appendChild(pic);

const buttonnew = document.createElement("button");
buttonnew.innerHTML = "click here";
document.body.appendChild(buttonnew);

let pic2 = document.createElement("img");
pic2.src = "https://source.unsplash.com/random";
pic2.width = "90";
buttonnew.addEventListener("click", function(){
    pic2.src = "https://source.unsplash.com/random";
sec.appendChild(pic2);
console.log(1,pic2.src);
  });

// how to manipulate the position of the pic inserted
