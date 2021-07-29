const menuBtn = document.getElementById('menu_burger_id'),
menuContent = document.getElementById('menu_nav_id'),
menuContentCardRight = menuContent.querySelectorAll('ul.menu_right'),
menuContentCardRightLis = menuContent.querySelectorAll('ul.menu_right li'),
menuContentCardRightTitle = menuContent.querySelector('ul.menu_right li.menu_right-title'),

menuContentCardLeft = menuContent.querySelector('ul.menu_left'),
menuContentCardLeftBefore = menuContent.querySelector('ul.menu_left .menu_left_befor'),
menuContentCardLeftLis = menuContent.querySelectorAll('ul.menu_left li'),
menuContentCardLeftTitle = menuContent.querySelector('ul.menu_left li.menu_left-title');
let isActive = false;

menuBtn.addEventListener('click', () => {
    if(!isActive){
        menuBtn.classList.add('active');
        menuContent.classList.add('active');
        isActive = true;
        setTimeout(() => {
            menuContentCardRightTitle.style.marginTop = "0px";
            menuContentCardLeftTitle.style.marginTop = "0px";
            for(i = 0; i < menuContentCardRightLis.length; i++){
                menuContentCardRightLis[i].style.opacity = "1";
            }
            for(i = 0; i < menuContentCardLeftLis.length; i++){
                menuContentCardLeftLis[i].style.opacity = "1";
            }
            setTimeout(() =>{
                menuContentCardLeftBefore.style.width = "100%";
                
            },500)
        }, 100);
    }
    else{
        menuBtn.classList.remove('active');
        menu_nav_id.classList.remove('active');
        isActive = false;
        menuContentCardRightTitle.removeAttribute('style');
        menuContentCardLeftTitle.removeAttribute('style')
        for(i = 0; i < menuContentCardRightLis.length; i++){
            menuContentCardRightLis[i].removeAttribute('style');
        }
        for(i = 0; i < menuContentCardLeftLis.length; i++){
            menuContentCardLeftLis[i].removeAttribute('style');
        }
        menuContentCardLeftBefore.removeAttribute('style');
    }
})