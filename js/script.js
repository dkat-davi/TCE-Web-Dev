const windowWidth = this.window.innerWidth

const handleDropdonwMenuClick = () => {
    const options = document.querySelector('nav')
    const dropdownMenuIcon = document.querySelector('#menu-icon')

    if(options.style.display === 'none') {
        options.style.display = 'flex' 
        dropdownMenuIcon.classList.remove('fa-bars')
        dropdownMenuIcon.classList.add('fa-x')
    }
    else {        
        options.style.display = 'none' 
        dropdownMenuIcon.classList.add('fa-bars')
        dropdownMenuIcon.classList.remove('fa-x')
    }
}

const handleDropdonwMenuReferencesClick = () => {
    const options = document.querySelector('#references')
    const dropdownMenuIcon = document.querySelector('#references-menu-icon')

    if(options.style.display === 'none') {
        options.style.display = 'flex' 
        dropdownMenuIcon.classList.remove('fa-angle-down')
        dropdownMenuIcon.classList.add('fa-angle-up')
    }
    else {
        options.style.display = 'none' 
        dropdownMenuIcon.classList.remove('fa-angle-up')
        dropdownMenuIcon.classList.add('fa-angle-down')
    }
}

const handleScrollRight = () => {
    const listItens = document.querySelector('.people')
    listItens.scrollBy({ 
        left: 400, 
        top: 0, 
        behavior: 'smooth' 
    });
}

const handleScrollLeft = () => {
    const listItens = document.querySelector('.people')
    listItens.scrollBy({
        left: -400,
        top: 0,
        behavior: 'smooth'
      });
}


if (windowWidth <= '768') {
    const screen = document.querySelector('html')
    let initialPosition = null
    
    screen.addEventListener('touchstart', (event) => {
        initialPosition = event.touches[0].clientX
    })

    screen.addEventListener('touchmove', (event) => {
        if (initialPosition === null) {
            return;
        }

        const currentPosition = event.changedTouches[0].clientX

        if (currentPosition < initialPosition) {
            window.location.assign('./button.html')
        } else if ( currentPosition > initialPosition) {
            window.location.assign('./h1.html')
        }

        initialPosition = null
    })
}

window.addEventListener('resize', function() {
    const menu = document.querySelector('nav')
    const menuIcon = document.querySelector('#menu-icon')

    menu.style.display = windowWidth <= '768' ? 'none' : 'block'
    menuIcon.classList.add('fa-bars')
    menuIcon.classList.remove('fa-x')
})