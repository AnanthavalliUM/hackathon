const pokemon50 = async () => {
    
    const pokeurl = "https://pokeapi.co/api/v2/pokemon/"
    const offsetvalue = 50;
    try{
        const limitElement = document.getElementById('num-inp').value;
        const response = await fetch(`${pokeurl}?limit=${limitElement}&offset=${offsetvalue}`);
         const data = await response.json();
         console.log(data);

        }
        catch (error)
        {
            console.log(error);
        }
            
        
            
        }


        const pokeability = async () => {
            const abilityurl = "https://pokeapi.co/api/v2/ability/"
            const Element3 = document.getElementById('number-inp').value;
            const response = await fetch (`${abilityurl}${Element3}/`);
            const data4 = await response.json();
        
            const detailelement = document.getElementById('details2')
            detailelement.innerText = `id - ${data4.id}
            effect - ${data4.effect_entries.effect}
            main - ${data4.is_main_series}
            language - ${data4.language}`

          
        
        }
