
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

export const renamePokedex = async (data) => {
    const response = await fetch(
        'http://localhost:4444/pokedexUser/update', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }
    )
    const pokedexUpdate = await response.json()
    return pokedexUpdate
}
