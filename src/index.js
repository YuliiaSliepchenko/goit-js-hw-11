const refs = {
    inputGet:document.querySelector('input'),
    buttonSubmit:document.querySelector('button'),
}
refs.buttonSubmit.addEventListener('click', searchGet)

function searchGet(){
    const searchName = refs.inputGet.value

    fetch('https://pixabay.com/api/').then(resolve => resolve.json()).then(result => console.log(result))
}