let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset");
let message= document.querySelector(".message");
let msg= document.querySelector("#msg");
let turnO = true; //playerx, playerO

const winPatterns = [      //2D array
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
[ 2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];

boxes.forEach(box=> {
  box.addEventListener("click", () => {
    console.log("boxes was clicked")
   if(turnO){  //player O
    box.innerText= "O";
    turnO= false;
   } else{    //player X
    box.innerText= "X";
    turnO= true;
   }
   box.disabled= true;

   checkWinner();
  });
});

const disabledBoxes= () =>{
  for(let box of boxes){
    box.disabled= true;
  }
}


const enabledBoxes= () =>{
  for(let box of boxes){
    box.disabled= false;
    box.innerText= "";
  }
}
const showWinner= (winner) => {
    msg.innerText= `Congratulations, Winner is ${winner}`;
    message.classList.remove("message");
   disabledBoxes();
   }

const checkWinner= () => {
  for( pattern of winPatterns){
    let pos1Val= boxes[pattern[0]].innerText;
    let pos2Val= boxes[pattern[1]].innerText;
    let pos3Val= boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
      if(pos1Val === pos2Val && pos2Val === pos3Val){
       showWinner(pos1Val);
      }
    }
  }
};

const resetGame = () => {
turnO = true;
enabledBoxes();
message.classList.add("message");
}


resetBtn.addEventListener("click", resetGame );
