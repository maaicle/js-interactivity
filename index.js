let message = document.querySelector('#message');

const addMovie = event => {
    event.preventDefault();
    let inputField = document.querySelector('input').value;
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputField;
    movieTitle.addEventListener('click', crossOffMovie);
    movie.appendChild(movieTitle);
    
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);

    document.querySelector('ul').appendChild(movie);
    document.querySelector('input').value = '';
};

document.querySelector('form').addEventListener('submit', event => {
    addMovie(event);    
})

let revealMessage = () => {
    message.classList.remove('hide');
    setTimeout(() => message.classList.add('hide'), 1000)
}

let deleteMovie = event => {
    event.target.parentNode.remove();
    message.textContent = `${event.target.parentNode.childNodes[0].textContent} deleted!`;
    revealMessage();
}

let crossOffMovie = event => {
    event.target.classList.toggle('checked');
    if (event.target.classList.contains('checked')) {
        message.textContent = `${event.target.textContent} Watched`;
    } else {
        message.textContent = `${event.target.textContent} added back!`;
    };
    revealMessage();
}

// const inputField = 'elf';
// const movie = document.createElement('li');
// const movieTitle = document.createElement('span');
// movieTitle.textContent = inputField;
// movie.appendChild(movieTitle);
// document.querySelector('ul').appendChild(movie);
// console.log(document.querySelector('ul'));


