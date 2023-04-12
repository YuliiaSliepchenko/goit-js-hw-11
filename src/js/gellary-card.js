import '../css/style.css';

const galleryEl = document.querySelector(".gallary-img");
console.log(galleryEl);



export function renderCards(array){
const markUp = array.map (({webformatURL,largeImageURL,tags,likes, views, comments,downloads})=> {
    return`<div class="photo-card">
      <img src="${webformatURL}"
       href = "${largeImageURL}" 
       alt="${tags}"
        loading="lazy"
        width="320"
        heigth= "300"
        />
      <div class="info">
      <p class="info-item">
          Likes: ${likes}
        </p>
        <p class="info-item">
          Views: ${views}
        </p><br>
        <br><p class="info-item">
          Comments:${comments}
        </p>
        <p class="info-item">
          Downloads:${downloads}
        </p>
      </div>
    </div>`;
})
.join("");
galleryEl.innerHTML = markUp;
}
console.log(renderCards);




   
  