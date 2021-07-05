// import '../scss/style.css';
import '../scss/style.scss';

const coll = document.getElementsByClassName('collapsible');
let i;

for (i = 0; i < coll.length; i += 1) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = `${content.scrollHeight}px`;
    }
  });
}

// eslint-disable-next-line func-names
(function () {
  const setting = {
    height: 450,
    zoom: 16,
    queryString: 'проспект Пушкина 13, Минск, Беларусь',
    place_id: 'ChIJw9yxLK3a20YRVZoa0SGK0g4',
    satellite: false,
    centerCoord: [53.89736398147008, 27.498107053720098],
    cid: '0xed28a21d11a9a55',
    lang: 'ru',
    cityUrl: '/belarus/minsk-17469',
    cityAnchorText: 'Карта [CITY1], Минская область, Беларусь',
    id: 'map-9cd199b9cc5410cd3b1ad21cab2e54d3',
    embed_id: '541003',
  };
  const d = document;
  const s = d.createElement('script');
  s.src = 'https://1map.com/js/script-for-user.js?embed_id=541003';
  s.async = true;
  // eslint-disable-next-line func-names
  s.onload = function () {
    window.OneMap.initMap(setting);
  };
  const to = d.getElementsByTagName('script')[0];
  to.parentNode.insertBefore(s, to);
})();
