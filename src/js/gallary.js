
import { UnsplashApi } from './unsplash-api'; 

const searchFormEl = document.querySelector('.js-search-form');
const unsplashApi = new UnsplashApi();

console.log(unsplashApi);


const onSearchFormSubmit = event => {
    event.preventDefault();

    const { target: formEl } = event;

    const searchQuery = formEl.elements.searchQuery.value

    console.log(searchQuery);
};

searchFormEl.addEventListener('submit', onSearchFormSubmit)


// .then(data => {
//     //     console.log(data);
//     // }).catch(err => {
//     //     console.log(err);
//     // })