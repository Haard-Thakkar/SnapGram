let video;
let poseNet;
let noseX = 0;
let noseY = 0;
let eye1X = 0, eye1Y = 0, eye2X = 0, eye2Y = 0;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
  // console.log(poses);
  if (poses.length > 0) {
    noseX = poses[0].pose.keypoints[0].position.x;
    noseY = poses[0].pose.keypoints[0].position.y;
    
    eye1X = poses[0].pose.keypoints[1].position.x;
    eye1Y = poses[0].pose.keypoints[1].position.y;
    
    eye2X = poses[0].pose.keypoints[2].position.x;
    eye2Y = poses[0].pose.keypoints[2].position.y;
  }
}

function modelReady() {
  console.log('model ready');
}

function draw() {
  
  let d = dist(noseX, noseY, eye1X, eye1Y);
  image(video, 0, 0);

  fill(255, 0, 0);
  ellipse(noseX, noseY, d-5);
  
//   eye(eye1X, eye1Y, d-10, 1);
//   eye(eye2X, eye2Y, d-10, -1);
}

// function eye(x, y, size, n) {
// 	let angle = frameCount * 0.2;
	
// 	fill(255);
// 	noStroke();
// 	ellipse(x, y, size, size);
	
// 	fill(56);
// 	noStroke();
// 	ellipse(x+cos(angle*n)*size/5, y+sin(angle*n)*size/5, size/2, size/2);
// }

function switch_page() {
    window.location = "index.html";
}

function take_snapshot() {
  save("myFilterImage.jpg");
}