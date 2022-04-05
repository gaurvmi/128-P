songDefult = "";

song_Mic = "";

song_LGO = "";

 function prload()
 {
    songDefult = "Dynamite.mp3";

 }

 function setup()
 {
     canvas = createCanvas(650, 500 );
     canvas.center();

     video = createCapture(VIDEO);
     video.hide()

     poseNet = ml5.poseNet(video, modalLoaded);
     poseNet.on('pose', gotPoses);

 }

 function gotPoses(results)
{
    if(results.length > 0)
{
    console.log(results);
    leftWristX= results[0].pose.leftWristX.x;
    leftWristY= results[0].pose.leftWristX.y;
    console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = " + rightWristX +"rightWristY = " + rightWristY);
}
}


 function modalLoaded()
    {
        console.log('PoseNet Is Intialized');
    }



 function draw()
 {
     image(video, 0, 0, 600, 600);
 }

