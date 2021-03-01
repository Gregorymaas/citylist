fetch('https://backendcities.herokuapp.com/?cuid=hajIUIksk983LLP11112220&start=1&size=30')
    .then(response => response.json())
    .then(data => console.log(data));

        const result = document.getElementById('cities');
        result.innerHTML = result;
        result.appendChild(result);
