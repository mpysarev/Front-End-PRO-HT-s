const figureEl = document.getElementById('figure');
const figureList = document.getElementById('figureList');
const colorInput = document.getElementById('colorInput');


figureList.addEventListener('change', onFigureListChange);
colorInput.addEventListener('change', onColorInputChange);
document.addEventListener('keydown', onDocumentKeyDown);


init();


function init() {
    setPosition({top: 100, left: 20});
    setColor('black');
    setShape('options');
}


function onFigureListChange() {

    setShape(figureList.value);
}


function onColorInputChange() {
    setColor(colorInput.value);
}


function onDocumentKeyDown(e) {

    switch(e.code) {
        case 'ArrowRight': moveTo(5, 0); break;
        case 'ArrowLeft': moveTo(-5, 0); break;
        case 'ArrowUp': moveTo(0, -5); break;
        case 'ArrowDown': moveTo(0, 5); break;
    }
}




function moveTo(x, y) {
    
   setPosition({
       left: figureEl.offsetLeft + x,
       top: figureEl.offsetTop + y,
   });
}



function setPosition(pos) {
    figureEl.style.top = pos.top + 'px';
    figureEl.style.left = pos.left + 'px';
}

function setColor(color) {
    figureEl.style.backgroundColor = color;
}

function setShape(shape) {
    figureEl.className = 'figure ' + shape;
}




