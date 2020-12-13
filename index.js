var inputVar = require("readline-sync");
var chalk = require("chalk");
var score = 0;

console.log(chalk.bold.rgb(255,255,0)("WELCOME TO THE STAR WARS QUIZ"));

console.log(chalk.bold.rgb(0,255,0)("------------------------------"));

console.log(chalk.red("Initialising..."));

for (var i=0 ; i<10 ; i++){
  console.log("-")
}

console.log(chalk.red("Initialisation Complete !\n"));
console.log(chalk.bold.rgb(0,255,0)("WELCOME ABOARD!\n"));

var username = inputVar.question(chalk.black.bgWhite.bold("May I have your name Trooper? :\n" ));
console.log("\n");
console.log(chalk.red.bgWhite.bold("Welcome "+ chalk.red.bgWhite.bold(username) + " Let's Begin \n"));


console.log(chalk.bold.rgb(0,255,0)("----------------------------"));


function play(q,a){

  var userAnswer = inputVar.question(q);

  if(userAnswer == a){

    console.log(chalk.green("wow! Trooper You're right!"));
    score++;

  }else{

    console.log(chalk.red("I'm afraid Trooper that's wrong."));
    
  }
  console.log(chalk.cyan('-------------------------------'))

}

var gameques = [
  {
    q: `What happened to Anakin Skywalker during the battle with Count Dooku?
      a: He lost his left leg
      b: He lost his right arm
      c: He lost his right leg
      d: He lost\n`,
    a: "b",
  },
  {
    q: `What did Luke Skywalker lose in his fight with Darth Vader?
      a: His left hand
      b: His left foot
      c: His right hand
      d: His left leg\n`,
    a: "c",
  },
  {
    q: `According to the Emperor, what was Luke Skywalker’s weakness?
      a: His faith in the Light Side of the Force
      b: His faith in his friends
      c: His lack of vision
      d: His resistance to the Dark Side of the Force\n`,
    a: "b",
  },
  {
    q: `Where did the Clone Wars begin?
      a: Tatooine
      b: Geonosis
      c: Naboo
      d: Coruscant\n`,
    a: "b",
  },
  {
    q: `Which Star Wars film has this quote: “I’ve been in this fight since I was six years old!”
      a: Star Wars: A New Hope
      b: Star Wars: The Rise of Skywalker
      c: Rogue One: A Star Wars Story
      d: Solo: A Star Wars Story\n`,
    a: "c",
  },
  {
    q: `What is Chewbacca’s weapon of choice?
      a: Blaster rifle
      b: Lightsaber
      c: Metal club
      d: Bowcaster\n`,
    a: "d",
  },
  {
    q: `What’s the name of the spiky-headed Sith Lord holding a cool double-blade lightsaber?
      a: Darth Vader
      b: Darth Maul
      c: Darth Paul
      d: kylo Ren\n`,
    a: "b",
  },
  {
    q: `When we see him again in The Force Awakens, after many years galavanting around the galaxy with Han Solo, how old is Chewbacca?
      a: Under 55 years
      b: 78 years old
      c: 200 years old on the dot
      d: Over 220 years\n`,
    a: "d",
  },
  {
    q: `Which Star Wars film has this quote: “I don’t like sand.”
      a: Star Wars: A New Hope
      b: Star Wars: Attack of the Clones
      c: Star Wars: The Force Awakens
      d: Star Wars: The Rise of Skywalker\n`,
    a: "b",
  },
  {
    q: `What are the creatures, living on Endor, that helped the Rebel’s to defeat the second Death Star?
      a: Ewoks
      b: Wookies
      c: Nerf Herders
      d: Jawas\n`,
    a: "a",
  },
  {
    q: `What nickname does Han Solo call Luke Skywalker that drives him crazy?
      a: Buckaroo
      b: Kid
      c: Skydancer
      d: Lukie\n`,
    a: "b",
  },
  {
    q: `Who delivers the final blow that destroys the second Death Star?
      a: Han Solo with an X-Wing
      b: Luke Skywalker with a Speeder
      c: Jar Jar Binks with a Y-Wing
      d: Lando Calrissian with the Millennium Falcon\n`,
    a: "d",
  },
  {
    q: `Who adopted Padmé Amidala’s daughter?
      a: Bail Organa
      b: Captain Antilles
      c: Owen and Beru Lars
      d: Giddean Danu\n`,
    a: "a",
  },
  {
    q: `How old was Anakin Skywalker during the battle on Genosis?
      a: 21
      b: 19
      c: 20
      d: 22\n`,
    a: "c",
  },
  {
    q: `Who says: “We are the spark that’ll light the fire that’ll burn the First Order down.”
      a: Rose Tico
      b: Poe Dameron
      c: Admiral Holdo
      d: Admiral Ackbar\n`,
    a: "b",
  },
];

var bestscore = [
  {
    name: "Vaibhav",
    score: 11,
  },
  {
    name: "Lisha",
    score: 8,
  },
  {
    name: "Tarun",
    score: 7,
  }
];

  for(var i =0 ; i<gameques.length ; i++){

    var currentQues = gameques[i];
    play(currentQues.q, currentQues.a);

  }

  console.log(chalk.white("THANKS FOR PLAYING THE GAME YOUR FINAL SCORE IS ") + chalk.green(score));

console.log(chalk.bold("\nCheck out the Best in the Galaxy :\n"));

    for(var i=0 ; i<bestscore.length ; i++){
      console.log(bestscore[i].name + " : " + bestscore[i].score);
    }
    console.log("\n");
    console.log(chalk.bgYellow("Send me a screenshot trooper if you have beaten the top ones in the Galaxy and then you shall have your name among them!"));


