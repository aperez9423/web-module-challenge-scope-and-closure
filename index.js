// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *  
 *    Counter 2 does not make use of a closure while counter 1 does.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 *    Counter 1 uses a closure. I can tell because the function counter 1 is referencing the inner function counterMaker. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 *    Counter 1 would be preferable if you are placed in a situation where you need to call an inner function from the global scope. Counter 2 would be preferable when you do not need to reference an inner function from the global scope.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  const points = Math.floor(Math.random() * 3);
  return points;
}

//console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, numberOfInnings){
  let homeTeam = []; 
  let awayTeam = [];
  const add = (a,b) => a + b;

  for (let i = 0; i < numberOfInnings; i++) {
    let homePoints= homeTeam.push(inning());
    let awayPoints= awayTeam.push(inning());
  } 
  
  const homeTotal = homeTeam.reduce(add);
  const awayTotal = awayTeam.reduce(add);

  return "Home: " + homeTotal + " Away: " + awayTotal;
}

console.log(finalScore(inning, 9));

  /*Code Here*/


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreBoard(inning, numberOfInnings){
  let homeTeam = []; 
  let awayTeam = [];
  const add = (a,b) => a + b;
  
  function inningTotals () {
    console.log ("1st Inning:" + homeTeam[0] + " - " + awayTeam [0]);
    console.log ("2nd Inning: " + homeTeam[1] + " - " + awayTeam[1]);
    console.log ("3rd Inning: " + homeTeam[2] + " - " + awayTeam[2]);
    console.log ("4th Inning: " + homeTeam[3] + " - " + awayTeam[3]);
    console.log ("5th Inning: " + homeTeam[4] + " - " + awayTeam[4]);
    console.log ("6th Inning: " + homeTeam[5] + " - " + awayTeam[5]);
    console.log ("7th Inning: " + homeTeam[6] + " - " + awayTeam[6]);
    console.log ("8th Inning: " + homeTeam[7] + " - " + awayTeam[7]);
    console.log ("9th Inning: " + homeTeam[8] + " - " + awayTeam[8]);
  }

  for (let i = 0; i < numberOfInnings; i++) {
    let homePoints= homeTeam.push(inning());
    let awayPoints= awayTeam.push(inning());
  } 

  const homeTotal = homeTeam.reduce(add);
  const awayTotal = awayTeam.reduce(add);

  function finalScore(inning, numberOfInnings){

    return "Final Score: " + homeTotal + " - " + awayTotal;
  }

  return inningTotals(), finalScore();
}

console.log(scoreBoard(inning, 9));
