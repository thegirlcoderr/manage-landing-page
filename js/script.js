const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

const onClick = () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
}



btn.addEventListener('click', onClick)