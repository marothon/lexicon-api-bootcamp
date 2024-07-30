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