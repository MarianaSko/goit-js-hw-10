import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";
import { createMarkupForCatImg, createMarkupforBreedInfo, createMarkupForSelect } from "./css/templates/markup.js";
import { isHiddenAdd, isHiddenRemove } from "./css/templates/helpers.js";
import SlimSelect from 'slim-select';
import "../node_modules/slim-select/dist/slimselect.css"
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const breedSelectEl = document.querySelector('.breed-select');
const catInfoEl = document.querySelector('.cat-info');
const loaderEl = document.querySelector('.loader');

breedSelectEl.addEventListener('change', onBreedSelectChange);

isHiddenAdd(catInfoEl);
isHiddenAdd(breedSelectEl);

fetchBreeds().then((res) => {

    const breedsList = res.map(breed => createMarkupForSelect(breed));
    breedSelectEl.innerHTML = breedsList.join('');

    isHiddenRemove(breedSelectEl);
    isHiddenAdd(loaderEl);

    new SlimSelect({
        select: '.breed-select',
    })

}).catch((err) => Notify.failure('Oops! Something went wrong! Try reloading the page!'));

function onBreedSelectChange(event) {

    isHiddenRemove(loaderEl);
    isHiddenAdd(breedSelectEl);
    isHiddenAdd(catInfoEl);


    fetchCatByBreed(event.target.value).then((res) => {

        isHiddenAdd(loaderEl);
        isHiddenRemove(breedSelectEl);


        const catInfo = createMarkupforBreedInfo(res[0].breeds[0]);
        catInfoEl.innerHTML = catInfo;
        catInfoEl.insertAdjacentHTML('afterbegin', createMarkupForCatImg(res[0]));

        isHiddenRemove(catInfoEl);

    }).catch((err) => Notify.failure('Oops! Something went wrong! Try reloading the page!'));

}





