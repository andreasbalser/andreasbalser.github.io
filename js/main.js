document.onmousemove = function (e) {

  if (e.clientY + document.documentElement.scrollTop < window.innerHeight)
    interactiveButton_animation(e);
  else {
    resetAnimation();
  }
}

document.onmouseout = function () {
  resetAnimation();
}

let offset = [0, 0];

function interactiveButton_animation(e) {
  const button = document.getElementById("interactive-button");
  const button_box = button.getBoundingClientRect();
  const positionCurrent = [
    button_box.left + button_box.width / 2 + document.documentElement.scrollLeft,
    button_box.top + button_box.height / 2 + document.documentElement.scrollTop,
  ]

  const header_box = document.getElementById("header").getBoundingClientRect();
  const positionInitial = [
    header_box.left + header_box.width / 2 + document.documentElement.scrollLeft,
    header_box.bottom + document.documentElement.scrollTop - 50,
  ]

  const positionCursor = [e.clientX, e.clientY];


  const distanceToInitial = Math.sqrt(
    Math.pow(positionInitial[0] - positionCursor[0], 2) + Math.pow(positionInitial[1] - positionCursor[1], 2)
  );
  const distanceToCurrent = Math.sqrt(
    Math.pow(positionCurrent[0] - positionCursor[0], 2) + Math.pow(positionCurrent[1] - positionCursor[1], 2)
  );

  let offsetDistance;
  if (distanceToInitial < 200) {
    offsetDistance = distanceToInitial;
  } else {
    offsetDistance = Math.max(0, (700 / distanceToInitial - 1) * 50 + 50);
  }

  offset = [
    - (positionInitial[0] - positionCursor[0]) / distanceToInitial * offsetDistance,
    - (positionInitial[1] - positionCursor[1]) / distanceToInitial * offsetDistance,
  ];

  button.style.left = "" + offset[0] + "px";
  button.style.top = "" + (offset[1] + 50) + "px";
}

function resetAnimation() {
  const button = document.getElementById("interactive-button");

  button.style.top = "50px";
  button.style.left = "0px";
}
