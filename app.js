const popUpLines = document.querySelector('#lines')

function clicking() {
    document.querySelector('.select-box2').classList.toggle('hide')
    document.querySelector('.heading-social-container').classList.toggle('heading-social-container-clicked')
    document.querySelector('.heading-1').classList.toggle('heading-1-clicked')
}

popUpLines.addEventListener('click', clicking)