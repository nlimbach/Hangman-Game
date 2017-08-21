
    var guess = "";
    var wins = 0;
    var underscores = ["_ "];
    var wordArray = ["television", "couch","light", "lotion", "cupboard", "baseball", "restaurant", "dragon", "thrones", "queen", "grinder"];
    var currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];

    var currentWordLength = currentWord.length;

    var hyphenLoc = document.getElementById("placeholder");



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

        //Only add guess to gueses if it doesn't already exist
        if (currentWord.indexOf(userGuess) >=0 )
        {
            //update underscore to contain letter
            console.log(currentWord.indexOf(userGuess));

            underscores[currentWord.indexOf(userGuess)] = userGuess;

            hyphenLoc['textContent'] = underscores.join(" ");
        }
        else {
            //letter does not exist in word - update guess bank
            if (guess.indexOf(userGuess) >= 0) {
                alert("You already guessed " + userGuess);
            }

            else {
                guess = guess + " " + userGuess;
            }
            guessLoc['textContent'] = guess;

        }

    }