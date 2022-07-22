const imageOut = document.querySelector('.image-out');
const countryName = document.querySelector('.country-name');
const countryOriginal = document.querySelector('.country-original');
const countryCapital = document.querySelector('.country-capital');
const countryLanguages = document.querySelector('.country-languages');
const countryPopulation = document.querySelector('.country-population');
const countryCall = document.querySelector('.country-call');
const countryInternet = document.querySelector('.country-internet');

for (let key in images) {
   let img = document.createElement('img');
   img.setAttribute('data-key', key);
   img.src = 'picture/'+key+'.png';
   imageOut.append(img);
}

imageOut.addEventListener('click', showInfo);

function showInfo(event){
   const key = event.target.dataset['key'];
   if(key === undefined) {
      return true;
   }
   countryName.textContent = images[key]['name'];
   countryOriginal.textContent = images[key]['original'];
   countryCapital.textContent = images[key]['capital'];
   countryLanguages.textContent = images[key]['languages'];
   countryPopulation.textContent = images[key]['population'];
   countryCall.textContent = images[key]['call'];
   countryInternet.textContent = images[key]['internet'];

   document.querySelectorAll('.image-out img').forEach(item =>
      item.classList.remove('active'));

   event.target.classList.add('active');
}