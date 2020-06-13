'use strict';

function Accordeon(container, config) {
    this.container = container;
    this.config = config;

    this.init();
}

Accordeon.ACCORDEON_ELEMENT_CLASS = 'accordeon-element';
Accordeon.ACCORDEON_HEADING_CLASS = 'accordeon-heading';
Accordeon.ACCORDEON_BODY_CLASS = 'accordeon-body';
Accordeon.OPEN_CLASS = 'open';

Accordeon.prototype.init = function() {
    this.initClasses();
    this.bindEventListener();
}

Accordeon.prototype.initClasses = function() {
    Array.prototype.forEach.call(this.container.children, (elem) => 
        elem.classList.add(Accordeon.ACCORDEON_ELEMENT_CLASS)
    );
    
    Array.prototype.forEach.call(this.container.querySelectorAll('.title'),
        (elem) => elem.classList.add(Accordeon.ACCORDEON_HEADING_CLASS)
    );

    Array.prototype.forEach.call(this.container.querySelectorAll('.body'),
        (elem) => elem.classList.add(Accordeon.ACCORDEON_BODY_CLASS)
    );
}
    
Accordeon.prototype.bindEventListener = function() {
    this.container.addEventListener('click', (e) => this.onContainerClick(e));
}

Accordeon.prototype.onContainerClick = function(e) {
    if (e.target.classList.contains(Accordeon.ACCORDEON_HEADING_CLASS)) {
        this.toggleElement(e.target.parentNode);
    }
}

Accordeon.prototype.toggleElement = function(elem) {
    if (elem.classList.contains(Accordeon.OPEN_CLASS)) {
        this.closeElement(elem);
    } else {
        this.openElement(elem);
    }
}

Accordeon.prototype.closeElement = function(elem) {
    elem.classList.remove(Accordeon.OPEN_CLASS);
}

Accordeon.prototype.closeAllElements = function () {
    Array.prototype.forEach.call(this.container.children, this.closeElement);
}

Accordeon.prototype.openElement = function(elem) {
    if (this.config.collapseOther) {
        this.closeAllElements();
    }

    elem.classList.add(Accordeon.OPEN_CLASS);
}




Accordeon.prototype.open = function() {
    this.openElement(this.container.children[index]);
}

Accordeon.prototype.close = function() {
    this.closeElement(this.container.children[index]);
}

Accordeon.prototype.open = function() {
    this.toggleElement(this.container.children[index]);
}
