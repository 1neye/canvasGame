import applyGravity from "./modules/applyGravity.js";
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
        heroX: 200,
        heroY: canvas.height - 100,
        velocityX: 0,
        velocityY: 0,
    },
    linePos = [
        [
            82,
            706,
            82,
            429
        ],
        [
            961,
            682,
            961,
            444
        ],
        [
            366,
            581,
            655,
            581
        ]
    ],
    mouse = {
       x: null,
       y: null
    }



let animate = () => {
    window.requestAnimationFrame(animate)
    drawHero(canvas.width, canvas.height, ctx, hero)

    ctx.rect(mouse.x, mouse.y, 50, 50)
    ctx.fill();
    applyGravity(hero, gravity)
    // drawLines(ctx, [0, 600, 600,600])

    if(keys.shift) {
        canvas.removeEventListener('click', SomeFunc)
        } else {
            canvas.addEventListener('click', SomeFunc)
        }

    // console.log(collision(hero.heroX, hero.heroY, hero.heroW, hero.heroH, 0, 600, 600, 10))
    linePos.map((e, idx) => {
        if(collision(
            hero.heroX, hero.heroY, hero.heroW, hero.heroH,
            e[0], e[1], e[2] - e[0], e[3] - e[1]
        )) {
            console.log(collision(
                hero.heroX, hero.heroY, hero.heroW, hero.heroH,
                e[0], e[1], e[2] - e[0], e[3] - e[1]
            ))
        }
            drawLines(ctx, [e[0], e[1], e[2], e[3]], mouse.x, mouse.y, keys.shift, canvas, linePos, idx)
    })

    console.log(linePos)

    let checkForHorizontalCollision = () => {
        console.log(hero.velocityY)

        for(let i = 0; i < linePos.length; i++ ) {
            let line = linePos[i]

            if(collision(
                hero.heroX, hero.heroY, hero.heroW, hero.heroH,
                line[0], line[1], line[2] - line[0], 10,
            )) {
                if(hero.velocityY > 0) {
                    hero.velocityY = 0
                    hero.heroY = line[1] - hero.heroH
                }
                if(hero.velocityY < 0) {
                    hero.velocityY = 0
                    hero.heroY = line[1] + 10    

                }
            }
        }

        linePos.forEach(e => {
            if(collision(
                hero.heroX, hero.heroY, hero.heroW, hero.heroH,
                e[0], e[1], e[0] - e[2], 10,
            )) {
                console.log('d')
                if(hero.velocityY > 0) {
                    hero.velocityY = 0
                    hero.heroY = e[1] 
                }
                if(hero.velocityY < 0) {
                    hero.velocityY = +hero.velocityY 
                    hero.heroY = e[1] + 10

                }
            }
        })
    }
    checkForHorizontalCollision()
    
    let checkForVerticalCollision = () => {

        for(let i = 0; i <linePos.length; i++) {
            const line = linePos[i]

            if(collision(
                hero.heroX, hero.heroY, hero.heroW, hero.heroH,
                line[0], line[1], 10  , line[1] - line[3]
            )) {

                if(hero.velocityX > 0) {
                hero.velocityX = 0

                    hero.heroX = line[0] - hero.heroW - 5
                } 

                if(hero.velocityX < 0) {
                    hero.heroX = line[0] + 10
                }

        }
        }
    }
    checkForVerticalCollision()

    hero.velocityX = 0
    if (keys.d) hero.velocityX = 8
    else if (keys.a) hero.velocityX = -8

    if(keys.space && hero.velocityY === 0) hero.velocityY = -10

    if(canvas.height < hero.heroH + hero.velocityY + hero.heroY ) {
        hero.velocityY = -gravity        
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