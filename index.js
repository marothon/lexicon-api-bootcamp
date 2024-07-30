async function fetchList(url){
    try{
        let response = await fetch(url);
        let data = await response.json()
        return data;
    }catch(error){
        console.error(`Couldn't fetch list from ${url}, reason: ${error.message}`);
        return [];
    }
}

//Exercise 1: Pokémon list
fetchList('https://santosnr6.github.io/Data/pokemons.json')
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

//Exercise 2: Dog list
fetchList('https://majazocom.github.io/Data/dogs.json')
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

//Exercise 3: Book liist
fetchList('https://majazocom.github.io/Data/books.json')
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

//Exercise 4: Visitor list
fetchList('https://majazocom.github.io/Data/attendees.json')
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

//Exercise 5: Movie list with searchbar
setup();

function setup(){
    fetchList('https://santosnr6.github.io/Data/movies_long.json')
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