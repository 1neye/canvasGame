let isKeyPressed = (keys) => {
    window.addEventListener('keyup', (e) => {
        switch (e.code) {
            case 'KeyD':
                keys.d = false
                break
            case 'KeyA':
                keys.a = false
                break
            case 'Space':
                keys.space = false
                break
        }
    })
    
    window.addEventListener('keydown', (e) => {
        keys.aOrd.push(e.code)
        switch (e.code) {
            case 'KeyD':
                keys.d = true
                break
            case 'KeyA':
                keys.a = true
                break
            case 'Space':
                keys.space = true
                break
        }
    })
}

export default isKeyPressed