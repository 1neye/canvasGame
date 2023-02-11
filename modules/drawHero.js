

let drawHero = (canvasWidth, canvasHeight, ctx, hero) => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(hero.img, hero.heroX += hero.velocityX, hero.heroY += hero.velocityY, hero.heroW, hero.heroH)

    console.log(hero.heroX)
}

export default drawHero