const button = document.querySelector('.hamMenu')
const backdrop = document.querySelector('.backdrop')
const dropDown = document.querySelector('.dropDown')
const links = document.querySelectorAll('.mobile-link')

button.addEventListener('click', function () {
    backdrop.classList.add("open")
    dropDown.classList.add("open")
})

backdrop.addEventListener('click', function () {
    dropDown.classList.remove('open')
    backdrop.classList.remove('open')
})



for (link of links) {
    link.addEventListener('click', function () {
        dropDown.classList.remove('open')
        backdrop.classList.remove('open')
    })
}