/* ------------------------------ 1.conditions ------------------------------ */
let i = Math.floor(Math.random()*100);

if (i%2==1){
    console.log("odd")
}else{
    console.log("even")
}



/* ---------------------------- 2. codnitions/random --------------------------- */
let rolled = Math.ceil( Math.random() * 6 );
switch(rolled){
    case(1):
    console.log("you rolled a "+rolled);
    break;
    case(2):
    console.log("you rolled a "+rolled);
    break;
    case(3):
    console.log("you rolled a "+rolled);
    break;
    case(4):
    console.log("you rolled a "+rolled);
    break;
    case(5):
    console.log("you rolled a "+rolled);
    break;
    case(6):
    console.log("you rolled a "+rolled);
    break;
}


/* -------------------------------- 3. Loops -------------------------------- */
let rolled2 = Math.ceil( Math.random() * 6 );
let c = 1;

if (rolled2 <= 3){
    rolled2 = Math.ceil( Math.random() * 6 );
    c++;
}

console.log(rolled,"by "+c+" times");


/* --------------------------------- 4.Factorial Loops -------------------------------- */
let anynum = 5;
let a=1;
for (let i =1;i<=anynum;i++){
 a = a * i;
}
console.log(a);

/* ------------------------------- 5. ## Loops ------------------------------ */
let h = 4;
let text = "#";
for (let i=0;i<h;i++){
    console.log(text);
   text = text + "#";
}


/* ------------------------- 6. Loops and Conditions ------------------------ */
let chessH=8;
let chessW=8;
let black = "#";
let space = " ";
let chess=" ";
console.log("___________");
for(let i =0;i<chessH;i++){
    if (i%2==0){
        chess = "| ";
        for (let j=0;j<chessW;j++){
            if (j%2==0){
                chess= chess+black;
            }else{
                chess= chess + space;
            }
        }
    }else{
        chess="|#";
        for (let j=0;j<chessW;j++){
            if (j%2==1){
                chess= chess+black;
            }else{
                chess= chess + space;
            }
        }
    }
    
    console.log(chess+"|");
}
console.log("___________");