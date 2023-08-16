import { getFooterText } from './modules/footer.js';
import { getHeaderContent } from './modules/header.js';
import { getGalleryImages } from './modules/gallery.js';
import { getThemeButton } from './modules/themeButton.js';
import { getMainText } from './modules/mainText.js';
import { getModeIcon } from './modules/modeIcon.js';

// START INITIAL MODES
const body = document.querySelector('body');
const overlay = document.getElementById('overlay');
const headerContent = getHeaderContent();
const headerTitle = document.getElementById('headerTitle');
const titleP = document.getElementById('titleP');
const p = document.querySelector('p');
const header = document.getElementById('headerContainer');
const themeButtonText = document.getElementById('themeButton');
const themeButton = document.getElementById('themeButton');
const main = document.getElementById('mainText');
const footer = document.querySelector('footer');
const footerText = document.getElementById('footerText');

const topLine = document.getElementById('topLine');
const modeIconElement = getModeIcon(); // Create the modeIcon element dynamically
topLine.appendChild(modeIconElement);

topText.innerHTML = headerContent[0];
headerTitle.innerHTML = headerContent[1];
titleP.innerHTML = headerContent[2];
themeButtonText.innerHTML = getThemeButton();
main.innerHTML = getMainText();
footerText.innerHTML = getFooterText();

let isDarkMode = false;
// END INITIAL MODES

// START THEME BUTTON
themeButton.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  const bgColor = isDarkMode ? 'black' : 'white';
  overlay.style.display = isDarkMode ? 'block' : 'none';
  modeIconElement.src = isDarkMode ? './images/moon.svg' : './images/sun.svg';
  const textColor = isDarkMode ? 'white' : 'black';
  body.style.backgroundColor = bgColor;
  header.style.backgroundColor = bgColor;
  headerTitle.style.color = textColor;
  p.style.color = textColor;
  themeButton.textContent = isDarkMode ? 'Light mode' : 'Dark mode';
  themeButton.style.color = textColor;
  themeButton.style.boxShadow = isDarkMode
    ? '2px -1px 3px white'
    : '1px -1px 3px black';
  main.style.backgroundColor = bgColor;
  mainText.style.color = textColor;
  footer.style.backgroundColor = bgColor;
  footer.style.color = textColor;
});
// END THEME BUTTON

// START GALLERY IMAGES
const galleryImages = getGalleryImages();
const gallery = document.getElementById('galleryContainer');

galleryImages.forEach((imageSrc) => {
  const galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery-item');

  const img = document.createElement('img');
  img.src = imageSrc;
  img.alt = 'Image';

  galleryItem.appendChild(img);
  gallery.appendChild(galleryItem);
});
// END GALLERY IMAGES
