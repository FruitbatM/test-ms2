function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Close navigation menu after clicking on anchor link
let menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach (
  function(menuLink) {
    menuLink.addEventListener('click', closeNav);
  }
);

tippy('.hover-info',{
	arrow: true,
	theme: 'light',
	size: 'big'
} );