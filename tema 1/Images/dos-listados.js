const ulListOrigin = document.getElementById('listOrigin');
const ulListDestiny = document.getElementById('listDestiny');

function changeElement(origin, destiny){
    //Seleccionar los seleccionados
    let selectLis = [...origin.querySelectorAll('li.selected')];
    console.log(selectedLis)
    selectedLis.forEach(li => {
        destiny.appendChild(li);
        li.classList.remove('selected');
    });
}

function changeElementLeft(){
    changeElement(ulListDestiny, ulListOrigin );
}

function changeElementRight(){
    changeElement(ulListOrigin, ulListDestiny);
}

function addSelectableElements(){
    let listLiOrigin = [...ulListOrigin.querySelectorAll('li')];
    listLiOrigin.forEach( li => li.onclick = () => li.classList.toggle('selected'))
    
}

function init(){
    addSelectableElements();
}
init();