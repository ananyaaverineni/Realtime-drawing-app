noseX=0
noseY=0
difference=50
leftWristX=0
rightWristY=0
function setup(){
video=createCapture(VIDEO)
video.size(600,600)
canvas=createCanvas(600,600);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
console.log("model is loaded")    
}
function gotPoses(results){
if(results.length>0){
noseX=results[0].pose.nose.x
noseY=results[0].pose.nose.y
leftWristX=results[0].pose.leftWrist.x
rightWristX=results[0].pose.rightWrist.x
difference=floor(leftWristX-rightWristX)
}
}
function draw(){
background("#dcdcdc")    
fill("#ff69b4")
stroke("white")
square(noseX,noseY,difference)
}


