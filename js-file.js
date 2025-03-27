function makeGrid(size){
    let container = document.querySelector("#sketch-screen");
    for(let i=0; i<size;i++){
        let column = document.createElement("div");
        column.classList.add("column");
        for(let j=1; j<=size;j++){
            const row= document.createElement("div");
            row.classList.add("row");
            row.addEventListener("mouseover",()=>{
                row.style.backgroundColor="black";
            });
            column.appendChild(row);
        }
        container.appendChild(column);
    }
}
function newGrid(){
    let x=101;
    while(x>100||isNaN(x)){
        x=parseInt(prompt("Enter grid size(between 0 and 100):"));
    }
    let div=document.getElementById("sketch-screen");
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    makeGrid(x);
}

makeGrid(16);
