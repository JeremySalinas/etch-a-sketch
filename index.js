function etchsketch(numOfSquares){
  for(let j=0;j<numOfSquares;j++){
    let currentrow = document.createElement('p')
    document.getElementById('pixels').appendChild(currentrow)

    for(let y=0;y<numOfSquares;y++){
      let div = document.createElement('div')
      currentrow.appendChild(div)
      div.classList.add('unhover')
    }
  }


  for(let i=0;i<(numOfSquares * numOfSquares);i++){
    document.getElementsByClassName('unhover')[i].addEventListener('mouseover', e =>{
      document.getElementsByClassName('unhover')[i].classList.add("permahover");
    })
}

}

let total = prompt("What size do you want the Square? (<100)")

while(total>100){
  total = prompt("MUST BE LESS THAN 100") 
}

etchsketch(total)
