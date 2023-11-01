const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '18c5b11531msh887eb77c38c3557p170762jsn09858418d36e',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));