# WikiViewer
Free Code Camp's Wikipedia Viewer Project

### Plan For JS (5/2/17)
1.	User will type into input element. When the input is in focus, it will trigger a focus event which will bind a keypress event listener to the input.
2. 	For every character typed into input, the app will make an AJAX call to
		the Wikipedia API.
3. 	https://en.wikipedia.org/w/api.php?format=json&action=opensearch&search={USER SEARCH INPUT}
4. 	The app will render 10 clickable suggestion elements immediately onto the page that will take the user to the specified Wikipedia article.
5.	When the user presses the return key, the app will render 10 clickable results elements onto the page and blur the input element.
6.	The suggestion elements will contain title suggestions that, when clicked, will trigger an AJAX call that will return search results for the title.
7. The result elements will contain a title and first sentence or so of the article. When clicked, it will open a new window and take the user to the specified article.
