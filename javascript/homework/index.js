async function myHeroes () {

    try{
    const acess = await fetch ("https://akabab.github.io/superhero-api/api/all.json");

    const heroes = await acess.json();

    console.log("heroes encontrados",heroes)
    
    const HeroesMyName = heroes.map((heroes) =>{
        if(heroes.name.substr(0,1) === 'G'){
        console.log("Nome dos Heroes",heroes.name);
    }
    })

    const HeroesDC = heroes.map((heroes) =>{
        if(heroes.biography.publisher === 'DC Comics'){
            console.log("Nome dos Heroes da DC",heroes.name);
        }
    })
    } catch(error){
        console.log("ocorreu um erro",error);
    }

}


myHeroes();

