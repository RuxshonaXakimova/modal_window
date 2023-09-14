let button = document.querySelector('button')
let menu = document.querySelector('.menu')
let body = document.querySelector('[data-modal]')


button.onclick = () => {
    
    // if(menu.classList.contains('anim_open')){
    //     menu.classList.remove('anim_open')
    //     menu.classList.add('anim_close')
    //     return
    // } 
    if( menu.classList.contains('anim_close')){
        menu.classList.remove('anim_close')
        menu.classList.add('anim_open')
        return
    }

    menu.classList.add('anim_open')
}

body.onclick = (event) => {
    if(event.target !== button && menu.classList.contains('anim_open')) {
        menu.classList.remove('anim_open')
        menu.classList.add('anim_close')
    }
    
    console.log(event.target);
}

window.onkeyup = (e) => {
    if(e.code === "Escape") {
        menu.classList.remove('anim_open')
        menu.classList.add('anim_close')
    }
}