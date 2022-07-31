
const character = {
    name: "Jon Doe",
    gender: "M" ,
    profession: "Hacker",

    strength: 1,
    dexterity: 1,
    stamina: 1,

    presence: 1,
    manipulation: 1,
    composure: 1,

    intelligence: 1,
    wits: 1,
    resolve: 1,

    mental_skills: {
        academics: 0,
        computer: 0,
        crafts: 0,
        investigation: 0,
        medicine: 0,
        occult: 0,
        politics: 0,
        science: 0,
    },

    physical_skills: {
        athletics: 0,
        brawl: 0,
        drive: 0,
        firearms: 0,
        larceny: 0,
        stealth: 0,
        survival: 0,
        weaponry: 0,
    },

    social_skills: {
        animal_ken: 0,
        empathy: 0,
        expression: 0,
        intimidation: 0,
        persuation: 0,
        socialise: 0,
        streetwise: 0,
        subterfuge: 0,
    },

    health: 0,
    willpower: 0,
    morality: 7,

    defence: 0,
    armor: 0,
    ini: 0,
    experince: 0
}

document.getElementById("name").innerHTML = character.name;

document.getElementById("gender").innerHTML = character.gender;

document.getElementById("profession").innerHTML = character.profession;


document.getElementById("strength").innerHTML = character.strength;
document.getElementById("dexterity").innerHTML = character.dexterity;
document.getElementById("stamina").innerHTML = character.stamina;

document.getElementById("presence").innerHTML = character.presence;
document.getElementById("manipulation").innerHTML = character.manipulation;
document.getElementById("composure").innerHTML = character.composure;

document.getElementById("intelligence").innerHTML = character.intelligence;
document.getElementById("wits").innerHTML = character.wits;
document.getElementById("resolve").innerHTML = character.resolve;


character.health = character.stamina + 4;
document.getElementById("health").innerHTML = character.health;

character.willpower = character.composure + character.resolve;
document.getElementById("willpower").innerHTML = character.willpower;
