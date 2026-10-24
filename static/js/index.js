// Copy BibTeX to clipboard
function copyBibTeX() {
  const bibtex = document.getElementById('bibtex-code').textContent;
  const label = document.querySelector('.copy-bibtex-btn .copy-text');
  navigator.clipboard.writeText(bibtex).then(function () {
    label.textContent = 'Copied!';
    setTimeout(function () { label.textContent = 'Copy'; }, 2000);
  });
}

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function () {
  const button = document.querySelector('.scroll-to-top');
  button.classList.toggle('visible', window.pageYOffset > 300);
});
