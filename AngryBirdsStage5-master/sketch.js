/*-in java script a var holds different types of data
 String: These aresequences of charactersstored inside quotes.
- Number: Anymathematical number.
- Boolean values: True and false values.
- Null: It means nothing or empty.
- Undefined: It means that no valuehas been assigned to a variable
Examples- of Diff. Var-
 STRING:
var string = "This is a STRING.";
console.log(string);

//NUMBERS:
var num = 10;
console.log(num);

//BOOLEAN: true / false
var b = true;
console.log(b);

//UNDEFINED:
var object;
console.log(object);

//Reassiging the same undefined object to null
//NULL:
var object = null;
console.log(object);

//Examples on ARRAY
//array holding the same data type
var a = [1,2,3,4,5,6,7,8,9,0];
console.log(a);

//array holding the different data type
var aa =  ["name", 1232343, true];
console.log(aa);

//array holding the array
var c = [ [1,2], ["name","roll.no."], [true,false], [5,6],[7,8,9] ]
console.log(c[4][1]);*/

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var gamestate = "onsling";
var score = 0

function preload() {
    bkg = loadImage("sprites/bg.png");
    time();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    if(bkg){
    background(bkg);}
    textSize(25);
    text("score "+ score,1000,50);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    //if(gamestate!=="launched"){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
 // }
}


function mouseReleased(){
    slingshot.fly();
    gamestate = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        bird.trajectory = [];
        Matter.Body.setPosition(bird.body,{x:200,y:50})
        slingshot.attach(bird.body)
    }   
}

async function time(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJson = await response.json();
    console.log(responseJson.datetime);
    var datetime = responseJson.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour)
    if(hour >= 06&& hour <= 17){
        bg = "sprites/bg.png"
    } else{
        bg = "sprites/bg2.jpg"  
    }

    bkg = loadImage(bg);
}