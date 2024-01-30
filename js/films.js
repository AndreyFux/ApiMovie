
getData();

async function getData() {
    try {
        const response = await fetch('https://andreyfux.github.io/ApiMovie/films.json');

        if (!response.ok) {
            const message = 'Error with Status Code: ' + response.status;
            throw new Error(message);
        }

        const data = await response.json();
        displayMovies(data)
    } catch (error) {
        console.log('Error: ' + error);
    }
}

function checkParity(number) {
    return number % 2 === 0 ? "Odd" : "Even"
}

function displayfilm(firstBlock, senodBlock, film) {
    const filmImage = document.createElement('img');
    filmImage.classList.add('gallery__item');
    filmImage.src = film.img;
    firstBlock.appendChild(filmImage);

    if (film.text) {
        const filmBlock = document.createElement('div');
        const filmName = document.createElement('h2');
        const filmText = document.createElement('p');
        filmBlock.className += "text-block gallery__item";
        filmName.classList.add('text-block__h');
        filmText.classList.add('text-block__p');
        filmName.innerHTML = film.name;
        filmText.innerHTML = film.text;

        filmBlock.append(filmName, filmText);
        senodBlock.append(filmBlock);
    }
}

function displayMovies(films) {
    const leftBlock = document.querySelector('.gallery__left');
    const rightBlock = document.querySelector('.gallery__right');

    for (let index = 0; index < films.length; index++) {
        if (checkParity(index) == 'Odd') {
            displayfilm(leftBlock, rightBlock, films[index])
        }
        else {
            displayfilm(rightBlock, leftBlock, films[index])

        }
    }
    addAnimations();
}