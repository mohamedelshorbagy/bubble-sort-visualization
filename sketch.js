/*
    # Mohamed Elshorbagy
    # Bubble Sorting Algorithm
    # 14 / 02 / 2018

*/


var arr =[];
let arrLength = 20
function setup() {
  createCanvas(600, 450);
  for (let i=0; i<arrLength; i++) {
    arr.push(floor(random(50)));
  }
  frameRate(3);
}
let i=0;
function draw() {
  background(51);

  for (let j=0; j<arr.length; j++) {
    if (arr[i]>arr[j]) {
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    fill(255);
    noStroke();
    text(arr[j],30+20*j+50 , 50);
    stroke(231 , 70 , 67);
    strokeWeight(2);
    line(25+20*j+10+50, 90 , 25+20*j+10+50 , 90+5*arr[j]);
  }
  i++;  
  if (i>arr.length-1) {
      noLoop();
  }
}