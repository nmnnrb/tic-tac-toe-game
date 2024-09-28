let boxes =  document.querySelectorAll(".container");

let resetbtn = document.querySelector("#rst-btn");

let turno = true; //  playerX, player0
const winPattern = [
    [0,1,2] ,[0,4,8], [0,3,6] , [1,4,7] , [3,4,5] , [6,7,8] , [2,5,8] , [2,4,6]
] 
const resetgaem =() =>{
    turno = true;
    enablebox();

}
const enablebox =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
        let a = document.querySelector(".winner p");
        a.innerText = "Winner is : ";
        document.querySelector(".winner").style.backgroundColor = "transparent";
    }
}
let O = prompt("Enter First player")
let X = prompt("Enter Second player")
resetbtn.addEventListener("click" , enablebox);

boxes.forEach( (box) => {
    box.addEventListener("click",() =>{
        console.log(`box  is click`);
        if (turno) {
            console.log("Box clicked");
            box.innerText = O;
            turno = false;
        }else{
            box.innerText = X;
            turno = true;

        }
        box.disabled = true;

        checkwinner();
    })
});

const checkwinner =() =>{
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val !="" && pos3val !=""){
            if(pos1val ===  pos2val && pos2val ===  pos3val){
                console.log("winner -" , pos1val);
                
                let a = document.querySelector(".winner p");
                a.innerText += " " + pos1val;
                document.querySelector(".winner").style.backgroundColor = "#6DA34D";
                boxes.forEach((box) => {
                box.disabled = true;

                });
            }
          }
    }


    if(allfill()){
        let a = document.querySelector(".winner p");
        a.innerText = "Match Draw";
        document.querySelector(".winner").style.backgroundColor = "red";
    }
};


const allfill = () =>{
    for(let box of boxes){
        if(box.innerText === ""){
            return false;
        }
    }
    return true;
};
