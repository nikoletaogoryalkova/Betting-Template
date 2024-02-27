
const leftSidebar = document.getElementById('leftSidebar');
const rightSidebar = document.getElementById('rightSidebar');
const overlay = document.getElementById('overlay');

// Left Sidebar Open/Close
function openLeftSidebar() {
  leftSidebar.classList.remove('closed-left');
  leftSidebar.classList.add('opened-left');
  overlay.classList.add('overlay');
  document.body.style.overflow = "hidden";
}

function closeLeftSidebar() {
  leftSidebar.classList.remove('opened-left');
  leftSidebar.classList.add('closed-left');
  overlay.classList.remove('overlay');
  document.body.style.overflow = "auto";
}

// Right Sidebar Open/Close
function openRightSidebar() {
  rightSidebar.classList.remove('closed-right');
  rightSidebar.classList.add('opened-right');
  overlay.classList.add('overlay');
  document.body.style.overflow = "hidden";
}

function closeRightSidebar() {
  rightSidebar.classList.remove('opened-right');
  rightSidebar.classList.add('closed-right');
  overlay.classList.remove('overlay');
  document.body.style.overflow = "auto";
}

