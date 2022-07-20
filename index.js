function etchsketch(numOfSquares){

  for(let j=0;j<numOfSquares;j++){
    let currentrow = document.createElement('p')
    document.getElementById('pixels').append(currentrow)

    for(let y=0;y<numOfSquares;y++){
      let div = document.createElement('div')
      currentrow.append(div)
      div.classList.add('unhover')
    }
  }

  let color = "black"
  let oldColor

  document.getElementById('colors').addEventListener('click', e =>{
    oldColor = color
    if(e.target.innerText === 'red')
      color = "red"
    if(e.target.innerText === 'green')
      color = "green"
    if(e.target.innerText === 'blue')
      color = "blue"
    if(e.target.innerText === 'black')
      color = 'black'
    if(e.target.innerText ==='ereaser')
      color = 'white'
  })

  for(let i=0;i<(numOfSquares * numOfSquares);i++){
    document.getElementsByClassName('unhover')[i].addEventListener('mouseover', e =>{
      document.getElementsByClassName('unhover')[i].classList.remove(oldColor);
    })
  }

  for(let i=0;i<(numOfSquares * numOfSquares);i++){
    document.getElementsByClassName('unhover')[i].addEventListener('mouseover', e =>{
      document.getElementsByClassName('unhover')[i].classList.add(color);
    })
  }

}

let total = prompt("What size do you want the Square? (<100)")

while(total>100){
  total = prompt("MUST BE LESS THAN 100") 
}

etchsketch(total)
