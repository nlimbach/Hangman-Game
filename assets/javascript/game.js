
    var guess = "";
    var wins = 0;
    var underscores = ["_ "];
    var wordArray = ["television", "couch","light", "lotion", "cupboard", "baseball", "restaurant", "dragon", "thrones", "queen", "grinder"];
    var currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];

    var currentWordLength = currentWord.length;
    var guessLeft = currentWordLength;

    var hyphenLoc = document.getElementById("placeholder");
    var guessesLeftLocation = document.getElementById("guessesLeft");

    var winsLocation = document.getElementById("wins");

    winsLocation['textContent'] = wins;
    guessesLeftLocation['textContent'] = guessLeft;
    console.log(currentWord);
    console.log(currentWordLength);


    //populates correct number of underscores based on the random word chose

      for(var i = 1; i < currentWordLength; i++) {
           underscores.push("_ ");
        }
        hyphenLoc['textContent'] = underscores.join(" ");


        document.onkeyup = function(event) {
            var userGuess = event.key;
            var guessLoc = document.getElementById("guesses");

          //Check if userGuess exists in current word
            if (currentWord.indexOf(userGuess) >=0 )
            {

                // If userguess exists than replace underscore with userGuess

                var userGuessIndex =currentWord.indexOf(userGuess);

                //update underscore to contain letter



                    underscores[currentWord.indexOf(userGuess)] = userGuess;

                    //output underscore array with updated userGuesses
                     hyphenLoc['textContent'] = underscores.join(" ");

                    // if userGuess occurs multiple times, replace each underscore with userGuess

                    for (var i = 1; i < count(currentWord, userGuess); i++) {
                        var wordWithoutOccurance;


                        //figure out how the fuck to do multiple
                        wordWithoutOccurance = currentWord.substr(0, userGuessIndex) + currentWord.substr(userGuessIndex + 1);


                        var findNewIndex = wordWithoutOccurance.indexOf(userGuess);

                        console.log("newIndex" + findNewIndex);
                        underscores[findNewIndex + i] = userGuess;


                        //output underscore array with updated userGuesses
                        hyphenLoc['textContent'] = underscores.join(" ");

                    }

                hyphenLoc['textContent'] = underscores.join(" ");

                if(underscores.indexOf(userGuess) < 0 ){
                    alert("you win");
                    wins++
                }

                winsLocation['textContent'] = wins;
                //end game if user guessed the word

            }

            else {
                    if (guessLeft === 1) {
                        guess = guess + " " + userGuess;
                        guessLoc['textContent'] = guess;
                        guessLeft = guessLeft - 1;
                        guessesLeftLocation['textContent'] = guessLeft;
                        alert("You lose!");
                    }

                    //letter does not exist in word - update guess bank
                    else if (guess.indexOf(userGuess) >= 0) {
                        alert("You already guessed " + userGuess);
                    }

                    else {
                        guess = guess + " " + userGuess;
                        guessLoc['textContent'] = guess;
                        guessLeft = guessLeft - 1;
                        guessesLeftLocation['textContent'] = guessLeft;


                    }


                }







        }


    //checks to see how many times character exists in string
    function count(string,char) {
        var re = new RegExp(char,"gi");
        return string.match(re).length;
    }

