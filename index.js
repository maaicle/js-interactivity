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

let deleteMovie = event => {
    event.target.parentNode.remove();
    message.textContent = "Movie deleted!";
}

let crossOffMovie = event => {
    event.target.classList.toggle('checked');
    event.target.classList.contains('checked') ? message.textContent = 'Movie Watched' : message.textContent = 'Movie added back!';
}

// const inputField = 'elf';
// const movie = document.createElement('li');
// const movieTitle = document.createElement('span');
// movieTitle.textContent = inputField;
// movie.appendChild(movieTitle);
// document.querySelector('ul').appendChild(movie);
// console.log(document.querySelector('ul'));


