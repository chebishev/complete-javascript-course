'use strict';

// functions codding challenge

function checkWinner(TeamAverage, TeamBAverage) {
    
    let [TeamA, TeamB] = ["Dolphins", "Koalas"]
    if (TeamAverage >= 2 * TeamBAverage) {
        //console.log(`${TeamA} win 🏆 (${TeamAverage} vs. ${TeamBAverage})`);
    }
    else if (TeamAverage >= 2 * TeamBAverage) {
        //console.log(`${TeamB} win 🏆 (${TeamBAverage} vs. ${TeamAverage})`);
    }
    else {
       //console.log('No team wins...');
    }
    
}
const calcAverage = (a, b, c) => (a + b + c) / 3;
checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));

// arrays codding challenge

// 50 - 300 = 15%
// else = 20%

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
testData = [125, 555, 44];
let bills = [];
let tips = [];
let totals = []

for(let i = 0; i < testData.length; i++) {
    bills.push(testData[i]);
    tips.push(calcTip(testData[i]));
    totals.push(testData[i] + tips[i]);
}
// console.log(bills);
// console.log(tips);
// console.log(totals);

// BMI Challenge:

let mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        return this.mass / this.height ** 2;
    }
}

let john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        return this.mass / this.height ** 2;
    }
}

if (mark.calcBMI() > john.calcBMI()) {
    winner = mark
    loser = john
} else {
    winner = john
    loser = mark
}
//console.log(`${winner.fullName}'s BMI (${winner.calcBMI().toFixed(1)}) is higher than ${loser.fullName}'s (${loser.calcBMI().toFixed(1)})!`)

// Loops codding challenge

let newBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let newTips = []
let newTotals = []
for (let i = 0; i < newBills.length; i++) {
    newTips.push(calcTip(newBills[i]))
    newTotals.push(newBills[i] + newTips[i])
}
function newCalcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
//console.log(newCalcAverage(newTotals));
