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
            case 'ShiftLeft':
                keys.shift = false
                break
        }
    })

    window.addEventListener('keydown', (e) => {
        if (keys.aOrd.length > 1) keys.aOrd.pop()
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
            case 'ShiftLeft':
                keys.shift = true
                break
        }
    })
}

export default isKeyPressed