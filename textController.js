const hideText = document.querySelectorAll('.first__para__hidden')
const hideBtn = document.querySelectorAll('.read__more')

for(let i = 0; i<hideBtn.length; i++) {
    hideBtn[i].addEventListener('click', showText)
}

function showText() {
    let txt = this.previousElementSibling
    if (txt.style.display === 'block') {
        txt.style.display = 'none'
        this.textContent = 'Show more...'
    } else {
        txt.style.display = 'block'
        this.textContent = "Show less..."
    }
}