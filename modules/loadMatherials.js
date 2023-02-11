let loadMatherials = (img, imgPath) => {
    return new Promise((resolve, reject) => {
        img.src = imgPath
        img.onload = () => {
            resolve();
        }
    })

}

export default loadMatherials