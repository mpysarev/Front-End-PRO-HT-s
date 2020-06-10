'use strict';

function Accordeon(listEl) {

    this.listEl = listEl;
    
    listEl.addEventListener('click', this.onTitleClick);    
}


Accordeon.prototype.onTitleClick = function(e) {
    
    let bodies = document.getElementsByClassName('body');
    let activeBody = Array.prototype.find.call(bodies, (body) => body.classList.contains('active'));

    
    if (e.target.className === 'title') {
        e.target.nextElementSibling.classList.toggle('active');
    }
    
    if(!(activeBody == undefined)) {
        activeBody.classList.remove('active');
    }    
}
    
    

