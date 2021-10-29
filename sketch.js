/* Assignment_03
"Digital collage:
Mix images, data, sounds and generative graphics 
to create a dynamic artwork"


Idea
Through the use of data, a random mood will answer the question on the phone, 
and if any key is pressed different ringtones can be heard and can be changed.


Songs:
1: Call Me, Blondie
2: Telephone, Lady Gaga ft. Beyoncé 
3: Call Me Maybe, Carly Rae Jepsen

*/

//  Declaring variables
let img1;
let img2;

let song1;
let song2;
let song3;
let counter = 0;

let value = 0;
let size;
let mood = [];

//  Preload assets, sound, data and images
function preload() {
  song1 = loadSound("./assets/sound1.mp3");
  song2 = loadSound("./assets/sound2.mp3");
  song3 = loadSound("./assets/sound3.mp3");
  data = loadJSON("./assets/moods.json");
  img1 = loadImage("./assets/closed.jpg");
  img2 = loadImage("./assets/open.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  textAlign(CENTER);
  mood = data.moods; // informations from the JSON

  textSize(90);

  title = createP("HEY! HOW ARE YOU TODAY?");
  title.position(windowWidth / 2 - 125, 20);
  istruzioni = createP("press any key to listen the ringtone and change it");
  istruzioni.position(windowWidth / 2 - 250, windowHeight - 50);

  textFont("IBM Plex Mono");

  imageMode(CENTER);

  image(img1, windowWidth / 2, windowHeight / 2, 200, 438);
}

function mouseClicked() {
  background(255, 255, 255);
  image(img2, windowWidth / 2, windowHeight / 2, 192, 626);
  if (value == 0) {
    fill(0, 255, 0); //color of moods
    tilf = int(random(0, mood.length));
    text(mood[tilf], mouseX, mouseY); //random mood appear in x and y position of the click
  }
}

//switch songs
function keyPressed() {
  if (counter == 0) {
    song1.loop();
    counter++; // implement the counter to change song
  } else if (counter == 1) {
    song1.stop();
    song2.loop();

    counter++;
  } else if (counter == 2) {
    song2.stop();
    song3.loop();
    counter++;
  } else {
    song3.stop();
    counter = 0;
  }
}
