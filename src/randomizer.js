const randomizer = (id) =>{
    const Colors = ["#CCC", "#10666d", "#15fc00", "#12104f", "#000", "#cd0101", "#400040", "#f9fe23"] 
    color = 0
    index = Colors.length
        setInterval(() => {
        const color = Math.floor(Math.random() * Colors.length)
        const c =Colors[color]
    document.getElementById(id).style.backgroundColor = c           
        }, 2000)
    }
            
    randomizer('square1')
    randomizer('square2')
    randomizer('square3')
    randomizer('square4')