let ai ={
    qs:[ 
    ["how are you", "getting better"],
    ["what is your name", "HAL"],
    ["why are you here", "sorry...that question needs pondering"]
  ],
    checkAnswer: function(q){
        if ( q.match(/name/gi) ) { 
            return this.qs[1][1];
        }
    }
}

let ans = prompt('Ask away'); 
let q='what is your name';
  let result = ai.checkAnswer(ans);
  console.log(result);
  document.getElementById("answer").innerHTML = result;




//   String.match(), String.indexOf() 