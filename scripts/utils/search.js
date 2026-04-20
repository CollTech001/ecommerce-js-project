const header = document.querySelector('.header');
const searchContainer = document.querySelector('.header-middle-section');
const searchInput = document.querySelector('.search-bar');
const searchButton = document.querySelector('.search-button');
const MOBILE_BREAKPOINT = 575;

export function handleSearch() {
  const searchQuery = searchInput.value.trim();
 
  if (window.innerWidth <= MOBILE_BREAKPOINT) {
    searchContainer.classList.remove('active');
  }
 
  if (searchQuery) {
    window.location.href = `index.html?search=${encodeURIComponent(searchQuery)}`;
  } else {
    window.location.href = 'index.html';
  }
}

function expandSearchMobile() {
  if (window.innerWidth <= MOBILE_BREAKPOINT) {
    searchContainer.classList.add('active');
  }
}

function collapseSearchOnClickOutside(e) {
  if (window.innerWidth <= MOBILE_BREAKPOINT &&
      searchContainer.classList.contains('active') &&
      !searchContainer.contains(e.target)) {
    searchContainer.classList.remove('active');
  }
}

function collapseOnDesktop() {
  if (window.innerWidth > MOBILE_BREAKPOINT) {
    searchContainer.classList.remove('active');
  }
}

searchButton.addEventListener('mousedown', (e) => {
  e.preventDefault();
  e.stopPropagation();
  handleSearch();
});

searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    handleSearch();
  }
});

searchInput.addEventListener('focus', expandSearchMobile);

document.addEventListener('click', collapseSearchOnClickOutside);

window.addEventListener('resize', collapseOnDesktop);
