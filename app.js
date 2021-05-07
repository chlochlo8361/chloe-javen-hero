const popUpLines = document.querySelector('#lines')

function clicking() {
    document.querySelector('.select-box2').classList.toggle('hide')
    document.querySelector('.heading-social-container').classList.toggle('heading-social-container-clicked')
    document.querySelector('.heading-1').classList.toggle('heading-1-clicked')


    // document.querySelector('.heading-social-container').style.top = '0rem'
    // document.querySelector('.heading-1').style.margin = '0rem'
}
popUpLines.addEventListener('click', clicking)