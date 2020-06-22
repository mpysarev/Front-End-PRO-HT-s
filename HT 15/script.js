'use strict';


const albumList = document.getElementById('albumContainer');
const photoList = document.getElementById('photoContainer');

let albumId = 1;

const CLASS_LI = 'li';
const LIST_URL = 'https://jsonplaceholder.typicode.com/albums';
const FIRST_ALBUM_URL = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;

albumList.addEventListener('click', toggleAlbum);


getData();
getFirstAlbum();

  

function getData() {
    fetch(LIST_URL)
    .then(function (res) {
        return res.json();
    })
    .then(function(data) {
        setData(data);
    });
}

function getFirstAlbum() {

    fetch(FIRST_ALBUM_URL)
        .then(function (res) {
            return res.json();
        })
        .then(function(data) {
            setFirstAlbum(data);
    });
}

function changeAlbum(id) {

    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
        .then(function (res) {
            return res.json();
        })
        .then(function(data) {
            setNewAlbum(data);
    });
}



function setData(dataArr) {
    dataArr.forEach(generateDataHtml);
}

function setFirstAlbum(dataArr) {
    dataArr.forEach(generateAlbumHtml);
}

function setNewAlbum(dataArr) {
    dataArr.forEach(generateAlbumHtml);
}



function generateDataHtml(dataObj) {

    const albumTitle = document.createElement('li');

    albumTitle.textContent = dataObj.title;

    albumList.append(albumTitle);
    
    addClass(albumTitle);        
    addAttributes(albumTitle);        
}


function generateAlbumHtml(dataObj) {

    const photo = document.createElement('img');

    photo.classList.add('albumImg');
    photo.setAttribute('src', dataObj.thumbnailUrl);
    
    photoList.append(photo);
}



  
function toggleAlbum (e) {
    const id = e.target.dataset.albumId;

    if (!photoList.hasChildNodes()) {
        changeAlbum(id);
    } else {
      reset(photoList);
      changeAlbum(id);
    }
}
  
function reset(list)  {
    list.innerHTML = "";
};

function addClass(title) {
    title.classList.add(CLASS_LI);
}

function addAttributes(title) {
    title.setAttribute('data-album-id', albumId++);
}

