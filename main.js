const menuBtn = document.getElementById('menu_burger_id'),
menuContent = document.getElementById('menu_nav_id'),
menuContentCardRight = menuContent.querySelectorAll('ul.menu_right'),
menuContentCardRightLis = menuContent.querySelectorAll('ul.menu_right li'),
menuContentCardRightTitle = menuContent.querySelector('ul.menu_right li.menu_right-title'),
menuContentCardLeft = menuContent.querySelector('ul.menu_left');
let isActive = false;

menuBtn.addEventListener('click', () => {
    if(!isActive){
        menuBtn.classList.add('active');
        menuContent.classList.add('active');
        isActive = true;
        setTimeout(() => {
            menuContentCardRightTitle.style.marginTop = "0px";
            for(i = 0; i < menuContentCardRightLis.length; i++){
                menuContentCardRightLis[i].style.opacity = "1";
            }
            setTimeout(() =>{
                menuContentCardRight.style.marginLeft = "0px";
                menuContentCardLeft.style.width = "30%";
            },500)
        }, 100);
    }
    else{
        menuBtn.classList.remove('active');
        menu_nav_id.classList.remove('active');
        isActive = false;
    }
})