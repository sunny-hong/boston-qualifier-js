//  Synchronous Callback function

const names = ['james', 'jess', 'jill', 'jack']

const myForEach = (arr, callback) => {
    for (let i=0; i<arr.length;){
        const element = arr[i];
        callback(element)
    }
}

myForEach(names, (name) => {
    console.log(name);
}) 


// --------

const loadPokemon = (id, cb) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
        cb(data)
    })
}

loadPokemon(56, (pokemon) => {
    console.log(pokemon);
}
)