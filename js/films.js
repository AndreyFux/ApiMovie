document.addEventListener("DOMContentLoaded", getData);

async function getData() {
    try {
        const response = await fetch('https://andreyfux.github.io/ApiMovie/films.json');

        if (!response.ok) {
            const message = 'Error with Status Code: ' + response.status;
            throw new Error(message);
        }

        const data = await response.json();
        console.log(data)
        displayMovies(data)
    } catch (error) {
        console.log('Error: ' + err);
    }
}

function checkParity(number) {
    return number % 2 === 0 ? "Odd" : "Even"
}

function displayMovies(films) {

    const leftBlock = document.querySelector('.gallery__left');
    const rightBlock = document.querySelector('.gallery__right');

    for (let index = 0; index < films.length; index++) {
        if (checkParity(index) == 'Odd') {
            const filmImage = document.createElement('img');
            filmImage.classList.add('gallery__item');
            filmImage.src = films[index].img;
            leftBlock.appendChild(filmImage);

            if (films[index].text) {
                const filmBlock = document.createElement('div');
                const filmName = document.createElement('h2');
                const filmText = document.createElement('p');
                filmBlock.className += "text-block gallery__item";
                filmName.classList.add('text-block__h');
                filmText.classList.add('text-block__p');
                filmName.innerHTML = films[index].name;
                filmText.innerHTML = films[index].text;

                filmBlock.append(filmName, filmText);
                rightBlock.append(filmBlock);
            }
        }
        else {
            const filmImage = document.createElement('img');
            filmImage.classList.add('gallery__item');
            filmImage.src = films[index].img;
            rightBlock.appendChild(filmImage);

            if (films[index].text) {
                const filmBlock = document.createElement('div');
                const filmName = document.createElement('h2');
                const filmText = document.createElement('p');
                filmBlock.className += "text-block gallery__item";
                filmName.classList.add('text-block__h');
                filmText.classList.add('text-block__p');
                filmName.innerHTML = films[index].name;
                filmText.innerHTML = films[index].text;

                filmBlock.append(filmName, filmText);
                leftBlock.append(filmBlock);
            }
        }
    }
}