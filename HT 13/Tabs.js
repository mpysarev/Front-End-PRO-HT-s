'use strict';


class Tabs {

    TABS_ELEMENT_CLASS = 'tabs-element';
    TABS_HEADING_CLASS = 'tabs-heading';
    TABS_BODY_CLASS = 'tabs-body';

    constructor(container) {
        this.container = container;

        this.init();
    }
    
    init () {
        this.addClasses();
        this.bindEventListener();
    }

    addClasses() {

        Array.prototype.forEach.call(this.container.children, (elem) => 
            elem.classList.add(this.TABS_ELEMENT_CLASS)
        );
        
        Array.prototype.forEach.call(this.container.querySelectorAll('.title'),
            (elem) => elem.classList.add(this.TABS_HEADING_CLASS)
        );

        Array.prototype.forEach.call(this.container.querySelectorAll('.body'),
            (elem) => elem.classList.add(this.TABS_BODY_CLASS)
        );
        
        Array.prototype.forEach.call(this.container.children, function(elem, index) {
            if (index === 0) {
                elem.classList.add('open')
            }
        });
    }

    bindEventListener() {
        this.container.addEventListener('click', (e) => this.onContainerClick(e));
    }

    onContainerClick(e) {
        if (e.target.classList.contains(this.TABS_HEADING_CLASS)) {
            this.openElement(e.target.parentNode);
        }
    }

    closeElement(elem) {
        elem.classList.remove('open');
    }

    closeAllElements() {
        Array.prototype.forEach.call(this.container.children, this.closeElement);
    }

    openElement(elem) {
        this.closeAllElements();

        elem.classList.add('open');
    }
}





















// function Tabs(container) {
//     this.container = container;

//     this.init();    
// }

// Tabs.TABS_ELEMENT_CLASS = 'tabs-element';
// Tabs.TABS_HEADING_CLASS = 'tabs-heading';
// Tabs.TABS_BODY_CLASS = 'tabs-body';
// Tabs.OPEN_CLASS = 'open';

// Tabs.prototype.init = function() {
//     this.initClasses();
//     this.bindEventListener();
// }

// Tabs.prototype.initClasses = function() {

//     Array.prototype.forEach.call(this.container.children, (elem) => 
//         elem.classList.add(Tabs.TABS_ELEMENT_CLASS)
//     );
    
//     Array.prototype.forEach.call(this.container.querySelectorAll('.title'),
//         (elem) => elem.classList.add(Tabs.TABS_HEADING_CLASS)
//     );

//     Array.prototype.forEach.call(this.container.querySelectorAll('.body'),
//         (elem) => elem.classList.add(Tabs.TABS_BODY_CLASS)
//     );
    
//     Array.prototype.forEach.call(this.container.children, function(elem, index) {
//         if (index === 0) {
//             elem.classList.add(Tabs.OPEN_CLASS)
//         }
//     });
// }
    
// Tabs.prototype.bindEventListener = function() {
//     this.container.addEventListener('click', (e) => this.onContainerClick(e));
// }

// Tabs.prototype.onContainerClick = function(e) {
//     if (e.target.classList.contains(Tabs.TABS_HEADING_CLASS)) {
//         this.openElement(e.target.parentNode);
//     }
// }


// Tabs.prototype.closeElement = function(elem) {
//     elem.classList.remove(Tabs.OPEN_CLASS);
// }

// Tabs.prototype.closeAllElements = function () {
//     Array.prototype.forEach.call(this.container.children, this.closeElement);
// }

// Tabs.prototype.openElement = function(elem) {
//     this.closeAllElements();

//     elem.classList.add(Tabs.OPEN_CLASS);
// }




