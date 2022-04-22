leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.poseNet(video,modelloaded);
    classifier.on('pose',gotresult);
}

function draw(){
    image(video,0,0);
    fill("red");
    circle(leftwristx,leftwristy,30);
    circle(rightwristx,rightwristy,30);
}

function preload(){
    music = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}

function playbg(){
    music.play();
    document.getElementById("play").style.display = "none";
    document.getElementById("stop").style.display = "inline-block";
}

function stopbg(){
    music.stop();
    document.getElementById("play").style.display = "inline-block";
    document.getElementById("stop").style.display = "none";
}

function modelloaded(){
    console.log("Model Was Successfuly Loaded");
}

function gotresult(result){

    if(result.length>0){
        console.log(result);
        leftwristx = result[0].pose.leftWrist.x;
        leftwristy = result[0].pose.leftWrist.y;
        rightwristx = result[0].pose.rightWrist.x;
        rightwristy = result[0].pose.rightWrist.y;
    }
}