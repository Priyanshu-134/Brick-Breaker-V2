var ball_x, ball_y, ball_diameter, ball_dx, ball_dy;
var paddle_x, paddle_y, paddle_width,l, paddle_height, paddle_dx;
var b_height, bwidth, b1_x, b1_y;

function setup() {
  createCanvas(400, 400);
  background("black");


  paddle_height = 20;
  l=70;
  paddle_width = l;
  paddle_x = width / 2 - paddle_width / 2;
  paddle_y = height - 20;
  paddle_dx = 4;

  ball_x = paddle_x + paddle_width / 2;
  ball_y = paddle_y - 2;
  ball_diameter = 25;
  ball_dx = 0;
  ball_dy = 0;
  circle(ball_x, ball_y, ball_diameter);
  // b1_height = 15;
  // b_width = 50;
  // b1_x = 40;
  // b1_y = 40;
  //  let fail=0;

  //   for (let j = 0; j < bricks.length; j++) {
  //     var b = bricks[j];
  //     rect(b.posX, b.posY, b.width, b.height);
  //}

  //   let box =[
  //     {
  //       "x": 40
  //       "y": 40
  //       "h": 15
  //       "w": 50
  //     }
  //     {
  //       "x": 100
  //       "y": 40
  //       "h": 15
  //       "w": 50
  //     }
  //     {
  //       "x": 160
  //       "y": 40
  //       "h": 15
  //       "w": 50
  //     }
  //     {
  //       "x": 220
  //       "y": 40
  //       "h": 15
  //       "w": 50
  //     }

  //   ]
}
let bricks = [];
let x = 25;
let y = 50;
for (let i = 0; i < 25; i++) {
  
  bricks[i] = {};
  bricks[i].id = i;
  bricks[i].status = true;
  bricks[i].Xcod = x;
  bricks[i].Ycod = y;
  bricks[i].height = 20;
  bricks[i].width = 60;
  x += 70;
  if (bricks.length % 5 == 0) {
    x = 25;
    y += 25;
  }
  
  //rect( bricks[i].Xcod, bricks[i].Ycod, bricks[i].width, bricks[i].height)
}
var g=0;
function keyPressed() {
    if(g<1){
    if (keyCode === 32) {
      ball_dx=(3);
      ball_dy=(4);
      g= g+1;
    }}
    }

function draw() {
  background("black");
  circle(ball_x, ball_y, ball_diameter);
  rect(paddle_x, paddle_y, paddle_width, paddle_height);
  stroke("yellow");
  //rect(b1_x, b1_y, b_width, b1_height)



  //making bricks
  for (let j = 0; j < bricks.length; j++) {
    //rect(bricks[j].Xcod, bricks[j].Ycod, bricks[j].width, bricks[j].height);
    
    if(bricks[j].id== 12){
      fill("blue")
      // textSize(32)
      // timeDelay(0.2)
      // text('blue',40,40)
      rect(bricks[j].Xcod, bricks[j].Ycod, bricks[j].width, bricks[j].height);
      fill("white")
    }
    else{
      rect(bricks[j].Xcod, bricks[j].Ycod, bricks[j].width, bricks[j].height);
    }
  }
  
  if (bricks[Math.floor(bricks.length/2)].status == false){
    paddle_width = 35
    rect(paddle_x, paddle_y, paddle_width, paddle_height);
    //console.log("hi")
  }
  else{
    rect(paddle_x, paddle_y, paddle_width, paddle_height);
  }
  

  ball_x += ball_dx;
  ball_y += ball_dy; // y direction opposite
  if (ball_x + ball_diameter / 2 >= width) {
    ball_dx = -ball_dx;
  }
  if (ball_x - ball_diameter / 2 <= 0) {
    ball_dx = -ball_dx;
  }
  let k = 0;
  for (let i = 0; i < bricks.length; i++) {
    if (bricks[i].height == 0) {
      k += 1;
    }
    if (k == bricks.length) {
      // textSize(32);
      // fill("green");
      // text("You Win", 130, 250);
      ball_dy = 0;
      ball_dx = 0;
      paddle_dx = 0;
      ball_diameter = 0;
      paddle_height =0;
      paddle_width = 0;
    }
    
  }
  if (k==bricks.length){
    textSize(32);
    fill("green");
    text("You Win", 130, 200);
    textSize(20)
    text("Refresh to play again", 100, 260)
    timeDelay(0.2);
  }

  if (ball_y + ball_diameter / 2 >= height && k != bricks.length) {
    ball_dy = 0;
    ball_dx = 0;
    paddle_dx = 0;

    //fill('yellow')

    textSize(32);
    // text('You Loose', 200, 200);
    fill("red");
    text("You Loose", 130, 250);
    textSize(20)
    text("Refresh to play again", 180, 30)
    //fill();
    text("Score : " + k, 10, 30);

    //text("You Loose",300,300);
    timeDelay(0.2);

    //ball_dy = -(ball_dy)
  }

 

  if (ball_y - ball_diameter / 2 <= 0) {
    ball_dy = -ball_dy;
  }

  if (keyIsDown(RIGHT_ARROW) && paddle_x + paddle_width < width &&  g==0 ){
    paddle_x += paddle_dx;
    ball_x = paddle_x + paddle_width/2

  }

  if (keyIsDown(RIGHT_ARROW) && paddle_x + paddle_width < width){
    paddle_x += paddle_dx;}

  if (keyIsDown(LEFT_ARROW) && paddle_x > 0 && g==0) {
    paddle_x -= paddle_dx;
    ball_x = paddle_x + paddle_width/2

  }
  if (keyIsDown(LEFT_ARROW) && paddle_x > 0) {
    paddle_x -= paddle_dx;
  }
  if (
    ball_y + ball_diameter / 2 >= height - paddle_height &&
    ball_x + ball_diameter / 2 > paddle_x &&
    ball_x - ball_diameter / 2 < paddle_x + paddle_width
  ) {
    ball_dy = -ball_dy;
    ball_y = paddle_y - ball_diameter/2 -1
    //ball_dx = -(ball_dx)
  }
  //     if(((ball_y - ball_diameter/2) <= b1_y || ball_y - ball_diameter/2 <= b1_height + b1_y )  && (ball_x + ball_diameter/2 > b1_x) && (ball_x- ball_diameter/2 < b1_x + b_width)) {
  //       ball_dy = -(ball_dy)
  //       b1_height = 0
  //       b_width = 0

  //      }

  // if (ball_y > b1_y + b1_height) {
  //   if (
  //     ball_y - ball_diameter / 2 <= b1_y + b1_height &&
  //     ball_x + ball_diameter / 2 > b1_x &&
  //     ball_x - ball_diameter / 2 < b1_x + b_width
  //   ) {
  //     ball_dy = -ball_dy;
  //     b1_height = 0;
  //     b_width = 0;
  //     b1_x = 10000;
  //     b1_y = 10000;
  //   }
  // }
  // if (ball_y < b1_y) {
  //   if (
  //     ball_y + ball_diameter / 2 >= b1_y &&
  //     ball_x + ball_diameter / 2 > b1_x &&
  //     ball_x - ball_diameter / 2 < b1_x + b_width
  //   ) {
  //     ball_dy = -ball_dy;
  //     b1_height = 0;
  //     b_width = 0;
  //     b1_x = 10000;
  //     b1_y = 10000;
  //   }
  // }

  // let bricks = []
  //   let x = 25;
  //   let y = 10;
  //   for (let i = 0; i < 30; i++) {
  //       bricks[i] = {}
  //       bricks[i].Xcod = x;
  //       bricks[i].Ycod = y;
  //       bricks[i].height = 20;
  //       bricks[i].width = 60;
  //       x += 70;
  //       if (bricks.length % 5 == 0) {
  //           x = 25
  //           y += 25;
  //       }
  //       rect( bricks[i].Xcod, bricks[i].Ycod, bricks[i].width, bricks[i].height)
  //   }

  for (j = 0; j < bricks.length; j++) {
    if (ball_y + ball_diameter/2 > bricks[j].Ycod + bricks[j].height) {
      if (
        ball_y - ball_diameter / 2 <= bricks[j].Ycod + bricks[j].height &&
        ball_x + ball_diameter / 2 > bricks[j].Xcod &&
        ball_x - ball_diameter / 2 < bricks[j].Xcod + bricks[j].width
      ) {
        ball_dy = -ball_dy;
        bricks[j].height = 0;
        bricks[j].width = 0;
        bricks[j].status = false;
        bricks[j].Xcod = 10000;
        bricks[j].Ycod = 10000;
        //console.log(bricks[j].id)
        //console.log(bricks[j].status)
      }
    }
    if (ball_y - ball_diameter/2 < bricks[j].Ycod) {
      if (
        ball_y + ball_diameter / 2 >= bricks[j].Ycod &&
        ball_x + ball_diameter / 2 > bricks[j].Xcod &&
        ball_x - ball_diameter / 2 < bricks[j].Xcod + bricks[j].width
      ) {
        ball_dy = -ball_dy;
        bricks[j].height = 0;
        bricks[j].width = 0;
        bricks[j].Xcod = 10000;
        bricks[j].Ycod = 10000;
      }
    }
  }

  // k = 0;
  // for (let i = 0; i < bricks.length; i++) {
  //   if (bricks[i].height == 0) {
  //     k += 1;
  //   }
  //   if (k == bricks.length) {
  //     // textSize(32);
  //     // fill("green");
  //     // text("You Win", 130, 250);
  //     ball_dy = 0;
  //     ball_dx = 0;
  //     paddle_dx = 0;
  //   }
    
  // if (k==bricks.length){
  //   textSize(32);
  //   fill("green");
  //   text("You Win", 130, 250);
  // }

}
