const divContainer = document.getElementById('container');
const inputBlockNumber = document.getElementById('block-number');
const colors = ['blue', 'red', 'green'];

function createBlocks(){
    let numBlocks = inputBlockNumber.value;
    console.log(numBlocks);
    for (let i=0; i<numBlocks; i++) {
    createRandomBlock();
    }
}
function createRandomBlock() {
let random = Math. floor(Math. random() * colors.length);
createBlock(colors[random]);
}

function createBlock(color){
        const block = document.createElement('div');
        block.classList.add('block', color);
        block.onclick = () => {
          let cellList = [block];
          let next = block;
          let previous = block;
          while ((next = next.nextElementSibling) && next.classList.contains(color)) {
            cellList.push(next);
          }
          while ((previous = previous.nextElementSibling) && previous.classList.contains(color)){
            cellList.push(previous);
        }
        if (cellList.length > 2){
          cellList.forEach(cell => cell.remove());
          if(divContainer.querySelector("block").length == 0){
            alert ("HAS GANADO");
          }
        }
}
        divContainer.appendChild(block);
        if(cellList.length>100){
          alert("HAS PERDIDO");
        }

}
setInterval(createRandomBlock , 50);