const menuBtn = document.getElementById('menu_burger_id'),
menuContent = document.getElementById('menu_nav_id');
let isActive = false;

menuBtn.addEventListener('click', () => {
    if(!isActive){
        menuBtn.classList.add('active');
        menu_nav_id.classList.add('active');
        isActive = true;
    }
    else{
        menuBtn.classList.remove('active');
        menu_nav_id.classList.remove('active');
        isActive = false;
    }
})