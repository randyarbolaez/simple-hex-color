console.log('hey');

function getCoordinates(e) {
  let xCoordinate = e.clientX;
  let yCoordinate = e.clientY;
  let title = document.querySelector('title');
  let body = document.querySelector('body');
  let h1 = document.querySelector('h1');
  title.innerHTML = `HEX-COLOR:  #${xCoordinate}${yCoordinate}`;
  body.style.background = `#${xCoordinate}${yCoordinate}`;
  h1.innerHTML = `HEX-COLOR: #${xCoordinate}${yCoordinate}`;
}
