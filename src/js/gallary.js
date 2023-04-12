// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";
// const lightbox = new SimpleLightbox('gallary-img',{
//     captionDelay: 250,
// })

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import '../../src/style.css';
import { UnsplashApi } from './unsplash-api'; 

import { renderCards } from './gellary-card';


const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallary');
const loadMoreBtnEl = document.querySelector('.js-load-more')

// console.log(galleryEl);

const unsplashApi = new UnsplashApi();

const onSearchFormSubmit =  event => {
    event.preventDefault();

    const { target: formEl } = event;

    unsplashApi.query = formEl.elements.searchQuery.value.trim();
    unsplashApi.page = 1; 

    unsplashApi
    .fetchPhotosByQuery()
    .then(data => {
        if (data.total === 0){
            galleryEl.innerHTML = '';
            loadMoreBtnEl.classList.add('is-hidden');  
            return;
        }
        if (data.totalHits === 1){
            galleryEl.innerHTML= renderCards(data.hits); 
            loadMoreBtnEl.classList.add('is-hidden');
         return;
        }
         renderCards(data.hits);  

        loadMoreBtnEl.classList.remove('is-hidden');
    })
    .catch(err => {
        console.log(err);   
    });  
};

const onLoadMoreBtnClick = async event => {
unsplashApi.page += 1;


unsplashApi
.fetchPhotosByQuery()
.then(data => {
    galleryEl.insertAdjacentHTML(
        'beforeend', 
        renderCards(data.hits)
      );
      if (unsplashApi.page === data.totalHits){
        loadMoreBtnEl.classList.add()
      }
})
.catch(err => {
    console.log(err);
  });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);

