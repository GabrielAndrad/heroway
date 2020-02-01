function getHeroes() {
  const get = fetch(
    'https://akabab.github.io/superhero-api/api/all.json',
    { method: 'GET' }
  );

  get
    .then((response) => {
      return response.json();
    })
    .then((heroes) => {
      return heroes;
    })
    .catch((err) => {
      console.log("err", err);
    });


  console.log('get', get);
}

getHeroes();


 async function getHeroesWithAsyncAwait() {
  
  try {
    const get =  await fetch(
    'https://akabab.github.io/superhero-api/api/all.json',
    { method: 'GET' }
  );

  const heroes = await get.json()
    
} catch (err) {
      console.log('err',err);
    }
}

getHeroesWithAsyncAwait();