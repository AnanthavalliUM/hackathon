

const pokemon = async () => {
    
const pokeurl = "https://pokeapi.co/api/v2/pokemon/"

try{
    const nameElement = document.getElementById('name').value;
     const response = await fetch(`${pokeurl}${nameElement}`);
     const data = await response.json();
    //  console.log(data);
  document.querySelector(".pokemonBox").innerHTML = `
      Weight: ${data.weight}`
    
    
    
}
catch (error)
{
    console.log(error);
}
    

    
}


 const pokemonmove = async () => {
     const moveurl = "https://pokeapi.co/api/v2/move/"    
      const Element1 = document.getElementById('number-ip').value;
     const response = await fetch (`${moveurl}${Element1}/`);
     const data2 = await response.json();

    const detailelement = document.getElementById('details')
     detailelement.innerText = `PP - ${data2.pp}
     Priority - ${data2.priority}
     Power - ${data2.power}
     generation - ${data2.generation.name}
     Accuracy - ${data2.accuracy}
  `

 }