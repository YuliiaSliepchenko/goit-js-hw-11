import { Notify } from 'notiflix/build/notiflix-notify-aio';
import '../css/style.css';
import { UnsplashApi } from './unsplash-api'; 
import { renderCards } from './gellary-card';

const searchFormEl = document.querySelector('.search-form');
const galleryEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.load-more');
let pageCount = null;


const unsplashApi = new UnsplashApi();

 const onSearchFormSubmit = async event => {
    event.preventDefault();

    loadMoreBtnEl.classList.add('is-hidden');

    const { target: formEl } = event;

    unsplashApi.query = formEl.elements.searchQuery.value.trim();
    unsplashApi.page = 1; 

    try {
      const {data: {hits,totalHits}} = await unsplashApi.fetchPhotosByQuery()

     pageCount = Math.floor(totalHits / 40);
     galleryEl.innerHTML = '';
      Notify.info(`Hooray! We found ${totalHits} images.`); 
      if (totalHits === 0){
        
        loadMoreBtnEl.classList.add('is-hidden');  
        Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.')
        return;
    }
     renderCards(hits);  
   
    if (pageCount > 1){
        loadMoreBtnEl.classList.remove('is-hidden');   
    }
    } catch (error) {
     console.log(error)   
    }
};

const onLoadMoreBtnClick = async () => {
unsplashApi.page += 1;

try {
    const {data: {hits}} = await unsplashApi.fetchPhotosByQuery()
    renderCards(hits);
      if (unsplashApi.page > pageCount){
        loadMoreBtnEl.classList.add("is-hidden")
      }
    } catch (error) {
        console.log(error)   
       }
}
searchFormEl.addEventListener('submit', onSearchFormSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);

