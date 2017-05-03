/*
TODO:

event listeners
- when input is in focus
	- keypress for user input
	- keydown for return key (event.keyCode === 13)
	- remove above events when input is blurred
- click on suggestion element
- click on result element

render
- suggestion elements when keypress
- results elements when keydown return key or user clicks on a suggestion element

http request for https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search={USER INPUT}

Getting error on getResults call
- No 'Access-Control-Allow-Origin' header is present on the requested resource.
	Origin 'null' is therefore not allowed access.
- must use JSONP or CORS to do cross-site requests
	- https://www.html5rocks.com/en/tutorials/cors/
	- https://www.mediawiki.org/wiki/API:Cross-site_requests
	- https://www.mediawiki.org/wiki/Manual:CORS

*/



const WikiApp = (function() {
	const input = document.getElementsByTagName('input')[0];

	function getResults(term) {
		const url = "https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search=" +
			term;
		const search = new XMLHttpRequest;
		search.addEventListener("load", () => {
			const results = this.responseText;
			console.log(results);
		});
		search.open("GET", url, true);
		search.send();
	}

})();
