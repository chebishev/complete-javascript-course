// Remember, we're gonna use strict mode in all scripts now!
'use strict';
 
// temperatures coding challenge:

function printForecast(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `...${arr[i]}°C in ${i + 1} days...`;
  }
  //console.log(str);
}
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
