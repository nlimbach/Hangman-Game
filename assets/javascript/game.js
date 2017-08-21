

    var wins = 0;
    var guesses;
    var wordArray = ["television", "couch","light", "lotion", "cupboard", "baseball", "restaurant", "dragon", "thrones", "queen", "grinder"];
    var currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];

    var currentWordLength = currentWord.length;
    var guess = "Guesses: ";
    var hyphenLoc = document.getElementById("placeholder");



    console.log(currentWord);
    console.log(currentWordLength);


    //populates correct number of underscores based on the random word chose
     var locLast =  "_ ";
      for(var i = 1; i < currentWordLength; i++) {
           locLast =  locLast + "_ ";
    }
    hyphenLoc['textContent'] = locLast;


    document.onkeyup = function(event) {
        var userGuess = event.key;

        //Add user guesses to guess bank
        var guessLoc= document.getElementById("guesses");


        guess = guess + userGuess ;
        guessLoc['textContent'] = guess ;
    }