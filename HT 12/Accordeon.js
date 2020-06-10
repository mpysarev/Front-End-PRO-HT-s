'use strict';

function Accordeon(listEl) {

    this.listEl = listEl;
    
    listEl.addEventListener('click', this.onTitleClick);    
}


Accordeon.prototype.onTitleClick = function(e) {
    
    this.bodies = document.getElementsByClassName('body');
    this.activeBody = Array.prototype.find.call(this.bodies, (body) => body.classList.contains('active'));

    
    if (e.target.className === 'title') {
        e.target.nextElementSibling.classList.toggle('active');
    }
    
    if(!(this.activeBody == undefined)) {
        this.activeBody.classList.remove('active');
    }    
}
    
    

