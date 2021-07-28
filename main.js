const menuBtn = document.getElementById('menu_burger_id');
let isActive = false;

menuBtn.addEventListener('click', () => {
    if(!isActive){
        menuBtn.classList.add('active');
        isActive = true;
    }
    else{
        menuBtn.classList.remove('active');
        isActive = false;
    }
})