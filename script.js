window.onload = () => {
    debugger
    let topoAleatorio = rollDice(10)
    let div1 = document.getElementById(topoAleatorio)
   // let imgConTopo = div1.getElementsByTagName("img")
    // imgConTopo.src = "0FFD99D0-1BD3-411D-BB3A-CF8079215775-removebg-preview.png"


    let imgDiv = document.createElement("img")
    imgDiv.src = "0FFD99D0-1BD3-411D-BB3A-CF8079215775-removebg-preview.png"
    imgDiv.style.position="absolute"
    imgDiv.style.width="70px"
    imgDiv.style.height="70px"

    

    div1.appendChild(imgDiv)

}

function rollDice(caras) {
    return Math.floor((Math.random(caras) * 9) + 1)                                                
 }
 
 