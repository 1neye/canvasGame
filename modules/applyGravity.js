let applyGravity = (hero, gravity) => {
    hero.velocityY += gravity 
    hero.heroY += hero.velocityY
}

export default applyGravity