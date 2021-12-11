lipX = 0;
lipY = 0;

function take_snapshot(){
    save('filter_webapp.png')
}

function preload(){
    lip_image = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup(){
    canvas = createCanvas(600, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600, 450);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 450);
    image(lip_image, lipX, lipY, 60, 60);  
}

function modelLoaded(){
    console.log("PoseNet is loaded.");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("lip x = " + results[0].pose.nose.x - 10);
        console.log("lip y = " + results[0].pose.nose.y + 10);

        lipX = results[0].pose.nose.x - 10;
        lipY = results[0].pose.nose.y + 10;
        console.log("lip x = " + lipX);
        console.log("lip y = " + lipY);
    }
}