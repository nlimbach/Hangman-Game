
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

    var guessLoc = document.getElementById("guesses");
    //populates correct number of underscores based on the random word chose

      for(var i = 1; i < currentWordLength; i++) {
           underscores.push("_ ");
        }
        hyphenLoc['textContent'] = underscores.join(" ");


        document.onkeyup = function(event) {
            var userGuess = event.key;


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

                if (underscores.indexOf("_ ") < 0 ){
                    hyphenLoc['textContent'] = underscores.join(" ");
                    wins++;
                    alert("You won! The word is " + currentWord + ". ");
                    startOver();
                }


            }

            else {
                    if (guessLeft === 1) {
                        guess = guess + " " + userGuess;
                        guessLoc['textContent'] = guess;
                        guessLeft = guessLeft - 1;
                        guessesLeftLocation['textContent'] = guessLeft;
                        alert("You lose!");
                        startOver();
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

            winsLocation['textContent'] = wins;
            //end game if user guessed the word





        }


    //checks to see how many times character exists in string
    function count(string,char) {
        var re = new RegExp(char,"gi");
        return string.match(re).length;
    }

    function startOver() {
        currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];
        guessLeft = currentWordLength;
        guessesLeftLocation['textContent'] = guessLeft;
        underscores = ["_ "];

        for (var i = 1; i < currentWordLength; i++) {
            underscores.push("_ ");
        }

        hyphenLoc['textContent'] = underscores.join(" ");
        guess = "";
        guessLoc['textContent'] = guess;
    }