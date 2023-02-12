import drawHero from "./modules/drawHero.js";
import drawLines from "./modules/drawLines.js";
import isKeyPressed from "./modules/isKeyPressed.js";
import loadMatherials from "./modules/loadMatherials.js";

let canvas = document.querySelector('#canvas'),
    ctx = canvas.getContext('2d'),
    width = ctx.canvas.clientWidth,
    height = ctx.canvas.clientHeight,
    gravity = 0.3,
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
    },
    mousePos = {
        mouse1: [],
        mouse2: []
    }



let animate = () => {
    window.requestAnimationFrame(animate)
    drawHero(canvas.width, canvas.height, ctx, hero)
    // drawLines(canvas, ctx, mousePos)
    hero.velocityX = 0
    if (keys.d) hero.velocityX = 3
    else if (keys.a) hero.velocityX = -3

    if(keys.space && Math.floor(hero.heroH + hero.velocityY + hero.heroY) === canvas.height) hero.velocityY = -10

    if(canvas.height > hero.heroH + hero.velocityY + hero.heroY) {
        hero.velocityY += gravity 
    } 
    else {
        hero.velocityY = 0
    }

    if (keys.a === true, keys.d === true) {
        if (keys.aOrd[keys.aOrd.length - 1] === 'KeyD') {
            keys.d = true
            keys.a = false
        }
        else if(keys.aOrd[keys.aOrd.length - 1] === 'KeyA') {
            keys.d = false
            keys.a = true
        }
    }


    if(mousePos.mouse2.length === 2) {
        ctx.beginPath();
            ctx.moveTo(mousePos.mouse1[0], mousePos.mouse1[1]);
            ctx.lineTo(mousePos.mouse2[0], mousePos.mouse2[1]);
            ctx.stroke();
    }
}

let init = async () => {
    isKeyPressed(keys)
    await loadMatherials(hero.img, hero.imgPath)
    animate()
    
    
}
init()





canvas.addEventListener("click", function (evt) {
    var getMousePosVar = getMousePos(canvas, evt);
    if(mousePos.mouse1.length === 0) {
        mousePos.mouse1.push(...[getMousePosVar.x, getMousePosVar.y])
    } else {
        if(mousePos.mouse2 <= 1) {
            mousePos.mouse2.push(...[getMousePosVar.x, getMousePosVar.y])
        }
        
    }

    console.log(mousePos)
})

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}