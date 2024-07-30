//Exercise 1: Pokémon list
fetchPokemonList()
    .then( (data) => {
        let pokemonList = document.querySelector('.pokemon-list');
        for(pokemon of data){
            pokemonList.insertAdjacentHTML('beforeend',
                `<article class="pokemon">
                    <h4>${pokemon.name}</h4><p>(Jap: ${pokemon.japanese})</p>
                    <p>${pokemon.info}</p>
                </article>
                `
            );
        }
    });

async function fetchPokemonList(){
    let response = await fetch('https://santosnr6.github.io/Data/pokemons.json');
    return response.json();
}

//Exercise 2: Dog list
fetchDogList()
    .then((data) => {
        let dogList = document.querySelector('.dog-list');
        for(dog of data){
            dogList.insertAdjacentHTML('beforeend',
                `<article class="dog">
                    <h3>${dog.name}</h4>
                    <img src="${dog.img}">
                    <p>Contact: ${dog.owner.phoneNumber}</p>
                </article>
                `
            );
        }
    });

async function fetchDogList(){
    let response = await fetch('https://majazocom.github.io/Data/dogs.json');
    return response.json();
}

//Exercise 3: Book liist
fetchBookList()
    .then((data) => {
        let bookList = document.querySelector('.book-list');
        for(book of data){
            if(book.pages < 500){
                bookList.insertAdjacentHTML('beforeend',
                    `<article class="book">
                        <img src="${book.cover}">
                        <p>By ${book.author}.</p>
                        <p>${book.pages} pages</p>
                        <p>${book.genre.map( (genre) => genre.toUpperCase() ).join(', ')}
                    </article>
                    `
                );
            }
        }
    });

async function fetchBookList(){
    let response = await fetch('https://majazocom.github.io/Data/books.json');
    return response.json();
}

//Exercise 4: Visitor list
fetchVisitorList()
    .then((data) => {
        let visitorList = document.querySelector('.visitor-list');
        for(visitor of data){
            if(visitor.attending && visitor.allergies.length > 0){
                visitorList.insertAdjacentHTML('beforeend',
                    `<article class="visitor">
                        <h4>${visitor.name}</h4>
                        <img src="${visitor.image}">
                        <p>Allergies</p>
                        <ul>${visitor.allergies.map( (allergy) => `<li>${allergy}</li>`).join('')}</ul>
                    </article>
                    `
                );
            }
        }
    });

async function fetchVisitorList(){
    let response = await fetch('https://majazocom.github.io/Data/attendees.json');
    return response.json();
}

//Exercise 5: Movie list with searchbar
setup();

function setup(){
    fetchMovieList()
        .then((movies) => {
            let movieList = document.querySelector('.movie-list');
            for(movie of movies){
                movieList.insertAdjacentHTML('beforeend',
                    `<article class="movie">
                        <h2>${movie.title}</h4>
                        <img src="${movie.poster}">
                    </article>
                    `
                );
            }

            document.querySelector('.movie-search').addEventListener('keyup', (e) => {
                document.querySelectorAll('.movie').forEach((movie) => {
                    if( movie.querySelector('h2').textContent.search(e.target.value) == -1){
                        movie.classList.add('hidden');
                    }else {
                        movie.classList.remove('hidden');
                    }
                })
            })
        });
}

async function fetchMovieList(){
    let response = await fetch('https://santosnr6.github.io/Data/movies_long.json');
    return response.json();
}