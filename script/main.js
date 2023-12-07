const but = document.querySelector('#but');
const body = document.querySelector('#body');

if (body) {
    but.addEventListener('click', () =>{
        body.classList.toggle('menu_block_active');
    })
}