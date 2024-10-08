const suspectsArray = [
    "Professor Plum",
    "Miss Scarlett",
    "Colonel Mustard",
    "Mrs. Peacock",
    "Mr. Green",
    "Dr. Orchid"
];

const weaponsArray = [
    "Candlestick",
    "Dagger",
    "Revolver",
    "Lead pipe",
    "Wrench",
    "Rope",
    "Rifle",
    "Knife"
];

const roomsArray = [
    "Hall",
    "Study",
    "Ballroom",
    "Billiards room",
    "Dining room",
    "Kitchen",
    "Lounge",
    "Conservatory",
    "Library",
    "Lecture Hall"
];

function selectRandom(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function pickMystery() {
    var randomSuspect = selectRandom(suspectsArray);
    var randomWeapon = selectRandom(weaponsArray);
    var randomRoom = selectRandom(roomsArray);
    var mystery = [randomSuspect, randomWeapon, randomRoom];
    return mystery;
}

function revealMystery(mystery) {
    return `${mystery[0]} killed Mr. Marist using the ${mystery[1]} in the ${mystery[2]}.`;
}


const shuffleButton = document.getElementById("shuffleButton");
const revealButton = document.getElementById("revealButton");
const text = document.getElementById("result")
var mystery = ""

shuffleButton.addEventListener("click", function() {
    mystery = pickMystery();
    text.textContent = ""
})

revealButton.addEventListener("click", function() {
    if (mystery === "") {
        mystery = pickMystery()
    }
    text.textContent = revealMystery(mystery)
})