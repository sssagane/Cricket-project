const facts = [
    "The first cricket match was played in 1646 in Kent, England.",
    "Sachin Tendulkar is the highest run-scorer in international cricket.",
    "The longest cricket match lasted for 12 days.",
    "The Cricket World Cup is held every 4 years.",
    "Muttiah Muralitharan has the most wickets in Test cricket history."
];

function showFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("factDisplay").textContent = facts[randomIndex];
}
