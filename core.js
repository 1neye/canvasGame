import drawHero from "./modules/drawHero.js";
import isKeyPressed from "./modules/isKeyPressed.js";
import loadMatherials from "./modules/loadMatherials.js";

let canvas = document.querySelector('#canvas'),
    ctx = canvas.getContext('2d'),
    width = ctx.canvas.clientWidth,
    height = ctx.canvas.clientHeight,
    gravity = 0.5,
    keys = {
        a: false,
        d: false,
        aOrd: [],
        space: false,

    },
    hero = {
        img: new Image(),
        imgPath: './img/h.png',
        heroW: 100,
        heroH: 100,
        heroX: 10,
        heroY: canvas.height - 100,
        velocityX: 0,
        velocityY: 0,
    }



let animate = () => {
    window.requestAnimationFrame(animate)
    drawHero(canvas.width, canvas.height, ctx, hero)
    hero.velocityX = 0
    if (keys.d) hero.velocityX = 3
    else if (keys.a) hero.velocityX = -3

    if (keys.a === true, keys.d === true) {
        if (keys.aOrd[keys.aOrd.length - 1] === 'KeyD') {
            keys.d = true
            keys.a = false
        }
        else {
            keys.d = false
            keys.a = true
        }
    }
}

let init = async () => {
    isKeyPressed(keys)
    await loadMatherials(hero.img, hero.imgPath)
    animate()
}
init()
