// functions codding challenge

function checkWinner(TeamAverage, TeamBAverage) {
    
    let [TeamA, TeamB] = ["Dolphins", "Koalas"]
    if (TeamAverage >= 2 * TeamBAverage) {
        console.log(`${TeamA} win 🏆 (${TeamAverage} vs. ${TeamBAverage})`);
    }
    else if (TeamAverage >= 2 * TeamBAverage) {
        console.log(`${TeamB} win 🏆 (${TeamBAverage} vs. ${TeamAverage})`);
    }
    else {
        console.log('No team wins...');
    }
    
}
const calcAverage = (a, b, c) => (a + b + c) / 3;
checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));

// arrays codding challenge