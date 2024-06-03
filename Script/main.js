const listImg = document.querySelector('.imgContainer')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
let pos = 0

listImg.children[pos].classList.remove('hide')

next.addEventListener('click', (e) =>{
    e.preventDefault()
    pos === (listImg.children.length - 1) ? (
        pos = 0,
        listImg.children[(listImg.children.length - 1)].classList.add('hide'),
        listImg.children[pos].classList.remove('hide')
    ) : (
        pos += 1,
        listImg.children[(pos-1)].classList.add('hide'),
        listImg.children[pos].classList.remove('hide')
    )
})
prev.addEventListener('click', (e) =>{
    e.preventDefault()
    pos === 0 ? (
        pos = (listImg.children.length - 1),
        listImg.children[0].classList.add('hide'),
        listImg.children[pos].classList.remove('hide')
    ) : (
        pos -= 1,
        listImg.children[(pos+1)].classList.add('hide'),
        listImg.children[pos].classList.remove('hide')
    )
})