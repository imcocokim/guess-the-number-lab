const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses:[], 
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
    (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    do {
      this.render()
      this.prevGuesses.push(this.getGuess())
    } while 
    (this.prevGuesses[this.prevGuesses.length -1] !== this.secretNum)
  },
  getGuess: function() {
    let guess
    while(!guess || guess > this.biggestNum || guess < this.smallestNum) {
      guess = parseInt(prompt(`Enter a number between ${this.smallestNum} and ${this.biggestNum}`))
      if (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum) {
      alert('This is not a valid entry')
      }
    }
    return guess
  },

  render: function() {
    if (this.secretNum === this.prevGuesses[this.prevGuesses.length - 1]) {
      alert(`Congrats! You guessed the number in ${this.prevGuesses.length}`)
      return
    } else if (this.secretNum > this.prevGuesses[this.prevGuesses.length - 1]){
        alert(`Your guess is too low. Previous guesses: ${game.prevGuesses}`)
    } else if (this.secretNum < this.prevGuesses[this.prevGuesses.length - 1]){
      alert(`Your guess is too high. Previous guesses: ${game.prevGuesses}`)
    }
  }
}
game.play()
//add getGuess method to game that prompts player to enter a guess with a message formatted as: Enter a guess between [smallestNum] and [biggestNum]. Hint - use a template literal for the prompt message.

//Ensure that the `getGuess` method returns a value that:
// - Is a *number*, not a *string*.
// - Is between `smallestNum` and `biggestNum`, inclusive.
// - Hints:
//     - This is a great use case for a `while` loop.
//     - `parseInt` returns `NaN` if the string cannot be parsed into a number.


//From within the `play` method, invoke the `getGuess` method from inside a loop, and add the new guess to the `prevGuesses` array.
// - Hint: this is an excellent use for a while loop (or even a do...while loop!)

// Add a `render` method to `game` that `play` will call after a guess has been made that alerts:
//     - If the secret has been guessed: `Congrats! You guessed the number in [number of prevGuesses]!`
//     - Otherwise: `Your guess is too [high|low] Previous guesses: x, x, x, x`
//     - Hints:
//         - `render` won’t be able to access any of `play`’s local variables, e.g., `guess`, so be sure pass `render` any arguments as needed (you may not have built your program to use any, that's ok if that's the case!)
//         - Template literals not only have interpolation, but they also honor whitespace - including line breaks!
//         - The list of previous guesses can be generated using the array `join` method.

//The play method should end (return) when the guess matches secretNum.