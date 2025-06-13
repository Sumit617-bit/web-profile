const jokeBox = document.getElementById("joke");
const refreshBtn = document.getElementById("refreshBtn");

async function fetchJoke() {
    jokeBox.textContent = "loading joke...";
    try{
        const response = await fetch("https://icanhazdadjoke.com/",{
            headers: {
                Accept: "application/json"
            }
        });
        const data = await response.json();
        jokeBox.textContent = data.joke;
    }catch(error){
        jokeBox.textContent = "Failed to fetch joke. Please try again.";
    }
}

fetchJoke();

refreshBtn.addEventListener("click", fetchJoke);