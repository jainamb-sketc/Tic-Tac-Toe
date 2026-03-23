let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset")
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#win-msg")
let turn0 = true;
const winPatterns = [
     [0 , 1 ,2] ,
     [0 , 3 ,6],
     [0 , 4 ,8],
     [1 , 4 ,7],
     [2 , 4 ,6],
     [2 , 5 ,8],
     [3 , 4 ,5],
     [6 , 7 ,8],
]

boxes.forEach((box) =>{
    box.addEventListener("click" , () =>{
        console.log("Box was clicked!");
        if (turn0 === true){
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 =true;
        }
        box.disabled = true;

        checkWinner();
    })
})


const disbaleBoxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
}

const enaleBoxes = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (winner) =>{
msg.innerText = `Congratulations , The Winner is ${winner} `
msgContainer.classList.remove("hide")
disbaleBoxes();
}

const checkWinner = () =>{
    for (let pattern of winPatterns){
let pos1Val = boxes[pattern[0]].innerText;
let pos2Val = boxes[pattern[1]].innerText;
let pos3Val = boxes[pattern[2]].innerText;
if (pos1Val != "" && pos2Val != "" && pos3Val !=""){
if(pos1Val === pos2Val && pos2Val===pos3Val){
    console.log( pos1Val , "Won");
    showWinner(pos1Val)
}
}
}
}


const resetGame = () =>{
turn0 = true;
enaleBoxes();
msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);
