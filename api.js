fetch("https://jokeapi.aniklakhany.repl.co")
  .then((response) => {
      console.log(response);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    document.getElementById('joke').innerHTML = `${data.joke}`
  })
  .catch((error) => document.getElementById('joke').innerHTML = `Couldn't fetch joke 😢`)