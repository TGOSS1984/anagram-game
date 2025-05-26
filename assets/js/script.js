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

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    let gameWords = [], usedSets = [], score = 0, round = 0;
    let baseWord = "", currentAnswers = [];
