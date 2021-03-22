document.addEventListener( 'DOMContentLoaded', function() {
	var weather;

	if ( 'IntersectionObserver' in window ) {
		weather = document.querySelectorAll('.weather');

		var weatherObserver = new IntersectionObserver( function( entries, observer ) {
			entries.forEach( function( entry ) {
				if ( entry.isIntersecting ) {
					if (entry.target.classList.contains('weather')) {
						fetchForecast();
					}
				}
			});
		}, {
			rootMargin: '0px 0px -120px 0px'
		});

		weather.forEach(function (s) {
			weatherObserver.observe(s);
		});
	}
});