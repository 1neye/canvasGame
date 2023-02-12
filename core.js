import collision from "./modules/collision.js";
import drawHero from "./modules/drawHero.js";
import drawLines from "./modules/drawLines.js";
import isKeyPressed from "./modules/isKeyPressed.js";
import loadMatherials from "./modules/loadMatherials.js";
import pushLinesPos from "./modules/pushLinesPos.js";

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
        shift: false,

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
    linePos = [[]],
    mouse = {
       x: null,
       y: null
    }



let animate = () => {
    window.requestAnimationFrame(animate)
    drawHero(canvas.width, canvas.height, ctx, hero)
    // drawLines(ctx, [0, 600, 600,600])

    if(keys.shift) {
        canvas.removeEventListener('click', SomeFunc)
        } else {
            canvas.addEventListener('click', SomeFunc)
        }

    // console.log(collision(hero.heroX, hero.heroY, hero.heroW, hero.heroH, 0, 600, 600, 10))
    linePos.map((e, idx) => {
            drawLines(ctx, [e[0], e[1], e[2], e[3]], mouse.x, mouse.y, keys.shift, canvas, linePos, idx)
    })

    hero.velocityX = 0
    if (keys.d) hero.velocityX = 3
    else if (keys.a) hero.velocityX = -3

    if(keys.space && Math.floor(hero.heroH + hero.velocityY + hero.heroY) === canvas.height) hero.velocityY = -10

    if(canvas.height > hero.heroH + hero.velocityY + hero.heroY ) {
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

}

let init = async () => {
    isKeyPressed(keys)
    await loadMatherials(hero.img, hero.imgPath)
    animate()
    
    
}
init()






// canvas.addEventListener("click", function (evt) {
//     var getMousePosVar = getMousePos(canvas, evt);

//     if(linePos[linePos.length -1].length < 3) {
//         linePos[linePos.length -1].push(...[getMousePosVar.x, getMousePosVar.y])
//     } else if(linePos[linePos.length -1].length === 4) {
//         linePos.push([getMousePosVar.x, getMousePosVar.y])
//     }
//     console.log(linePos)

// })
function SomeFunc (e) {
    pushLinesPos(linePos, canvas, e, keys.shift)
}
canvas.addEventListener("click", SomeFunc)




canvas.onmousemove = function(e){
    mouse.x = e.clientX
    mouse.y = e.clientY
}