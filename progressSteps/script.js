const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++
    prev.disabled = false
    btnDisable()
    update()
})

prev.addEventListener('click', () => {
    currentActive--
    next.disabled = false
    btnDisable()
    update()
})

function btnDisable () {
    if (currentActive === 1) {
        document.getElementById('prev').disabled = true
    } else if (currentActive === 4) {
        document.getElementById('next').disabled = true
    }
}

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }    
    })
    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length-1) / (circles.length-1) * 100 + '%'
}