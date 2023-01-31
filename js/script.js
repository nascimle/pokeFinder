var form = document.querySelector('form')



form.addEventListener('submit', function(e){


    
    //block page refresh
    e.preventDefault();

    let urlForm = "https://pokeapi.co/api/v2/pokemon/";

    let inputAnswer = document.querySelector('#name').value;

    let search =  (urlForm + inputAnswer).toLowerCase();

    let answer = document.querySelector('#content');

    let image = document.querySelector('#imgPokemon');

    console.log(search);

    let html = ''

    fetch(search)
        .then(answer => answer.json())
        .then(function(data){
            console.log(data)
            html = 'Nome: ' + maiuscula(data.name) + '<br>'
            html = html + 'Type: ' + maiuscula(data.types[0].type.name)
            answer.innerHTML = html

            image.innerHTML = "<img src ='" + data.sprites.front_default + "'> <img src ='" + data.sprites.back_default + "'>"
        })
        .catch(function(err){
            if(err == "SyntaxError: Unexpected token 'N', \"Not Found\" is not valid JSON"){
                html = 'Pokémon não encontrado! 😒';
            }else{
                html = 'Error: ' + err;
            }
            answer.innerHTML = html
        })

})

function maiuscula(val){
    return val[0].toUpperCase() + val.substr(1)
}