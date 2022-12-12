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
