'use strict';


const albumList = document.getElementById('albumContainer');
const photoList = document.getElementById('photoContainer');

let albumId = 1;

const CLASS_LI = 'li';
const LIST_URL = 'https://jsonplaceholder.typicode.com/albums';
const ALBUM_URL = `https://jsonplaceholder.typicode.com/photos?albumId=`;

albumList.addEventListener('click', toggleAlbum);


getAlbumsList();
displayAlbum(1);

  

function getAlbumsList() {
    fetch(LIST_URL)
    .then(function (res) {
        return res.json();
    })
    .then(function(data) {
        setData(data);
    });
}


function displayAlbum(id) {

    fetch(ALBUM_URL + id)
        .then(function (res) {
            return res.json();
        })
        .then(function(data) {
            setAlbum(data);
    });
}



function setData(dataArr) {
    dataArr.forEach(generateDataHtml);
}

function setAlbum(dataArr) {
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
    
    displayAlbum(id);

    if (photoList.hasChildNodes()) {
        reset(photoList);
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

