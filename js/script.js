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