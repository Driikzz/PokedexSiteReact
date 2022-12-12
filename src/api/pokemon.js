
export const getAll = async () => {
    const response = await fetch(
        'http://localhost:4444/pokemon/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const pokemons = await response.json()
    return pokemons
}

export function pokemonInPokedex(data){
    console.log(data)
    fetch('http://localhost:4444/pokedex/insert', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({name:data}),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error,data);
    });
}

export function deletePokedex(data){
    console.log(data)
    fetch('http://localhost:4444/pokedexUser/delete', {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({name:data}),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
        
    })
    .catch((error) => {
        console.error('Error:', error,data);
    });
}






















