'use strict';

const stickersContainer = document.getElementById('stickers-container');
const addBtn = document.getElementById('addBtn');


const STICKERS_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers';

const CLASS_STICKER = 'sticker';
const CLASS_STICKER_HEAD = 'head';
const CLASS_STICKER_BODY = 'body';



addBtn.addEventListener('click', onAddBtnClick);
stickersContainer.addEventListener('click', onStickerDeleteClick);
stickersContainer.addEventListener('focusout', onStickerTextChange);


getData();



function getData() {
    fetch(STICKERS_URL)
    .then(function (res) {
        return res.json();
    })
    .then(function(data) {
        setData(data);
    });
}

function setData(dataArr) {
    dataArr.forEach((obj) => generateHtml(obj));
}

function generateHtml(dataObj) {

    const sticker = document.createElement('div');
    const stickerHead = document.createElement('div');
    const stickerBody = document.createElement('textarea');


    if(dataObj.id) {
        stickerHead.textContent = ('#' + dataObj.id + ' Delete');
    } else {stickerHead.textContent = 'Delete'}
    
    stickerBody.textContent = dataObj.description;

    appendElement(sticker, stickerHead, stickerBody);
    addClass(sticker, stickerHead, stickerBody, dataObj);    
}


function appendElement(sticker, stickerHead, stickerBody) {
    stickersContainer.append(sticker);
    sticker.append(stickerHead);
    sticker.append(stickerBody);
}

function addClass(sticker, stickerHead, stickerBody, dataObj) {
    
    sticker.classList.add(CLASS_STICKER);
    stickerHead.classList.add(CLASS_STICKER_HEAD);
    stickerBody.classList.add(CLASS_STICKER_BODY);

    stickerHead.setAttribute('data-sticker-id', dataObj.id);
    stickerBody.setAttribute('data-sticker-id', dataObj.id);
}


function onStickerDeleteClick(e) {
    removeElement(e);
}

function onAddBtnClick() {

    const newSticker = {description: ''};

    postSticker(newSticker);    
}

function removeElement(e) {
    if(e.target.classList.contains(CLASS_STICKER_HEAD)) {
        e.target.parentNode.remove();
        
        deleteSticker(e.target.dataset.stickerId);
    }
}


function postSticker(newSticker) {
    fetch(STICKERS_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSticker),
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .then(generateHtml(newSticker));    
}

function deleteSticker(stickerId) {
    fetch(STICKERS_URL + '/' + stickerId, {
        method: 'DELETE',
    });
}

function onStickerTextChange(e) {
    let newText;

    if(e.target.value) {
        newText = e.target.value;
    }

    fetch(STICKERS_URL + '/' + e.target.dataset.stickerId)
        .then((res) => res.json())
        .then((data) => modifySticker(data, newText))
}


function modifySticker(sticker, newText) {

    sticker.description = newText;

    fetch(STICKERS_URL + '/' + sticker.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(sticker),
    })
        .then((res) => res.json())
        .then((data) => console.log(data)) 
}










