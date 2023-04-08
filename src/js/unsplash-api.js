export class UnsplashApi{
    static BASE_URL = 'https://pixabay.com/api/'
    static API_KEY = '35037211-da9c7b82ee428b79405e3aed9'

    constructor(){

    }

    fetchPhotosByQuery() {
        const searchParams = new URLSearchParams({
            q: cat,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: 1,
            per_page: 20,
            key: UnsplashApi.API_KEY,
          });
       return fetch(
            `${UnsplashApi.BASE_URL}?${searchParams}` ).then(
                response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
        
            return response.json();
        }
      );
    }
}