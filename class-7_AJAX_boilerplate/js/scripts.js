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


let button = document.getElementById('GetUsers');
// let par = document.getElementById('Output');
button.addEventListener("click",getUserData);

function getUserData(){
    // let url = "https://ucdpapi.pcr.uu.se/api/"+"gedevents"+"/21.1?pagesize=1";
    let url = "https://ucdpapi.pcr.uu.se/api/gedevents/21.1?pagesize=1";
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status === 200){
            document.getElementById("Output").innerHTML = xhr.responseText;
            console.log(xhr.responseText);
        }else{
            document.getElementById("Output").innerHTML = "load error";
            // console.log("error");
        }
    }
    xhr.open("GET",url,true);
    xhr.send();
    console.log("end ajax.......");

}