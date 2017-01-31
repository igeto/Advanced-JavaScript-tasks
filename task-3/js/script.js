let xhr = new XMLHttpRequest();
xhr.open('GET', '../movies/movie-list.json', true);
xhr.send(null);

xhr.onreadystatechange = function() {
	if (xhr.readyState == XMLHttpRequest.DONE) {
		let movieList = JSON.parse(xhr.responseText);
		console.log(movieList);
	}
}