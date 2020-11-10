//Simulates rolling a die
function rollOneDie() {
    var stringToNumber = Number(document.getElementById("dice").value);
    var rollOneDie = Math.ceil(Math.random() * stringToNumber);
    document.getElementById("diceRoll").innerHTML = rollOneDie;
}

//Simulates rolling four d6 and then adding together the highest three numbers from the roll
function rollDice() {
    var roll4Dice = [(Math.ceil(Math.random() * 6)), (Math.ceil(Math.random() * 6)),
    (Math.ceil(Math.random() * 6)), (Math.ceil(Math.random() * 6))];
    roll4Dice.sort();
    roll4Dice.shift();
    var statRoll = roll4Dice[0] + roll4Dice[1] + roll4Dice[2];
    return statRoll;
}

//Button function intended to generate ability scores based off chosen selections
function generateProfile() {
    var name = document.getElementById("name").value;
    var race = document.getElementById("race").value;
    var subrace = document.getElementById("subrace").value;
    var job = document.getElementById("job").value;
    var background = document.getElementById("background").value;

    document.getElementById("characterName").innerHTML = name;
    document.getElementById("characterRace").innerHTML = race;
    document.getElementById("characterSubrace").innerHTML = subrace;
    document.getElementById("characterJob").innerHTML = job;
    document.getElementById("characterBackground").innerHTML = background;

    document.getElementById("strength").innerHTML = rollDice();
    document.getElementById("dexterity").innerHTML = rollDice();
    document.getElementById("constitution").innerHTML = rollDice();
    document.getElementById("intelligence").innerHTML = rollDice();
    document.getElementById("wisdom").innerHTML = rollDice();
    document.getElementById("charisma").innerHTML = rollDice();
}

//Button function for adding subrace modifiers to ability scores
function addRaceModifier() {
    var raceModifier = document.getElementById("subrace").value;
    console.log(raceModifier);

    var strength = document.getElementById("strength").innerHTML;
    var dexterity = document.getElementById("dexterity").innerHTML;
    var constitution = document.getElementById("constitution").innerHTML;
    var intelligence = document.getElementById("intelligence").innerHTML;
    var wisdom = document.getElementById("wisdom").innerHTML;
    var charisma = document.getElementById("charisma").innerHTML;

    if (raceModifier === "Hill Dwarf") {
        document.getElementById("constitution").innerHTML = Number(constitution) + 2;
        document.getElementById("wisdom").innerHTML = Number(wisdom) + 1;
    } else if (raceModifier === "Mountain Dwarf") {
        document.getElementById("constitution").innerHTML = Number(constitution) + 2;
        document.getElementById("strength").innerHTML = Number(strength) + 2;
    } else if (raceModifier === "High Elf") {
        document.getElementById("dexterity").innerHTML = Number(dexterity) + 2;
        document.getElementById("intelligence").innerHTML = Number(intelligence) + 1;
    } else if (raceModifier === "Wood Elf") {
        document.getElementById("dexterity").innerHTML = Number(dexterity) + 2;
        document.getElementById("wisdom").innerHTML = Number(wisdom) + 1;
    } else {
        alert("Choose a difference subrace!")
    }
}

