window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            if (player.velocity.y === 0 ) player.velocity.y = -25;

        break
        case 'a':
            //move left
            keys.a.pressed = true;
        break
        case 'd':
            //move right
            keys.d.pressed = true;
        break
    }
});

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'a':
            //move left
            keys.a.pressed = false;
            
        break
        case 'd':
            //move right
            keys.d.pressed = false;

        break
    }
});