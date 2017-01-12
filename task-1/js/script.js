let btn = document.getElementById("btn");
let outcome = document.getElementById("outcome");

btn.addEventListener("click", function() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://raw.githubusercontent.com/sedc-codecademy/sedc5-ajs/master/homework-tasks/task-1/filelist.json', true);
	xhr.send(null);

	xhr.onreadystatechange = function() {
		if (xhr.readyState == XMLHttpRequest.DONE) {
			let filelist = JSON.parse(xhr.responseText);
			let randomElement = filelist[Math.floor(Math.random() * filelist.length)];
			console.log(randomElement);
			let secondRequest = new XMLHttpRequest();
			secondRequest.open('GET', 'https://raw.githubusercontent.com/sedc-codecademy/sedc5-ajs/master/homework-tasks/task-1/' + randomElement, true);
			secondRequest.send(null);

			secondRequest.onreadystatechange = function() {
				if (secondRequest.readyState == XMLHttpRequest.DONE) {
					let randomFile = JSON.parse(secondRequest.response);
					let result = 0;
					switch (randomFile.operation) {
						case "sine":
							for (var i = 0; i < randomFile.data.length; i++) {
								result += Math.sin(randomFile.data[i]);
							}
							outcome.innerHTML = `<div>The operation, ${randomFile.operation}, applied to the array, ${randomFile.data}, gives a result of, ${result}</div>`;
							result = 0;
							break;
						case "cosine":
							for (var i = 0; i < randomFile.data.length; i++) {
								result += Math.cos(randomFile.data[i]);
							}
							outcome.innerHTML = `<div>The operation, ${randomFile.operation}, applied to the array, ${randomFile.data}, gives a result of, ${result}</div>`;
							result = 0;
							break;
						case "log":
							for (var i = 0; i < randomFile.data.length; i++) {
								result += Math.log(randomFile.data[i]);
							}
							outcome.innerHTML = `<div>The operation, ${randomFile.operation}, applied to the array, ${randomFile.data}, gives a result of, ${result}</div>`;
							result = 0;
							break;
						case "square":
							for (var i = 0; i < randomFile.data.length; i++) {
								result += Math.sqrt(randomFile.data[i]);
							}
							outcome.innerHTML = `<div>The operation, ${randomFile.operation}, applied to the array, ${randomFile.data}, gives a result of, ${result}</div>`;
							result = 0;
							break;
						case "cube":
							for (var i = 0; i < randomFile.data.length; i++) {
								result += Math.pow(randomFile.data[i], 2);
							}
							outcome.innerHTML = `<div>The operation, ${randomFile.operation}, applied to the array, ${randomFile.data}, gives a result of, ${result}</div>`;
							result = 0;
							break;
					}
				}
			}
		}
	}
});