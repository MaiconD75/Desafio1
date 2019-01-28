const ids = ['square1', 'square2', 'square3', 'square4']  
    
function randomizer() {

    ids.forEach(function(id){

            let r = Math.floor(Math.random()* 256)
            let g = Math.floor(Math.random()* 256)
            let b = Math.floor(Math.random()* 256)
            let color = `rgb(${r}, ${g}, ${b})`

            document.getElementById(id).style.backgroundColor = color
    });
}

function randomizerAction() {

    ids.forEach(function(id){

        document.getElementById(id).addEventListener("click", function(){randomizer()}) 
    })
}
randomizer();
randomizerAction();