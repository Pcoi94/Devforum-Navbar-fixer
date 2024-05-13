function applyStyles() {
  const navbar = document.querySelector('#creator_hub_navigation_rbx > header > nav');
  const header = document.querySelector('#ember11 > header > div > div');

  if (navbar) { navbar.style.display = 'none'; };
  if (header) {
      animate(header)
      header.style.transition = 'top 0.1s linear';
      window.addEventListener('scroll', () => animate(header));
  };
};

applyStyles();

function animate(header) {
  const scrollTop = window.scrollY || window.pageYOffset;
  header.style.top = (scrollTop >= 40) ? '0px' : '-50px';
}

function handleMutations(mutationsList, observer) {
  for (let mutation of mutationsList) {
      if (mutation.type === 'childList') {
          applyStyles();
      };
  };
};

const observer = new MutationObserver(handleMutations);
observer.observe(document.body, { childList: true, subtree: true });
