/*
 *Class 6: FORMS
 * this is what it does
 */


// const form = document.getElementById('searchForm');
// same result
//  const form = document.querySelector('form#searchForm');

const form = document.forms.search;

// const inp = form.elements.searchBox;
const inp = document.forms.search.searchBox;

const inp_type = inp.getAttribute('placeholder');

// form.submit();

 /* -------------------------------------------------------------------------- */
 /*       what is elements for? is forms a tag as same as document.body?       */
 /* -------------------------------------------------------------------------- */


// inp.addEventListener('focus',function(){
//     console.log("focused on", inp.name);
//     if(inp.value == 'type what you want to research'){
//         inp.value = '';
//     }
// });

// inp.addEventListener('blur',function(){
//     // console.log("focused on ", inp.name);
//     if(inp.value == ''){
//         inp.value = 'type what you want to research';
//     }
// });


 form.addEventListener('submit',function(ev){
    const inpvalue = form.elements.searchBox.value;
    console.log("submit form", this.name);
    ev.preventDefault();
    console.log(inpvalue);
    if(inpvalue==''){
        alert('your search box needs a value');
    }
 });





let input_area = form.elements.searchArea; 
const form_area_vals = []; 
for (i=0; i < input_area.length; i++) {
    if (input_area[i].checked) {
    form_area_vals.push(input_area[i].value); 
    }
};

//alternative const form_area_vals = Array.from(input_area) .filter(function(input_area) {
// return input_area.checked }) .map( function(item) {
// return item.value })





/* -------------------------------------------------------------------------- */
/*                                  exercise                                  */
/* -------------------------------------------------------------------------- */
// 1
let line = "hello there";

function recerse_string(str){
    let vvs= str.split("").reverse().join("");
    return vvs;
}
let iss = recerse_string(line);
console.log(iss);


// 2
function leapyearcheck(y){
    // if (y%4==0){
    //     if(y%100!==0||y%400==0){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }else{
    //     return false;
    // };
if( ( y%4==0 && y%100 !== 0) || y%400 ){
return false;
}else{
    return true;
}
};
let isss = leapyearcheck(1800);
console.log(isss);

// 3
let string = "Tenet";
function c(s){
    let vvss= s.toLowerCase().split("").reverse().join("");
    if (vvss == s.toLowerCase()){
        return true;
    }else{
        return false;
    }
}
let cc= c(string);
console.log(cc);
 
function checkPalin(str){  
    let rev_str=str.split("").reverse().join("");
    // (rev_str == str) ? return true : return false;

    // or

    // str == str.split('').reverse().join('');
}

// 4

let btn = document.createElement('button');
// btn.name='new_img';
document.body.appendChild(btn);
btn.innerHTML = "click here";
// img.src='http://source.unsplash.com/random';
btn.addEventListener('click',function(){
    let img = document.createElement('img');
    // img.remove();
    img.width='150';
    img.src='http://source.unsplash.com/random/'+Math.random();
    // img.display();
    document.body.appendChild(img);
});

