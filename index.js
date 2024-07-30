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