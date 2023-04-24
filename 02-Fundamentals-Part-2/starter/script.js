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

// 50 - 300 = 15%
// else = 20%

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    }
    else {
        return bill * 0.2;
    }
}

testData = [125, 555, 44];
let bills = [];
let tips = [];
let total = []

for(let i = 0; i < testData.length; i++) {
    bills.push(testData[i]);
    tips.push(calcTip(testData[i]));
    total.push(testData[i] + tips[i]);
}
console.log(bills);
console.log(tips);
console.log(total);