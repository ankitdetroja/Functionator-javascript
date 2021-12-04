let myBlock;
let funList = [];
let myfunList;
let span;

document.addEventListener("DOMContentLoaded", function () {
  myfunList = document.createElement("div");
  myfunList.style.width = "100%";
  myBlock = document.createElement("div");
  myBlock.textContent = "Let'sss Gooo";
  myBlock.style.height = "100px";
  myBlock.style.width = "100px";
  myBlock.style.color = "white";
  myBlock.style.backgroundColor = "red";
  myBlock.style.lineHeight = "100px";
  myBlock.style.textAlign = "center";
  myBlock.style.position = "absolute";
  myBlock.style.top = "100px";
  myBlock.style.left = "150px";
  document.body.appendChild(myBlock);
  document.body.appendChild(myfunList);
});

function goLeft() {
  //   let temp = myBlock.offsetLeft;
  //   temp = temp + 50;
  //   myBlock.style.left = temp + "px";
  addFun("right");
}

function goRight() {
  //   let temp = myBlock.offsetLeft;
  //   temp = temp - 50;
  //   myBlock.style.left = temp + "px";

  addFun("left");
}

function goUp() {
  // let temp = myBlock.offsetTop;
  // temp = temp - 50;
  // myBlock.style.top = temp + "px";
  addFun("up");
}

function goDown() {
  // let temp = myBlock.offsetTop;
  // temp = temp + 50;
  // myBlock.style.top = temp + "px";
  addFun("down");
}

function randomColor() {
  return "#" + Math.random().toString(16).substr(-6);
}

function addFun(val) {
  span = document.createElement("span");
  span.innerText = "+" + val;
  span.style.padding = "10px";
  span.style.border = "1px solid #ddd";

  myfunList.appendChild(span);

  //   span.addEventListener("mouseover", function () {
  //     span.style.backgroundColor = "red";
  //     span.style.color = "white";
  //   });
  //   span.addEventListener("mouseout", function () {
  //     span.style.backgroundColor = "white";
  //     span.style.color = "black";
  //   });

  funList.push(span);
  console.log(funList);
  console.log(myfunList);
}

function mover() {
  if (funList.length > 0) {
    myBlock.innerText = "Let'sss Gooo";
    let cur = myBlock.getBoundingClientRect();
    let fstmv = funList.shift();
    let fstmvlen = fstmv.innerText.length - 1;
    let item = fstmv.innerText.substr(1, fstmvlen);
    myfunList.removeChild(fstmv);
    console.log(item);

    if (item == "left") {
      myBlock.style.left = cur.left - 50 + "px";
    }
    if (item == "right") {
      myBlock.style.left = cur.left + 50 + "px";
    }
    if (item == "up") {
      myBlock.style.top = cur.top - 50 + "px";
    }
    if (item == "down") {
      myBlock.style.top = cur.top + 50 + "px";
    }
    setTimeout(mover, 300);
  } else {
    myBlock.innerText = "set path";
    return;
  }
}

document.addEventListener("keydown", function (e) {
  e.preventDefault();
  let keyC = e.keyCode;
  if (keyC === 37) goRight();
  else if (keyC === 38) goUp();
  else if (keyC === 39) goLeft();
  else if (keyC === 40) goDown();
  else if (keyC === 67) {
    myBlock.style.backgroundColor = randomColor();
  } else if (keyC === 13 || keyC === 32) {
    mover();
  }
});
