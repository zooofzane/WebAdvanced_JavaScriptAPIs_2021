
/* -------------------------------------------------------------------------- */
/*                             HTML5 GEOLOCATIONX                             */
/* -------------------------------------------------------------------------- */

const geo_options = {
    enableHgithAccuracy: true,
    maximumAge:30000,
    timeout:27000
  }

navigator.geolocation.getCurrentPosition(youarehere);
navigator.geolocation.watchPosition(youaremoving,null,geo_options);


function youarehere(){
  console.log("position: ",position);
}
function youaremoving(){
  console.log("changed position: ",position);
}


/* -------------------------------------------------------------------------- */
/*                              HTML5 VIDEO/AUDIO                             */
/* -------------------------------------------------------------------------- */

//! muted + autoplay cause SOME REASONS

/*
<video src="assets/Nearness_on_Vimeo.mp4"
controls autoplay muted>
 Your browser does not support the video
element.
</video>
*/

const video = document.getElementsByTagName("video")[0];

video.addEventListener("timeupdate",function(event){
    console.log("video tiem code has changed");
    const progressBar = document.getElementsById('progress-bar');
    // const percentage = Math.Floor((100/video1. )currentTime)/

    // ! 19:56
})




/* -------------------------------------------------------------------------- */
/*                                HTML5 CANVAS                                */
/* -------------------------------------------------------------------------- */

const canvas = document/getElementsById('canvasDrawing1');

const context = canvas.getContext('2d');

// context.fillStyle = "#0000cc"; // a blue fill color
// context.strokeStyle = "#ccc"; // a gray stroke color
// context.lineWidth = 4;

function draw(){
// clearInterval(timer);
}

function init(){
    let timer = setInterval(draw,10);
    return timer;
}

init();

let data = [
    {name:"name1",count:1045,color:"blue"},
    {name:"name2",count:563,color:"red"},
    {name:"name3",count:231,color:"silver"},
    {name:"name4",count:423,color:"pink"},
];

let y = 0;

for(let item of data){
    console.log(item);
    let x = 20;
    y = y + 50;
    let w = item.count/2;
    let h = 25;
    context.fillStyle = item.color;
    context.fillRect(x, y, w, h);

}