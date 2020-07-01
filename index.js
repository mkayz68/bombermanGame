const child = document.getElementById("child")
const ennemies = [...document.getElementsByClassName('ennemi')];
//const ennemies2 = document.querySelectorAll('.ennemi');
//console.log(ennemies)



console.log(child)
let posY = 0
let posX = 0

document.addEventListener("keydown", function (e){
  console.log(e.keyCode)
  // en haut en bas
  if (e.key == "s") {
    if (posY === 750) {
      posY += 0;
    } else {
      posY += 50;
      console.log(posY)
    }
  }
  // gauche à droite
  if (e.key == 'd') {
    if (posX === 750) {
      posX += 0;
    } else {
      posX += 50;
      console.log(posX)
    }
  }
  // remonte
  if (e.key == 'z') {
    if (posY === 0) {
      posY += 0;
    } else {
      posY -= 50;
      console.log(posY)
    }
  }
  //
  if (e.key == 'q') {
    if (posX === 0) {
      posX += 0;
    } else {
      posX -= 50;
      console.log(posX)
    }
  }
  // revient
  if (e.key == '32') {
    console.log('X' + posX + 'Y' + posY)

    let posYN = window.getComputedStyle(child).getPropertyValue('top')
    let posXN = window.getComputedStyle(child).getPropertyValue('left')
    let explos = new Bomb(posXN, posYN)
    explos.Bomb
  }

  child.style.top = posY + 'px';
  child.style.left = posX + 'px';
  console.log(posY + 'yes')
})

// creer ma fonction pour faire bouger mes ennemis

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function bouger() {
    //console.log('je bouge');
    // boucler mes ennemis pour qu'il ai les même proprité

    console.log(random)

    ennemies.forEach(function (ennemi) {
      let random = getRandomArbitrary(0,3);
      let top = parseInt(window.getComputedStyle(ennemi).getPropertyValue('top'))
      let left = parseInt(window.getComputedStyle(ennemi).getPropertyValue('left'))

      // switch case

      switch (random) {
        case 0:
          console.log('je vais en haut')
          if (top > 0) {
            top -= 50
            ennemi.style.top = top + 'px'
          }
          break;

        case 1:
          console.log('je vais à droite')
          
          break;

        case 2:
          console.log('je vais à gauche')

          break;

        case 3:
          console.log('je vais en bas')
          break;

      }
      console.log(top)
      console.log(left)
      })
}

random = setInterval(bouger, 500);





