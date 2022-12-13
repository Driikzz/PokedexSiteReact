
export const getAll = async () => {
    const response = await fetch(
        'http://localhost:4444/pokedexUser/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const pokedex = await response.json()
    return pokedex
}

export const renamePokedex = async (pokemon , newname) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/updatePoke', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'changePokemon': pokemon.name,
                'name':document.getElementById(newname).value


            })
        }
    )
    const pokedexUpdate = await response.json()
    return pokedexUpdate
}
