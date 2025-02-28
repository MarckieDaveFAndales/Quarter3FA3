function generateGamingStats() {
    let fortniteWins = Math.ceil(Math.random() * 20);
    let valorantWins = Math.ceil(Math.random() * 20);
    let ultrakillWins = Math.ceil(Math.random() * 20);
    
    document.getElementById("fortniteWins").innerText = fortniteWins;
    document.getElementById("valorantWins").innerText = valorantWins;
    document.getElementById("ultrakillWins").innerText = ultrakillWins;
    
    let maxWins = Math.max(fortniteWins, valorantWins, ultrakillWins);
    let mostWinsGame = maxWins === fortniteWins ? "Fortnite" : maxWins === valorantWins ? "Valorant" : "Ultrakill";
    document.getElementById("mostWins").innerText = `The game with the most winners: ${mostWinsGame} (${maxWins})`;
    
    let topScorerLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    document.getElementById("topScorer").innerText = `The top scorer's name starts with: ${topScorerLetter}`;
    
    let totalMinutes = Math.ceil(Math.random() * 120);
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;
    document.getElementById("completionTime").innerText = `Completion time: ${totalMinutes} mins (${hours} hr ${minutes} min)`;
}
