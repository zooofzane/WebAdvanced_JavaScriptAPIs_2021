function sleep(delaytime){
    setTimeout(function(){
        console.log('ii')
    },delaytime)
}

console.log('start async');
sleep(5000);
console.log('stop async');

// let xhr;
// // xhr.onprogress = function;
// xhr.onload = processXresponse;

// function processXresponse(){
//     if(xhr.status===200){
//         // completed - do sth with the response
//     }else{
//         // error - respond accordingly
//     }
// }


// let button = document.getElementById('GetUsers');
// // let par = document.getElementById('Output');
// button.addEventListener("click",getUserData);

// function getUserData(){
//     // let url = "https://ucdpapi.pcr.uu.se/api/"+"gedevents"+"/21.1?pagesize=1";
//     let url = "https://ucdpapi.pcr.uu.se/api/"+"gedevents/21.1?pagesize=1";
//     let xhr = new XMLHttpRequest();
//     xhr.onload = function(){
//         if(xhr.status === 200){
//             document.getElementById("Output").innerHTML = xhr.responseText;
//             console.log(xhr.responseText);
//         }else{
//             document.getElementById("Output").innerHTML = "load error";
//             // console.log("error");
//         }
//     }
//     xhr.open("GET",url,true);
//     xhr.send();
//     console.log("end ajax.......");

// }



/* -------------------------------------------------------------------------- */
/*                                  call back                                 */
/* -------------------------------------------------------------------------- */

/* -------------------------------- callback -------------------------------- */


function printString(string, callback){
    const delay = Math.floor(Math.random() * 1000) + 1;
    setTimeout( function() {
    console.log(string, delay);
    callback();
    },
    delay
    )
   }
   // in parallel(ish)
//    function printAll(){
//     printString("A");
//     printString("B");
//     printString("C");
//    }
   // in turn
   function printAll(){
        printString("A", function() {
            printString("B", function() {
                printString("C", function(){} )
            })
        })
   }

   printAll();



   /* -------------------------------------------------------------------------- */
   /*                                 promise API                                */
   /* -------------------------------------------------------------------------- */

/*

const p = new Promise(function_name);

function function_name (resolver, rejector){
    // LOGIC OF REQUEST 
    // if complete
    if ( conditions are complete ){
        resolver(something);
    }else {
        rejector(something);
    }
}

p.then( funciton(){
    // resolver function
});

p.catch( function(){
    // rejector function
})

*/


let country;
let cty = "255";

const xrh1 = new Promise( function(resolve,reject){
//    let url = "https://ucdpapi.pcr.uu.se/api/gedevents/21.1?pagesize=100&Country="+365+"&StartDate=2014-01-15&EndDate=2015-12-31&TypeOfViolence=1,3";
//    let url = "https://ucdpapi.pcr.uu.se/api/gedevents/21.1?pagesize=100&Country=365,369&StartDate=2014-01-15&EndDate=2015-12-31&TypeOfViolence=1,3";

let url = "https://ucdpapi.pcr.uu.se/api/battledeaths/21.1?pagesize=1000&Country="+ 700;
// let url = "https://ucdpapi.pcr.uu.se/api/"+"gedevents/21.1?pagesize=1";
    let xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.send();
    xhr.onload = function(){
        if(xhr.status === 200){
            const response = JSON.parse(xhr.responseText);
            resolve(response);
        }else{
            const error = xhr.statusText;
            reject(error);
        }
    }
});

const button = document.getElementById('GetUsers');
button.addEventListener("click",function(){
    xrh1.then(
        function(resp){
            for (i=0; i < resp.Result.length; i++) {
            document.getElementById('Output').innerHTML = resp.Result[i];
            }
        }
    );

    xrh1.catch(
        function(resp){
            console.log('error');
        }
    );
})