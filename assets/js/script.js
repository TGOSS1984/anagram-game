 //Word Arrays
 
 const anagramSets = {
      easy: [
        ["stop", "post", "spot", "tops", "opts"],
        ["care", "race", "acre"],
        ["stone", "tones", "onset", "notes"],
        ["dusty", "study"],
        ["night", "thing"],
        ["bored", "robed"],
        ["save", "vase"],
        ["earth", "heart"],
        ["evil", "vile", "live", "veil"],
        ["listen", "silent", "enlist", "tinsel"]
      ],
      medium: [
        ["rescue", "secure", "recuse"],
        ["danger", "garden", "ranged"],
        ["caters", "caster", "reacts", "traces"],
        ["boaster", "boaters", "rebatos"],
        ["canter", "nectar", "recant", "trance"],
        ["lament", "mantle", "mental"],
        ["observe", "verbose"],
        ["admirer", "married"],
        ["senator", "treason", "atoners"],
        ["parley", "pearly", "replay"]
      ],
      hard: [
        ["conversation", "voicesranton"],
        ["debitcard", "badcredit"],
        ["listen", "silent", "enlist", "tinsel"],
        ["schoolmaster", "theclassroom"],
        ["astronomer", "moonstarer"],
        ["elevenplus", "lovesnepulu"],
        ["a gentleman", "elegant man"],
        ["funeral", "realfun"],
        ["the eyes", "they see"],
        ["slotmachines", "cashlostinme"]
      ]
    };

    //Shuffle Function

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    let gameWords = [], usedSets = [], score = 0, round = 0;
    let baseWord = "", currentAnswers = [];

    //Game Start Function

    function startGame() {
      const difficulty = document.getElementById("difficulty").value;
      const allWords = [...anagramSets[difficulty]];
      shuffleArray(allWords);
      gameWords = allWords.slice(0, 10);
      usedSets = [];
      score = 0;
      round = 0;
      document.getElementById("score").textContent = `${score}`;
      document.getElementById("feedback").textContent = "";
      document.getElementById("game").style.display = "flex";
      nextRound();
    }

    // Show base word as scrabble style tiles and update round counter

       function nextRound() {
      if (round >= 10) {
        displayTiles(["✓"]);
        document.getElementById("feedback").textContent = `Game Over! You scored ${score} out of 10.`;
        document.getElementById("round-counter").textContent = `Game complete`;
        return;
      }

      const set = gameWords[round];
      usedSets.push(set);
      baseWord = set[Math.floor(Math.random() * set.length)];
      currentAnswers = set.filter(word => word !== baseWord);
      round++;

      displayTiles(baseWord.toUpperCase().split(""));
      document.getElementById("round-counter").textContent = `Round ${round} of 10`;
      document.getElementById("guess").value = "";
      document.getElementById("guess").focus();
    }

    function displayTiles(letters) {
      const tileContainer = document.getElementById("tiles");
      tileContainer.innerHTML = "";
      letters.forEach(letter => {
        const div = document.createElement("div");
        div.className = "tile";
        div.textContent = letter;
        tileContainer.appendChild(div);
      });
    }


