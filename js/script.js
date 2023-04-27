const handleDropdonwMenuClick = () => {
    const options = document.querySelector('nav')
    const dropdownMenuIcon = document.querySelector('#menu-icon')

    if(options.style.display === 'none') {
        options.style.display = 'block' 
        dropdownMenuIcon.classList.remove('fa-bars')
        dropdownMenuIcon.classList.add('fa-x')
    }
    else {
        options.style.display = 'none' 
        dropdownMenuIcon.classList.add('fa-bars')
        dropdownMenuIcon.classList.remove('fa-x')
    }
}