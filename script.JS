let currentPage = 0;

function nextPage() {
  const pages = document.querySelectorAll('.page');
  pages[currentPage].classList.add('hidden');
  currentPage += 1;
  if (currentPage < pages.length) {
    pages[currentPage].classList.remove('hidden');
  }
}
