const cor = (id) => {
    let r = Math.floor(Math.random()* 255)
    let g = Math.floor(Math.random()* 255)
    let b = Math.floor(Math.random()* 255)
    let color = `rgb(${r}, ${g}, ${b})`
    document.getElementById(id).style.backgroundColor = color
}
const randomizer = () => {
    var i = 1
    while(i < 5){
        var idC = 'square'
        idC += i
        i++
        cor(idC)
    }
}
randomizer()